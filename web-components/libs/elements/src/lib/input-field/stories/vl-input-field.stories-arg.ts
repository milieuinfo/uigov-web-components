import '../vl-input-field.element';
import '../../button/vl-button.element';
import '../../link/vl-link.element';
import '../../form-message/vl-form-validation-message.element';
import { formValidationArgs, formValidationArgTypes } from '../../form-validation/stories/form-validation.stories-arg';

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
        description: 'The input field will take the width of its parent.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Causes a red border to appear around the input field.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    small: {
        name: 'data-vl-small',
        description: 'Small variant of the input field.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Causes a green border to appear around the input field.',
        table: {
            category: 'Attributes',
            type: { summary: 'string' },
            defaultValue: { summary: 'false' },
        },
    },
    ...formValidationArgTypes,
};
