import { ArgTypes } from '@storybook/web-components';

export const modalArgs = {
    title: 'Modal',
    open: false,
    closable: false,
    notCancellable: false,
    notAutoClosable: false,
    allowOverflow: false,
};

export const modalArgTypes: ArgTypes = {
    title: {
        name: 'data-vl-title',
        description: 'Attribute used to add an heading 2 (h2) title. When empty there is no heading element created.',
        table: {
            type: { summary: 'String' },
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    open: {
        name: 'data-vl-open',
        description: 'Attribute to immediately open up the modal after rendering.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    closable: {
        name: 'data-vl-closable',
        description: 'Attribute to make the modal closable through the close icon in the top right corner.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    notCancellable: {
        name: 'data-vl-not-cancellable',
        description: 'Attribute used to make the modal non cancellable',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    notAutoClosable: {
        name: 'data-vl-not-auto-closable',
        description: 'Attribute to disable the closing of the modal when clicking the action in the button slot.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    allowOverflow: {
        name: 'data-vl-allow-overflow',
        description: 'Attribute to allow the content of the modal to overflow.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
};
