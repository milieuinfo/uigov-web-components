export const privacyArgs = {
    version: '1.0.0',
    date: '3 maart 2021',
};

export const privacyArgTypes = {
    version: {
        name: 'data-vl-version',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de pagina versie aan te geven.',
        table: {
            defaultValue: { summary: '"1.0.0"' },
        },
    },
    date: {
        name: 'data-vl-date',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om aan te geven op welke datum deze pagina opgesteld werd.',
        table: {
            defaultValue: { summary: '"3 maart 2021"' },
        },
    },
};
