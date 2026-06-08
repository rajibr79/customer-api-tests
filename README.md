# Customer API Tests

Playwright-based API automation framework for testing the Customer API through a generated TypeScript SDK.

## Architecture
```text
Playwright
    |
    v
Customer SDK
    |
    v
Customer API
    |
    v
PostgreSQL
```

## Features

- Playwright + TypeScript
- SDK-driven API testing
- OpenAPI-generated TypeScript client
- Positive and negative API test coverage
- Reusable API client
- Test data factory pattern
- Automatic test data cleanup
- Custom API assertions
- Parallel test execution

## Current Coverage

- Create Customer
- Get All Customers
- Get Customer By ID
- Update Customer
- Patch Customer
- Delete Customer
- Duplicate Email Validation (409)
- Customer Not Found Validation (404)

## Project Structure
```text
customer-api-tests
│
├── assertions/
├── clients/
├── factories/
├── fixtures/
├── tests/
└── utils/
```

## Run Tests

```bash
npm install
npx playwright test 
```

## Related Repositories


## Related Repositories

| Repository | Description |
|------------|-------------|
| [customer-api](https://github.com/<username>/customer-api) | Node.js + Express Customer API |
| [customer-sdk](https://github.com/<username>/customer-sdk) | OpenAPI-generated TypeScript SDK |


## Planned Enhancements

- OpenAPI contract validation
- JSON schema validation
- Docker-based test environment
- Service virtualization using Mountebank
- AI-assisted failure analysis

