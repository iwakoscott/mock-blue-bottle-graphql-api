import gql from 'graphql-tag';

const schema = gql`
  interface Coffee {
    id: ID!
    name: String!
    flavorNotes: [String!]!
    unitPrice: Float!
    unitWeight: Float!
    imageURL: String!
  }
`;
