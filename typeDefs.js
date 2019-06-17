import gql from 'graphql-tag';

const schema = gql`
  enum SourcingType {
    BLEND
    SINGLE_ORIGIN
  }

  type Coffee {
    id: ID!
    sourcingType: SourcingType!
    name: String!
    flavorNotes: [String!]!
    unitPrice: Float!
    unitWeight: Float!
    imageURL: String!
  }
`;
