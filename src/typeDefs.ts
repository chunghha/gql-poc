import { gql } from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # Currency type
  type Currency {
    code: String
    name: String
    symbol: String
  }

  # This "Country" type can be used in other type declarations.
  type Country {
    name: String
    capital: String
    region: String
    subregion: String
    flag: String
    population: Int
    latlng: [Int]
    currencies: [Currency]
  }

  # ExchangeRate type
  type ExchangeRate {
    date: String
    #rates: badly designed type from the service 
    base: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    byName(name: String!): [Country]
    countries: [Country!]!
    exchangeRate(base: String!): ExchangeRate
  }
`;
