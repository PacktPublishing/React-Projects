const faker = require("faker");

const product = {
  id: faker.random.number,
  title: faker.commerce.productName,
  thumbnail: faker.image.imageUrl(
    faker.random.arrayElement(["fashion", "transport", "technics", "food"])
  ),
  price: faker.commerce.price()
}

const resolvers = {
  Query: () => ({
    product: () => product,
    products: () => Array.from(Array(10), () => product),
  })
};

module.exports = resolvers;
