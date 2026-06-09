import Ajv from 'ajv';
import { expect } from '@playwright/test';
import addFormats from 'ajv-formats';

const ajv = new Ajv();
addFormats(ajv);

export function validateSchema(
    data: unknown,
    schema: object) {
        const validate = ajv.compile(schema);

        const valid = validate(data);
        if (!valid) {
            console.log('Schema validation errors:');
            console.log(validate.errors);   
        }

        expect(valid).toBeTruthy();


    }


