import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formValidationArgs, formValidationArgTypes } from '../../form-validation/stories/form-validation.stories-arg';

export const inputFieldArgs = {
    block: false,
    error: false,
    small: false,
    success: false,
    disabled: false,
    ...formValidationArgs,
};

export const inputFieldArgTypes: ArgTypes<typeof inputFieldArgs> = {
    block: {
        name: 'data-vl-block',
        description: 'Laat het input veld de breedte van zijn parent innemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.block },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Plaatst een rode rand rond het input veld.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.error },
        },
    },
    small: {
        name: 'data-vl-small',
        description: 'Smalle variant van het input veld.',
        tabltype: { summary: TYPES.BOOLEAN },
        e: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.small },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Plaatst een groene rand rond het input veld.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.success },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Stelt disabled styling in & voorkomt gebruiker input in te geven.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.disabled },
        },
    },
    ...formValidationArgTypes,
};
