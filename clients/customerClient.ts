import { CustomersApi, Configuration } from 'customer-sdk';

export const customerClient = new CustomersApi(new Configuration({
    basePath: 'http://localhost:3001'
}));