import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const formArgs = {
    validate: false,
    nativeValidation: false,
};

export const formArgTypes: ArgTypes<typeof formArgs> = {
    validate: {
        name: 'data-vl-validate',
        description: 'Validatie van invoervelden inschakelen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formArgs.validate },
        },
    },
    nativeValidation: {
        name: 'data-vl-native-validation',
        description: 'Stelt native validation in.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formArgs.validate },
        },
    },
};
