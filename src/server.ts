import { ApolloServer, gql } from 'apollo-server';

import { CountryAPI } from './country-datasource';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
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
    countries: [Country!]!
  }
`;

const resolvers = {
    Query: {
        // passing _ and __  is silly to make this code work
        countries: async (_, __, { dataSources : { countryAPI } }) => {
            return countryAPI.getCountries();
        }
    }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
    dataSources: () => ({
        countryAPI: new CountryAPI(),
    }),
    resolvers,
    typeDefs
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
