export const resolvers = {
    Query: {
        byName: async (_, { name }, { dataSources : { countryAPI } }) => {
            return countryAPI.getCountriesByName(name);
        } ,
        // passing _ and __  is silly to make this code work
        countries: async (_, __, { dataSources : { countryAPI } }) => {
            return countryAPI.getCountries();
        }
    }
};
