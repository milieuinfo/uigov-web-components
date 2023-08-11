import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const formArgs = {
    escapeFieldNames: false,
    nativeValidation: false,
    validate: false,
};

export const formArgTypes: ArgTypes<typeof formArgs> = {
    escapeFieldNames: {
        name: 'data-vl-escape-field-names',
        description: `Geeft aan dat het name attribuut van de input velden ge-escaped moet worden.<br/>Kan gebruikt worden als er een '.' in het name attribuut staat en de validatie niet correct werkt.`,
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formArgs.escapeFieldNames },
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
    validate: {
        name: 'data-vl-validate',
        description: 'Validatie van invoervelden inschakelen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formArgs.validate },
        },
    },
};
