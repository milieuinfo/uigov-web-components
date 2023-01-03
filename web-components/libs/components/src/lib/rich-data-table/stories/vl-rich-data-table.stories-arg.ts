import { ArgTypes } from '@storybook/web-components';
import { richDataArgs, richDataArgTypes } from '../../rich-data/stories/vl-rich-data.stories-arg';

export const richDataTableArgs = {
    ...richDataArgs,
    collapsedM: false,
    collapsedS: false,
    collapsedXS: false,
};

export const richDataTableArgTypes: ArgTypes = {
    ...richDataArgTypes,
    collapsedM: {
        name: 'data-vl-collapsed-m',
        description:
            'Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    collapsedS: {
        name: 'data-vl-collapsed-s',
        description:
            'Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    collapsedXS: {
        name: 'data-vl-collapsed-xs',
        description:
            'Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
};
