export const templateArgs = {
    center: false,
    stretch: false,
};

export const templateArgTypes = {
    center: {
        name: 'data-vl-v-center',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt om ervoor te zorgen dat de content verticaal gecentreerd wordt.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    stretch: {
        name: 'data-vl-v-stretch',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt om ervoor te zorgen dat de content 100% zal innemen.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
};
