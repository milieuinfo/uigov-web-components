import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { Args, ArgTypes } from '@storybook/web-components';

export const formArgs: Args = {
    validate: true,
};

export const formArgTypes: ArgTypes = {
    validate: {
        name: 'data-vl-validate',
        description: 'Attribute is used to indicate that the input fields validation should be enabled.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
};
