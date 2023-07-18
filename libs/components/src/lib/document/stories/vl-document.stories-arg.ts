import { ArgTypes } from '@storybook/web-components';

export const documentArgs = {
    href: '#',
    type: 'PDF',
    title: 'Hubert en Jan van Eyck, Vlaamse Primitieven',
    metadata: 'PDF - 580 kB',
};

export const documentArgTypes: ArgTypes<typeof documentArgs> = {
    href: {
        name: 'data-vl-href',
        description: 'Attribuut wordt gebruikt om de download link te bepalen.',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '#' },
        },
    },
    type: { name: 'type (slot)' },
    title: { name: 'title (slot)' },
    metadata: { name: 'metadata (slot)' },
};
