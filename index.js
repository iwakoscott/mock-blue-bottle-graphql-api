const { ApolloServer } = require('apollo-server');

const faker = require('faker');

function getRandomPrice() {
  const randomPrice = Number(faker.finance.amount(12, 22, 2));
  return Math.round(randomPrice * 10) / 10;
}

const typeDefs = `
  interface Coffee {
    id: ID!
    name: String!
    flavorNotes: [String!]!
    unitPrice: Float!
    unitWeight: Float!
    imageURL: String!
  }

  type Country {
    id: ID!
    name: String!
  }

  type Blend implements Coffee {
    id: ID!
    name: String!
    flavorNotes: [String!]!
    unitPrice: Float!
    unitWeight: Float!
    imageURL: String!
    countries: [Country!]!
  }

  type SingleOrigin implements Coffee {
    id: ID!
    name: String!
    flavorNotes: [String!]!
    unitPrice: Float!
    unitWeight: Float!
    imageURL: String!
    country: Country!
  }

  type Query {
    allCoffee: [Coffee!]!
    allSingleOrigin: [SingleOrigin!]!
    allBlends: [Blend!]!
  }
`;
const mocks = {
  Blend: () => ({
    id: faker.random.number(),
    name: faker.commerce.productName(),
    flavorNotes: [
      faker.commerce.productAdjective(),
      faker.commerce.productAdjective()
    ],
    unitPrice: getRandomPrice(),
    unitWeight: faker.random.number({ min: 8, max: 12 }),
    imageURL: faker.image.imageUrl()
  }),
  SingleOrigin: () => ({
    id: faker.random.number(),
    name: faker.commerce.productName(),
    flavorNotes: [
      faker.commerce.productAdjective(),
      faker.commerce.productAdjective()
    ],
    unitPrice: getRandomPrice(),
    unitWeight: faker.random.number({ min: 8, max: 12 }),
    imageURL: faker.image.imageUrl()
  }),
  Country: () => ({
    id: faker.random.number(),
    name: faker.address.country()
  })
};

const server = new ApolloServer({
  typeDefs,
  mocks
});

server
  .listen(4001)
  .then(({ url }) =>
    console.log(`Listening for coffee orders on ${url}... ☕️`)
  );
