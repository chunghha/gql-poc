import { RESTDataSource } from 'apollo-datasource-rest';

export class ExchangeAPI extends RESTDataSource {
  private readonly ALLOWED_CURRENCIES = [
    'BGN',
    'CAD',
    'BRL',
    'HUF',
    'DKK',
    'JPY',
    'ILS',
    'TRY',
    'RON',
    'GBP',
    'PHP',
    'HRK',
    'NOK',
    'USD',
    'MXN',
    'AUD',
    'IDR',
    'KRW',
    'HKD',
    'ZAR',
    'ISK',
    'CZK',
    'THB',
    'MYR',
    'NZD',
    'PLN',
    'SEK',
    'RUB',
    'CNY',
    'SGD',
    'CHF',
    'INR'
  ];

  constructor() {
    super();
    this.baseURL = 'https://api.exchangeratesapi.io/';
  }

  protected async getExchangeRate(base: string) {
    if (this.ALLOWED_CURRENCIES.indexOf(base) === -1) {
      return { base };
    } else {
      return this.get(`latest?base=${base.toUpperCase()}`);
    }
  }
}
