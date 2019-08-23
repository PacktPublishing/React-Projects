const { AuthenticationError } = require("apollo-server");
const JsonWebToken = require("jsonwebtoken");
const Bcrypt = require("bcryptjs");
const faker = require("faker");
const fetch = require("node-fetch");

const mockPost = require("./mocks");

let token;
let localExpoToken;
let stars = [];
let comments = [];
let myPosts = [];
let posts = [...Array.from(Array(10), () => mockPost({})), ...myPosts];

const user = {
  userName: "test",
  password: "$2b$10$5dwsS5snIRlKu8ka5r7z0eoRyQVAsOtAZHkPJuSx.agOWjchXhSum"
};

const jwtSecret = "34%%##@#FGFKFL";

const resolvers = {
  Query: {
    post: (_, { userName }) => mockPost({ userName }),
    posts: _ => {
      if (localExpoToken) {
        sendPushNotification(
          localExpoToken,
          "Test",
          "This comes from the server"
        );
      }

      return posts.reverse();
    }
  },
  Mutation: {
    addPost: (_, { image }, { token }) => {
      const isValid = token ? isTokenValid(token) : false;

      if (isValid) {
        const newPost = {
          id: faker.random.number,
          userName: "me",
          image,
          totalComments: 0,
          totalStars: 0,
          stars,
          comments
        };

        posts = [...posts, newPost];
        myPosts = [...myPosts, newPost];

        return newPost;
      }
      throw new AuthenticationError(
        "Please provide (valid) authentication details"
      );
    },
    loginUser: async (_, { userName, password }) => {
      let isValid;

      if (userName === user.userName) {
        isValid = await Bcrypt.compareSync(password, user.password);
      }

      if (isValid) {
        token = JsonWebToken.sign({ user: user.userName }, jwtSecret, {
          expiresIn: 3600
        });
        return {
          userName,
          token,
          expoToken: localExpoToken
        };
      }
      throw new AuthenticationError(
        "Please provide (valid) authentication details"
      );
    },
    storeExpoToken: (_, { expoToken }, { token }) => {
      const isValid = token ? isTokenValid(token) : false;

      if (isValid) {
        localExpoToken = expoToken;

        return {
          userName: user.userName,
          token,
          expoToken
        };
      }
      throw new AuthenticationError(
        "Please provide (valid) authentication details"
      );
    }
  }
};

const isTokenValid = token => {
  const bearerToken = token.split(" ");

  if (bearerToken) {
    return JsonWebToken.verify(bearerToken[1], jwtSecret, error => {
      if (error) {
        return false;
      }

      return true;
    });
  }

  return false;
};

const sendPushNotification = (token, title, body) =>
  fetch("https://exp.host/--/api/v2/push/send", {
    body: JSON.stringify({
      to: token,
      title,
      body,
      data: { id: Math.floor(Math.random() * 50) + 1, title, body }
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });

module.exports = resolvers;
