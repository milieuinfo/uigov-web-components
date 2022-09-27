export const modalArgs = {
    title: 'Modal',
    open: false,
    closable: false,
    notCancellable: false,
    notAutoClosable: false,
    allowOverflow: false,
};

export const modalArgTypes = {
    title: {
        name: 'data-vl-title',
        type: { summary: 'String' },
        description: 'Attribute used to add an heading 2 (h2) title. When empty there is no heading element created.',
        table: {
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    open: {
        name: 'data-vl-open',
        type: { summary: 'Boolean' },
        description: 'Attribute to immediatly open up the modal after rendering.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    closable: {
        name: 'data-vl-closable',
        type: { summary: 'Boolean' },
        description: 'Attribute to make the modal closable through the close icon in the top right corner.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    notCancellable: {
        name: 'data-vl-not-concellable',
        type: { summary: 'Boolean' },
        description: 'Attribute used to make the modal non cancellable',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    notAutoClosable: {
        name: 'data-vl-not-auto-closable',
        type: { summary: 'Boolean' },
        description: 'Attribute to disable the closing of the modal when clicking the action in the button slot.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    allowOverflow: {
        name: 'data-vl-allow-overflow',
        type: { summary: 'Boolean' },
        description: 'Attribute to allow the content of the modal to overflow.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
};
