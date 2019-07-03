const { AuthenticationError, PubSub } = require("apollo-server");
const JsonWebToken = require("jsonwebtoken");
const Bcrypt = require("bcryptjs");
const faker = require("faker");

const UPDATED_CONVERSATION = "UPDATED_CONVERSATION";
const UPDATED_CONVERSATIONS = "UPDATED_CONVERSATIONS";

const jwtSecret = "34%%##@#FGFKFL";

const pubsub = new PubSub();

const mockMessage = (userName = false) => ({
  id: faker.random.number,
  userName: Math.round(Math.random()) ? "me" : userName || faker.name.firstName,
  text: faker.hacker.phrase,
  read: 0
});

const mockConversation = (userName = false) => ({
  id: faker.random.number,
  userName: userName || faker.name.firstName,
  messages: Array.from(Array(!userName ? 1 : 3), () => mockMessage(userName))
});

const resolvers = {
  Query: {
    conversations: (_, { limit }, { token }) => {
      let isValid;
      const bearerToken = token.split(" ");

      if (bearerToken) {
        isValid = JsonWebToken.verify(bearerToken[1], jwtSecret, (error) => {
          if (error) {
            return false
          }
          return true
        });
      }

      if (isValid) {
        const mockedConversations = Array.from(Array(limit), () =>
          mockConversation()
        );

        setInterval(() => {
          pubsub.publish(UPDATED_CONVERSATIONS, {
            updatedConversations: [...mockedConversations, mockConversation()]
          });
        }, 3000);

        return mockedConversations;
      }
      throw new AuthenticationError('Please provide (valid) authentication details');
    },
    conversation: (_, { userName }) => mockConversation(userName)
  },
  Mutation: {
    sendMessage: (_, { to, text }) => {
      let conversation = mockConversation(to);

      conversation = {
        ...conversation,
        messages: [
          ...conversation.messages,
          {
            id: faker.random.number,
            userName: "me",
            text,
            read: 0
          }
        ]
      };

      pubsub.publish(UPDATED_CONVERSATION, {
        updatedConversation: conversation
      });

      return conversation;
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
      throw new AuthenticationError('Please provide (valid) authentication details');
    }
  },
  Subscription: {
    updatedConversation: {
      subscribe: () => pubsub.asyncIterator(UPDATED_CONVERSATION)
    },
    updatedConversations: {
      subscribe: () => pubsub.asyncIterator([UPDATED_CONVERSATIONS])
    }
  }
};

module.exports = resolvers;
