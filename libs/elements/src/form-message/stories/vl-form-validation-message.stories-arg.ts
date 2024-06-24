import { TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formLabelArgs } from './vl-form-label.stories-arg';

export const formValidationMessageArgs = {
    error: true,
    success: false,
};

export const formValidationMessageArgTypes: ArgTypes<typeof formValidationMessageArgs> = {
    error: {
        name: 'data-vl-error',
        description: 'Attribute to create an error type form validation message',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: true },
            category: 'Attributes',
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Attribute to create an success type form validation message',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: false },
            category: 'Attributes',
        },
    },
};
