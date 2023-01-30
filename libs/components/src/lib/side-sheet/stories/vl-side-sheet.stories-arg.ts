export const sideSheetArgs = {
    enableSwipe: false,
    left: false,
    right: false,
    absolute: false,
    toggleText: 'toggle text',
};

export const sideSheetArgTypes = {
    enableSwipe: {
        name: 'data-vl-enable-swipe',
        type: { summary: 'boolean' },
        description: 'Attribute wordt gebruikt om aan te duiden dat swipe functie toegelaten is.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    left: {
        name: 'data-vl-left',
        type: { summary: 'boolean' },
        description: 'Attribute om de side-sheet aan de linkerrand te positioneren',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    right: {
        name: 'data-vl-right',
        type: { summary: 'boolean' },
        description: 'Attribute om de side-sheet aan de rechterrand te positioneren',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    absolute: {
        name: 'data-vl-absolute',
        type: { summary: 'boolean' },
        description: 'Attribute wordt gebruikt om aan te duiden dat de side-sheet absoluut gepositioneerd wordt.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    toggleText: {
        name: 'data-vl-toggle-text',
        type: { summary: 'string' },
        description: 'Attribute wordt gebruikt om de toggle knop tekst te wijzigen.',
        table: {
            defaultValue: { summary: 'Zijpaneel' },
        },
    },
};
