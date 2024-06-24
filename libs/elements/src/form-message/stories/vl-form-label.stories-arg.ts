import { TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const formLabelArgs = {
    light: false,
    block: false,
};

export const formLabelArgTypes: ArgTypes<typeof formLabelArgs> = {
    block: {
        name: 'data-vl-block',
        description: 'Attribute to create a block variant of a label',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: false },
            category: 'Attributes',
        },
    },
    light: {
        name: 'data-vl-light',
        description: 'Attribute to create a light variant of a label',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: false },
            category: 'Attributes',
        },
    },
};
