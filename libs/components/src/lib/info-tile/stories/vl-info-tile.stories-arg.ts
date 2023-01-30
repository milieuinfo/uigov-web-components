export const infoTileArgs = {
    autoOpen: false,
    toggleable: false,
    titleSlotText: 'Broos Deprez',
    subtitleSlotText: 'Uw zoon (19.05.2005)',
    contentSlotText: 'De studietoelage voor Broos Deprez werd toegekend.',
};

export const infoTileArgTypes = {
    autoOpen: {
        name: 'data-vl-auto-open',
        description: 'Used to open the info tile immediately at rendering.',
        table: {
            category: 'Attributes',
            type: 'Boolean',
            defaultValue: { summary: false },
        },
    },
    toggleable: {
        name: 'data-vl-toggleable',
        description: 'Used to make the info tile toggleable.',
        table: {
            category: 'Attributes',
            type: 'Boolean',
            defaultValue: { summary: false },
        },
    },
    titleSlotText: {
        name: 'title',
        description: 'Changes title of the info tile.',
        table: {
            category: 'Slots',
            defaultValue: { summary: undefined },
        },
    },
    subtitleSlotText: {
        name: 'subtitle',
        description: 'Changes the subtitle of the info tile.',
        table: {
            category: 'Slots',
            defaultValue: { summary: undefined },
        },
    },
    contentSlotText: {
        name: 'content',
        description: 'Changes the content of the info tile.',
        table: {
            category: 'Slots',
            defaultValue: { summary: undefined },
        },
    },
};
