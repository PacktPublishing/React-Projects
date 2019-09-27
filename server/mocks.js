const faker = require('faker');

const mockStar = (userName = false) => ({
  id: faker.random.number,
  userName: userName || faker.name.firstName,
});

const mockComment = (userName = false) => ({
  id: faker.random.number,
  userName: userName || faker.name.firstName,
  text: faker.hacker.phrase,
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
    comments: Array.from(Array(totalComments), () => mockComment()),
  };
};

module.exports = mockPost;
