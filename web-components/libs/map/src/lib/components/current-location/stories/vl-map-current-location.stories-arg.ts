import { CATEGORIES, TYPES } from '@domg-lib/common-utilities';
import { DEFAULT_ZOOM, DEFAULT_TOOLTIP } from '../vl-map-current-location';

export const currentLocationArgs = {
    zoom: 10,
    tooltip: 'Huidige locatie',
};

export const currentLocationArgTypes = {
    zoom: {
        name: 'zoom',
        type: { summary: TYPES.NUMBER, required: false },
        description:
            'Attribuut wordt gebruikt om te bepalen hoever er ingezoomd moet worden wanneer de gebruiker op de current location knop drukt om huidige locatie centraal op de kaart te tonen.',
        control: { type: 'range', min: 1, max: 13, step: 1 },
        table: {
            defaultValue: { summary: DEFAULT_ZOOM },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    tooltip: {
        name: 'tooltip',
        type: { summary: TYPES.STRING, required: false },
        description: 'Bepaalt de text van de tooltip van de huidige locatie knop.',
        table: {
            defaultValue: { summary: DEFAULT_TOOLTIP },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
