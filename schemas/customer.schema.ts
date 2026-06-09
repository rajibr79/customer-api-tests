export const customerSchema = {
    type: 'object',
    required: [
        'id',
        'firstName',
        'lastName',
        'email',
        'createdAt',
        'updatedAt'
    ],
    properties: {
        id: {type: 'string'},
        firstName: { type: 'string' },
        lastName: { type:'string'},
        email: {
            type: 'string',
            format: 'email'
        },
        createdAt: {},
        updatedAt: {}

    }
}
