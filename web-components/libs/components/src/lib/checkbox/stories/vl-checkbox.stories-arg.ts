export const checkboxArgs = {
    block: false,
    disabled: false,
    error: false,
    label: 'Optie 1',
    name: 'options',
    single: false,
    switchAttr: false,
    value: 'Optie 1',
};

export const checkboxArgTypes = {
    block: {
        name: 'data-vl-block',
        description: 'Attribute to show the checkbox as a block element',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Attribute to disable the checkbox',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Attribute to show an error state on the checkbox',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    label: {
        name: 'data-vl-label',
        description: 'Attribute to set a label for the checkbox',
        table: {
            type: { summary: 'string' },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    name: {
        name: 'data-vl-name',
        description: 'Attribute to the name of the checkbox',
        table: {
            type: { summary: 'string' },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    single: {
        name: 'data-vl-single',
        description: 'Attribute to show a checkbox without label',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    switchAttr: {
        name: 'data-vl-switch',
        description: 'Attribute to show a switch variant of the checkbox',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    value: {
        name: 'data-vl-value',
        description: 'Attribute to determine the value of the checkbox',
        table: {
            type: { summary: 'string' },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
};
