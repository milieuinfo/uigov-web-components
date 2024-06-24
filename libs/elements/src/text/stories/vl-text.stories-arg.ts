import { TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const textArgs = {
    hidden: false,
    success: false,
    warning: false,
    error: false,
    content: '',
};

export const textArgTypes: ArgTypes<typeof textArgs> = {
    hidden: {
        name: 'data-vl-visually-hidden',
        description: 'Attribuut wordt gebruikt om de tekst te verbergen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: textArgs.hidden },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Attribuut wordt gebruikt om de tekst te verbergen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: textArgs.success },
        },
    },
    warning: {
        name: 'data-vl-warning',
        description: 'Attribuut wordt gebruikt om de tekst te verbergen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: textArgs.warning },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Attribuut wordt gebruikt om de tekst te verbergen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: textArgs.error },
        },
    },
    content: {
        name: 'content',
        description: 'De tekst die getoond moet worden (enkel relevant in context van deze story).',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: textArgs.error },
        },
    },
};
