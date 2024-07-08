import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formLabelDefaults } from '../vl-form-label.defaults';

type FormLabelArgs = typeof defaultArgs & typeof formLabelDefaults;

export const formLabelArgs: FormLabelArgs = {
    ...defaultArgs,
    ...formLabelDefaults,
};

export const formLabelArgTypes: ArgTypes<FormLabelArgs> = {
    ...defaultArgTypes(true),
    for: {
        name: 'for',
        description: 'Het id van de form control waarvoor het label bedoeld is.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.STRING },
            defaultValue: { summary: formLabelArgs.for },
        },
    },
    label: {
        name: 'label',
        description: 'De tekst van het label.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.STRING },
            defaultValue: { summary: formLabelArgs.label },
        },
    },
    block: {
        name: 'block',
        description: 'Duidt aan of het label de volledige breedte van de parent moet innemen.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: formLabelArgs.block },
        },
    },
    light: {
        name: 'light',
        description: 'Duidt aan of het label in light mode moet weergegeven worden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: formLabelArgs.light },
        },
    },
};
