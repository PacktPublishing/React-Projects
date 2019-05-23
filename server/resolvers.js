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

let cart = {
  total: 0,
  products: []
}

const resolvers = {
  Query: () => ({
    product: () => product,
    products: (obj, args) => {
      const { limit } = args
      return Array.from(Array(limit), () => product)
    },
    categories: () => Array.from(Array(5), () => category),
    cart: () => cart
  }),
  Mutation: () => ({
    addToCart: (obj, args) => {
      cart = {
        total: cart.total + 1,
        products: [
          ...cart.products,
          { id: args.productId }
        ]
      }

      return cart
    }
  }),
  Product: () => ({
    ...product,
    category
  })
};

module.exports = resolvers;
