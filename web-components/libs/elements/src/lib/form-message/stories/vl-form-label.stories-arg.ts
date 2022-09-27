export const formLabelArgs = {
    light: false,
    block: false,
};

export const formLabelArgTypes = {
    block: {
        name: 'data-vl-block',
        type: { summary: 'Boolean' },
        description: 'Attribute to create a block variant of a label',
        table: {
            defaultValue: { summary: false },
            category: 'Attributes',
        },
    },
    light: {
        name: 'data-vl-light',
        type: { summary: 'Boolean' },
        description: 'Attribute to create a light variant of a label',
        table: {
            defaultValue: { summary: false },
            category: 'Attributes',
        },
    },
};
