import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const errorMessageArgs = {
    input: '',
    state: '',
    show: false,
    defaultSlot: '',
};

export const errorMessageArgTypes: ArgTypes<typeof errorMessageArgs> = {
    input: {
        name: 'input',
        description: 'Het id van het input element waarvoor de error message getoond moet worden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.STRING },
            defaultValue: { summary: errorMessageArgs.input },
        },
    },
    state: {
        name: 'state',
        description: 'De state van het input element waarvoor de error message getoond moet worden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: 'ValidityState' },
            defaultValue: { summary: errorMessageArgs.state },
        },
    },
    show: {
        name: 'show',
        description:
            'Duidt aan of de error message getoond moet worden.<br>Dit kan gebruikt worden om de error message manueel te tonen of te verbergen.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: errorMessageArgs.show },
        },
    },
    defaultSlot: {
        name: '[default]',
        description: 'De inhoud van de error message.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: errorMessageArgs.defaultSlot },
        },
    },
};
