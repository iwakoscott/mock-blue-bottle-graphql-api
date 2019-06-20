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

  type Query {
    allCoffee: [Coffee!]!
    allSingleOrigin: [SingleOrigin!]!
    allBlends: [Blend!]!
  }
`;

const server = new ApolloServer({
  typeDefs
});
