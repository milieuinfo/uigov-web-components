import { CATEGORIES, TYPES, defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { ErrorMessageDefaults } from '../vl-error-message.component';

export const errorMessageArgs: typeof defaultArgs & typeof ErrorMessageDefaults & { defaultSlot: string } = {
    ...defaultArgs,
    ...ErrorMessageDefaults,
    defaultSlot: '',
};

export const errorMessageArgTypes: ArgTypes<typeof errorMessageArgs> = {
    ...defaultArgTypes(true),
    for: {
        name: 'for',
        description: 'Het id van het input element waarvoor de error message getoond moet worden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.STRING },
            defaultValue: { summary: errorMessageArgs.for },
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
