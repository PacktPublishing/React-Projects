const faker = require("faker");

const mockCategory = () => ({
  id: faker.random.number,
  title: faker.commerce.department
});

const mockProduct = (id = false) => ({
  id: id || faker.random.number,
  title: faker.commerce.productName,
  thumbnail: faker.image.imageUrl(
    400,
    400,
    faker.random.arrayElement(["fashion", "transport", "technics", "food"])
  ),
  price: faker.commerce.price(),
  category: mockCategory()
});

let cart = {
  total: 0,
  products: []
};

const resolvers = {
  Query: {
    product: () => mockProduct(),
    products: (_, { limit = 10 }) =>
      Array.from(Array(limit), () => mockProduct()),
    categories: (_, { limit = 10 }) =>
      Array.from(Array(limit), () => mockCategory()),
    cart: () => cart
  },
  Mutation: {
    addToCart: (_, { id }) => {
      cart = {
        total: cart.total + 1,
        products: [...cart.products, mockProduct(id)]
      };

      return cart;
    }
  }
};

module.exports = resolvers;
