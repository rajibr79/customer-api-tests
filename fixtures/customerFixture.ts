import {test as base, expect} from '@playwright/test';
import {customerClient} from '../clients/customerClient';
import {
    CustomersApi,
    Configuration
 } from 'customer-sdk'

 import type {
    TestFixtures
 } from './types';

const customerIds= new Set<string>();

export function trackCustomer(id: string) {
    customerIds.add(id);
}

export const test = base.extend<TestFixtures>({
    customerClient: async ({}, use)=> {
    const client = new CustomersApi(
    new Configuration({
        basePath:
        process.env.CUSTOMER_API_BASE_URL ?? 'http://localhost:3001'
    })
);
    await use(client);
}
})

test.afterEach(async () => {
    for (const id of customerIds) {
        try {
            await customerClient.deleteCustomer({ id });
        } catch (error: any) {
            if(error.response.status == 404) {
                continue;
            }
            console.error(`Failed to delete customer with ID ${id}:`, error);
        }
    }
    customerIds.clear();
});

export function getTrackedCustomers() {
    return [...customerIds];
}

export function untrackCustomer(id: string) {
    customerIds.delete(id);
}

export function cleartrackedCustomers() {
    customerIds.clear();
}

export {expect};