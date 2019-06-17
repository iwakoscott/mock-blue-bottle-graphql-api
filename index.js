const { ApolloServer } = require('apollo-server');

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
`;

const server = new ApolloServer({
  typeDefs
});

server
  .listen()
  .then(({ url }) =>
    console.log(`Listening for coffee orders on ${url}... ☕️`)
  );
