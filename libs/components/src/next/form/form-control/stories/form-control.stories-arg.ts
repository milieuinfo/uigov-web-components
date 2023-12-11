import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { FormControlDefaults } from '../FormControl';

export const formControlArgs: typeof FormControlDefaults = {
    ...FormControlDefaults,
};

export const formControlArgTypes: ArgTypes<typeof formControlArgs> = {
    id: {
        name: 'id',
        description: 'Het id van het veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formControlArgs.id },
        },
    },
    name: {
        name: 'name',
        description: 'De naam van het veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formControlArgs.name },
        },
    },
    label: {
        name: 'label',
        description:
            'Het label van het veld.<br>Standaard wordt de tekst van het bijhorende label element gebruikt, indien dit niet aanwezig is of geen tekst bevat kan je dit attribuut gebruiken om het label te definiëren.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formControlArgs.label },
        },
    },
    block: {
        name: 'block',
        description: 'Duidt aan dat de component de volledige breedte van zijn parent mag innemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formControlArgs.block },
        },
    },
    required: {
        name: 'required',
        description: 'Duidt aan dat het veld verplicht is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formControlArgs.required },
        },
    },
    disabled: {
        name: 'disabled',
        description: 'Beeldt de component in een disabled state af.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formControlArgs.disabled },
        },
    },
    error: {
        name: 'error',
        description: 'Beeldt de component in een error state af.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formControlArgs.error },
        },
    },
    success: {
        name: 'success',
        description: 'Beeldt de component in een success state af.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formControlArgs.success },
        },
    },
    readonly: {
        name: 'readonly',
        description: 'Duidt aan dat het veld enkel leesbaar is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formControlArgs.readonly },
        },
    },
};
