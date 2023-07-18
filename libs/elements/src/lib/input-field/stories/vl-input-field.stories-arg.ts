import '../vl-input-field.element';
import '../../button/vl-button.element';
import '../../link/vl-link.element';
import '../../form-message/vl-form-validation-message.element';
import { formValidationArgs, formValidationArgTypes } from '../../form-validation/stories/form-validation.stories-arg';
import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';

export const inputFieldArgs = {
    block: false,
    error: false,
    small: false,
    success: false,
    disabled: false,
    ...formValidationArgs,
};

export const inputFieldArgTypes = {
    block: {
        name: 'data-vl-block',
        description: 'Laat het input veld de breedte van zijn parent innemen.',
        table: {
            category: 'Attributes',
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: inputFieldArgs.block },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Plaatst een rode rand rond het input veld.',
        table: {
            category: 'Attributes',
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: inputFieldArgs.error },
        },
    },
    small: {
        name: 'data-vl-small',
        description: 'Smalle variant van het input veld.',
        table: {
            category: 'Attributes',
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: inputFieldArgs.small },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Plaatst een groene rand rond het input veld.',
        table: {
            category: 'Attributes',
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: inputFieldArgs.success },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Stelt disabled styling in & voorkomt gebruiker input in te geven.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: inputFieldArgs.disabled },
        },
    },
    ...formValidationArgTypes,
};
