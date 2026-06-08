import { expect } from '@playwright/test';

export function expectApiResponseStatus(
  error: any,
  expectedStatus: number
) {
  expect(error.response.status)
    .toBe(expectedStatus);
}

export function expectConflict(
    error: any
) {
    expectApiResponseStatus(error, 409);
}

export function expectNotFound(
    error: any
){
    expectApiResponseStatus(error, 404)
}

export function expectBadRequest (
    error: any
){
    expectApiResponseStatus(error, 400)
}
