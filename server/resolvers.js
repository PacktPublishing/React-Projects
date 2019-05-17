const faker = require("faker");

const product = {
  id: faker.random.number,
  title: faker.commerce.productName,
  thumbnail: faker.image.imageUrl(
    faker.random.arrayElement(["fashion", "transport", "technics", "food"])
  ),
  price: faker.commerce.price()
}

const category = {
  id: faker.random.number,
  title: faker.commerce.department
}

const resolvers = {
  Query: () => ({
    product: () => product,
    products: (obj, args) => {
      const { limit } = args
      return Array.from(Array(limit), () => product)
    },
    categories: () => Array.from(Array(5), () => category),
  }),
  Product: () => ({
    ...product,
    category
  })
};

module.exports = resolvers;
