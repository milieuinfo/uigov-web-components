import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const multiselectArgs = {
    block: false,
    error: false,
    success: false,
    disabled: false,
};

export const multiselectArgTypes: ArgTypes<typeof multiselectArgs> = {
    block: {
        name: 'data-vl-block',
        description:
            'Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    error: {
        name: 'data-vl-error',
        description:
            'Attribuut wordt gebruikt om aan te duiden dat het select element verplicht is of ongeldige tekst bevat.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Attribuut wordt gebruikt om aan te duiden dat het select element correct werd ingevuld.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description:
            'Attribuut wordt gebruikt om te voorkomen dat de gebruiker iets kan kiezen uit het select element.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
};
