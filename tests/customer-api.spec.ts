import {test, expect, trackCustomer, untrackCustomer} from '../fixtures/customerCleanup';
import {expectValidCustomer} from '../assertions/customerAssertions';
import { customerClient } from '../clients/customerClient';
import { CustomerFactory } from '../factories/customerFactory';
import { validateSchema } from '../assertions/schemaAssertions';
import {customerSchema} from '../schemas/customer.schema';


import {expectBadRequest, expectConflict, expectNotFound} from '../assertions/apiAssertions';



test('Get All Customers', async() => {

    const customers = await customerClient.getCustomers();

    for ( const customer of customers) {
        expectValidCustomer(customer);
    }
});

test('create customer', async() => {


    const customerData =  CustomerFactory.validCustomer();

    const customer = await customerClient.createCustomer({ 
        createCustomerRequest: customerData });

    validateSchema(customer, customerSchema);
    if(!customer.id) {
        throw new Error('Customer ID not returned from API');
    }
    trackCustomer(customer.id);

    await customerClient.deleteCustomer({ id: customer.id });
    untrackCustomer(customer.id);
    });

test('should not allow duplicate email', async () => {
  const customerData = CustomerFactory.validCustomer();

  const customer = await customerClient.createCustomer({
    createCustomerRequest: customerData
  });



  if (!customer.id) {
    throw new Error('Customer ID not returned');
  }
    trackCustomer(customer.id);

  try {
    await customerClient.createCustomer({
      createCustomerRequest: customerData
    });

    throw new Error('Expected duplicate email error');
  } catch (error) {
    expectConflict(error);
  }
});

test('should return 404 for missing customer', async () => {
  try {
    await customerClient.getCustomerById({
      id: crypto.randomUUID()
    });

    throw new Error(
      'Expected customer not found'
    );
  } catch (error: any) {
    expectNotFound(error);
  }
});

test('should return 400 for invalid email', async () => {
    const customerData = CustomerFactory.invalidCustomer()

    try {
        await customerClient.createCustomer({
        createCustomerRequest: customerData
    })

    throw new Error ('Expected bad request')
    } catch (error: any) {
    expectBadRequest(error)
    }
});


    
