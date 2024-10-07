import { TYPES } from '../storybook/src/stories.helper';
import { ArgTypes } from '@storybook/web-components';

export const vlGroupArgs = {
    column: false,
    row: false,
    spaceBetween: false,
    // alignStart: false,
    // alignCenter: false,
    // alignEnd: false,
};

export const vlGroupArgTypes: ArgTypes<typeof vlGroupArgs> = {
    column: {
        name: 'vl-group--column',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit in een kolom.',
    },
    row: {
        name: 'vl-group--row',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit in een rij.',
    },
    spaceBetween: {
        name: 'vl-group--space-between',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Verdeelt de items met gelijke ruimte ertussen.',
    },
};
