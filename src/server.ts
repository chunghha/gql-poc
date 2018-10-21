import { ApolloServer } from 'apollo-server';

import { CountryAPI } from './datasources/country-datasource';
import { ExchangeAPI } from './datasources/exchange-datasource';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';



// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
    dataSources: () => ({
        countryAPI: new CountryAPI(),
        exchangeAPI: new ExchangeAPI()
    }),
    resolvers,
    typeDefs
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
