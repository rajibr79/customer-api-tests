export class CustomerFactory {
    static validCustomer() {
        const timestamp = Date.now();

        return {
            firstName: 'Test',
            lastName: 'User',
            email: `test-${timestamp}@example.com`
        };
    }

    static customerWithEmail(email: string) {
        return {
            firstName: 'Test',
            lastName: 'User',
            email
        };
    }

    static invalidCustomer() {
        return {
            firstName: 'Test',
            lastName: 'User',
            email: 'invalid-email'
        };
    }
}