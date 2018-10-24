import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
    Query: {
        byName: async (_, { name }, { dataSources : { countryAPI } }) => {
            return countryAPI.getCountriesByName(name);
        },
        // passing _ and __  is silly to make this code work
        countries: async (_, __, { dataSources : { countryAPI } }) => {
            return countryAPI.getCountries();
        },
        exchangeRate: async (_, { base }, { dataSources : { exchangeAPI } }) => {
            return exchangeAPI.getExchangeRate(base);
        }
    }
};
