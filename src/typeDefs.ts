import { gql } from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Country" type can be used in other type declarations.
  type Country {
    name: String
    capital: String
    subregion: String
    flag: String
    population: Int
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    byName(name: String!): [Country]
    countries: [Country!]!
  }
`;