const { AuthenticationError, PubSub } = require('apollo-server');
const JsonWebToken = require('jsonwebtoken');
const Bcrypt = require('bcryptjs');
const faker = require('faker');

const MESSAGE_ADDED = 'MESSAGE_ADDED';

const jwtSecret = '34%%##@#FGFKFL';

const pubsub = new PubSub();

const isTokenValid = token => {
  const bearerToken = token.split(' ');

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

const mockMessage = (userName = false) => ({
  id: faker.random.number,
  userName: Math.round(userName ? userName : Math.random())
    ? 'me'
    : faker.name.firstName,
  text: faker.hacker.phrase,
});

const mockConversation = (userName = false) => ({
  id: faker.random.number,
  userName: userName || faker.name.firstName,
  messages: Array.from(Array(!userName ? 1 : 3), () => mockMessage(userName)),
});

const resolvers = {
  Query: {
    conversation: (_, { userName }) => mockConversation(userName),
    conversations: (_, { limit = 10 }) =>
      Array.from(Array(limit), () => mockConversation()),
  },
  Mutation: {
    sendMessage: (_, { to, text }, { token }) => {
      const isValid = token ? isTokenValid(token) : false;

      if (isValid) {
        let conversation = mockConversation(to);
        const messageAdded = {
          id: faker.random.number,
          userName: 'me',
          text,
        };

        conversation = {
          ...conversation,
          messages: [...conversation.messages, messageAdded],
        };

        pubsub.publish(MESSAGE_ADDED, {
          messageAdded,
        });

        return conversation;
      }
      throw new AuthenticationError(
        'Please provide (valid) authentication details',
      );
    },
    loginUser: async (_, { userName, password }) => {
      let isValid;
      const user = {
        userName: 'test',
        password:
          '$2b$10$5dwsS5snIRlKu8ka5r7z0eoRyQVAsOtAZHkPJuSx.agOWjchXhSum',
      };

      if (userName === user.userName) {
        isValid = await Bcrypt.compareSync(password, user.password);
      }

      if (isValid) {
        const token = JsonWebToken.sign({ user: user.userName }, jwtSecret, {
          expiresIn: 3600,
        });
        return {
          userName,
          token,
        };
      }
      throw new AuthenticationError(
        'Please provide (valid) authentication details',
      );
    },
  },
  Subscription: {
    messageAdded: {
      subscribe: (_, { userName }) => {
        setInterval(() => {
          pubsub.publish(MESSAGE_ADDED, {
            messageAdded: mockMessage(userName),
          });
        }, 9000);

        return pubsub.asyncIterator(MESSAGE_ADDED, { userName });
      },
    },
  },
};

module.exports = resolvers;
