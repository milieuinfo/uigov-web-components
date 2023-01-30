import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const cookieConsentArgs = {
    analytics: false,
    autoOptInFunctionalDisabled: false,
    owner: '',
    link: '',
};

export const cookieConsentArgTypes = {
    analytics: {
        name: 'data-vl-analytics',
        type: { summary: TYPES.BOOLEAN },
        description: 'Attribuut wordt gebruikt om het verwerken van gebruikersstatistieken te activeren.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    autoOpenDisabled: {
        name: 'data-vl-auto-open-disabled',
        type: { summary: TYPES.BOOLEAN },
        description:
            'Attribuut wordt gebruikt om te voorkomen dat de cookie consent modal onmiddellijk geautomatiseerd geopend wordt.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
    autoOptInFunctionalDisabled: {
        name: 'data-vl-auto-opt-in-functional-disabled',
        type: { summary: TYPES.BOOLEAN },
        description: 'Attribuut wordt gebruikt om de niet wijzigbare functionele opt-in optie te deactiveren.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    owner: {
        name: 'data-vl-owner',
        type: { summary: TYPES.STRING },
        description:
            "['Departement Omgeving'] - Attribuut wordt gebruikt om in de content tekst de eigenaar te specifiëren.",
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    link: {
        name: 'data-vl-link',
        type: { summary: TYPES.STRING },
        description:
            "['https://www.omgevingvlaanderen.be/privacy'] - Attribuut wordt gebruikt om in de content tekst de privacy link te specifiëren.",
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
};
