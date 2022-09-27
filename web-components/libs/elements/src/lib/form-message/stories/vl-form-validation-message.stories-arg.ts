export const formValidationMessageArgs = {
    error: true,
    success: false,
};

export const formValidationMessageArgTypes = {
    error: {
        name: 'data-vl-error',
        type: { summary: 'Boolean' },
        description: 'Attribute to create an error type form validation message',
        table: {
            defaultValue: { summary: true },
            category: 'Attributes',
        },
    },
    success: {
        name: 'data-vl-success',
        type: { summary: 'Boolean' },
        description: 'Attribute to create an success type form validation message',
        table: {
            defaultValue: { summary: false },
            category: 'Attributes',
        },
    },
};
