import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { RadioDefaults } from '../index';
import { action } from '@storybook/addon-actions';
import { inputFieldArgs } from '@domg-wc/components/next/form/input-field/stories/vl-input-field.stories-arg';

export const radioArgs: typeof defaultArgs & typeof RadioDefaults & { onVlChecked: () => void; contentSlot: string } = {
    ...defaultArgs,
    ...RadioDefaults,
    contentSlot: '',
    onVlChecked: action('vl-checked'),
};

export const radioArgTypes: ArgTypes<typeof radioArgs> = {
    ...defaultArgTypes(true),
    id: {
        name: 'id',
        description: 'Het id van het veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.id },
        },
    },
    value: {
        name: 'value',
        description: 'De value van de radio.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.value },
        },
    },
    name: {
        name: 'name',
        description: 'De naam van het veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.name },
        },
    },
    label: {
        name: 'label',
        description:
            'Het label van het veld.<br>Standaard wordt de tekst van het bijhorende label element gebruikt, indien dit niet aanwezig is of geen tekst bevat kan je dit attribuut gebruiken om het label te definiëren.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.label },
        },
    },
    block: {
        name: 'block',
        description: 'Duidt aan dat de component de volledige breedte van zijn parent mag innemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.block },
        },
    },
    readonly: {
        name: 'readonly',
        description: 'Duidt aan dat het veld enkel leesbaar is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.readonly },
        },
    },
    disabled: {
        name: 'disabled',
        description: 'Beeldt de component in een disabled state af.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.disabled },
        },
    },
    error: {
        name: 'error',
        description: 'Beeldt de component in een error state af.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.error },
        },
    },
    success: {
        name: 'success',
        description: 'Beeldt de component in een success state af.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.success },
        },
    },
    checked: {
        name: 'checked',
        description: 'Vinkt de radio aan of uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.checked },
        },
    },
    contentSlot: {
        name: 'content',
        description: 'De content van de radio.',
        table: {
            category: CATEGORIES.SLOTS,
            type: { summary: TYPES.HTML },
            defaultValue: { summary: radioArgs.contentSlot },
        },
    },
    onVlChecked: {
        name: 'vl-checked',
        description:
            'Event dat afgevuurd wordt als de radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.',
        table: {
            type: { summary: '{ checked: boolean, value?: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
