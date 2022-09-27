export const titleArgs = {
    border: false,
    sans: false,
    alt: false,
    noSpaceBottom: false,
    content: "I'm a title",
};

export const titleArgTypes = {
    border: {
        name: 'data-vl-has-border',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt om een subtiele lijn toe te voegen onder de titel.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    sans: {
        name: 'data-vl-sans',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt om de font te wijzigen van Flanders Serif naar Flanders Sans.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    alt: {
        name: 'data-vl-alt',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt voor een alt titel en zal altijd een lijn toevoegen onder de titel.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    noSpaceBottom: {
        name: 'data-vl-no-space-bottom',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt wanneer een titel gecombineerd wordt met de grid component.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    content: {
        name: 'content (for demo purposes)',
    },
};
