import { TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const linkListArgs = {
    small: false,
    inline: false,
    bordered: false,
};

export const linkListArgTypes: ArgTypes<typeof linkListArgs> = {
    small: {
        name: 'data-vl-small',
        description: 'The smaller variant of a link-list.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
        },
    },
    inline: {
        name: 'data-vl-inline',
        description: 'A link-list that is displayed as an inline list, will follow the original flow of content.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
        },
    },
    bordered: {
        name: 'data-vl-bordered',
        description: 'A link-list that is displayed with a border.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
        },
    },
};
