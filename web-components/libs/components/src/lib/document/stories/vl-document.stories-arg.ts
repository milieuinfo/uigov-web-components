export const documentArgs = {
    href: '#',
    type: 'PDF',
    title: 'Hubert en Jan van Eyck, Vlaamse Primitieven',
    metadata: 'PDF - 580 kB',
};

export const documentArgTypes = {
    href: {
        name: 'data-vl-href',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de download link te bepalen.',
        table: {
            defaultValue: { summary: '#' },
        },
    },
    type: { name: 'type (slot)' },
    title: { name: 'title (slot)' },
    metadata: { name: 'metadata (slot)' },
};
