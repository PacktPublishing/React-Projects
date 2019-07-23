const { AuthenticationError, PubSub } = require("apollo-server");
const JsonWebToken = require("jsonwebtoken");
const Bcrypt = require("bcryptjs");
const faker = require("faker");

const COMMENT_ADDED = "COMMENT_ADDED";
const STAR_ADDED = "STAR_ADDED";

const jwtSecret = "34%%##@#FGFKFL";

const pubsub = new PubSub();

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

const mockStar = (userName = false) => ({
  id: faker.random.number,
  userName: userName || faker.name.firstName
});

const mockComment = (userName = false) => ({
  id: faker.random.number,
  userName: userName || faker.name.firstName,
  text: faker.hacker.phrase
});

const mockPost = ({ userName = false, image = false }) => {
  const totalStars = Math.floor(Math.random() * 50) + 1;
  const totalComments = Math.floor(Math.random() * 5) + 1;
  return {
    id: faker.random.number,
    userName: userName || faker.name.firstName,
    image: image || faker.image.technics(600, 600),
    totalStars,
    totalComments,
    stars: Array.from(Array(totalStars), () => mockStar()),
    comments: Array.from(Array(totalComments), () => mockComment())
  };
};

let stars = [];
let comments = [];
let myPosts = [];
let posts = [...Array.from(Array(10), () => mockPost({})), ...myPosts];

const resolvers = {
  Query: {
    post: (_, { userName }) => mockPost({ userName }),
    posts: _ => posts.reverse()
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
      const user = {
        userName: "test",
        password: "$2b$10$5dwsS5snIRlKu8ka5r7z0eoRyQVAsOtAZHkPJuSx.agOWjchXhSum"
      };

      if (userName === user.userName) {
        isValid = await Bcrypt.compareSync(password, user.password);
      }

      if (isValid) {
        const token = JsonWebToken.sign({ user: user.userName }, jwtSecret, {
          expiresIn: 3600
        });
        return {
          userName,
          token
        };
      }
      throw new AuthenticationError(
        "Please provide (valid) authentication details"
      );
    }
  },
  Subscription: {
    commentAdded: {
      subscribe: (_, { userName }) => {
        setInterval(() => {
          pubsub.publish(COMMENT_ADDED, {
            commentAdded: mockComment(userName)
          });
        }, 9000);

        return pubsub.asyncIterator(COMMENT_ADDED, { userName });
      }
    },
    starAdded: {
      subscribe: (_, { userName }) => {
        setInterval(() => {
          pubsub.publish(STAR_ADDED, {
            starAdded: mockStar(userName)
          });
        }, 3000);

        return pubsub.asyncIterator(STAR_ADDED, { userName });
      }
    }
  }
};

module.exports = resolvers;
