import { RESTDataSource } from 'apollo-datasource-rest';

export class CountryAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://restcountries.eu/';
    }

    protected async getCountries() {
        return this.get('rest/v2/all');
    }

    protected async getCountriesByName(name: string) {
        return this.get(`rest/v2/name/${name}`);
    }
}