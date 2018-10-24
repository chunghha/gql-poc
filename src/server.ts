import { ApolloServer } from 'apollo-server-koa';

import * as Koa from 'koa';
import * as logger from 'koa-pino-logger';

import { CountryAPI } from './datasources/country-datasource';
import { ExchangeAPI } from './datasources/exchange-datasource';
import schema from './graphql';

const app = new Koa();
app.use(logger());

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    dataSources: () => ({
        countryAPI: new CountryAPI(),
        exchangeAPI: new ExchangeAPI()
    }),
    schema
});
server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
})
