import { Customer } from 'customer-sdk';
import { expect } from '@playwright/test';

export function expectValidCustomer (customer: Customer) {
    expect(customer.id).toBeDefined();
    expect(customer.firstName).toBeTruthy();
    expect(customer.lastName).toBeTruthy();
    expect(customer.email).toContain('@');
}