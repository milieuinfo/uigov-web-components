import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { InputFieldMaskedDefaults } from '../vl-input-field-masked.component';
import { inputFieldArgTypes, inputFieldArgs } from '../../stories/vl-input-field.stories-arg';
import { maskOptions } from '../masks';

export const inputFieldMaskedArgs: typeof inputFieldArgs & typeof InputFieldMaskedDefaults = {
    ...inputFieldArgs,
    ...InputFieldMaskedDefaults,
};

export const inputFieldMaskedArgTypes: ArgTypes<typeof inputFieldMaskedArgs> = {
    ...inputFieldArgTypes,
    pattern: {
        name: 'pattern',
        description:
            'Dit attribuut wordt uitgeschakeld bij de input-field-masked component omdat het mask deze werking overneemt.<br/>Gelieve dit attribuut niet te gebruiken.',
        control: { type: null },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: InputFieldMaskedDefaults.pattern },
        },
    },
    mask: {
        name: 'mask',
        description: 'Het mask van het input veld.<br/>Dit attribuut is niet reactief.',
        control: { type: 'select' },
        options: Object.keys(maskOptions),
        table: {
            type: { summary: Object.keys(maskOptions) },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: InputFieldMaskedDefaults.mask },
        },
    },
    maskPrefix: {
        name: 'mask-prefix',
        description:
            'Het mask prefix van het input veld.<br/>De prefix wordt automatisch toegevoegd aan de value van het input veld indien de value niet begint met de prefix.<br/>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: InputFieldMaskedDefaults.maskPrefix },
        },
    },
    rawValue: {
        name: 'raw-value',
        description: 'Geeft de raw value terug bij het submitten van een form.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: InputFieldMaskedDefaults.rawValue },
        },
    },
    disableValidation: {
        name: 'disable-validation',
        description: 'Schakelt de automatische validatie uit bij het gebruik in een form.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: InputFieldMaskedDefaults.disableValidation },
        },
    },
    validationRegex: {
        name: 'validation-regex',
        description: 'Overschrijft de regex die gebruikt wordt tijdens het valideren bij het gebruik in een form.',
        table: {
            type: { summary: TYPES.REGEX },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: InputFieldMaskedDefaults.validationRegex },
        },
    },
};
