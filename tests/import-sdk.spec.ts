import { test, expect } from '@playwright/test';
import { CustomersApi } from 'customer-sdk';

test('can load sdk package', async () => {
  const sdk = await import('customer-sdk');

  console.log(Object.keys(sdk));

  expect(sdk).toBeDefined();
});