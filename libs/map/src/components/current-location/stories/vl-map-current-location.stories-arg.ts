import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { DEFAULT_ZOOM, DEFAULT_TOOLTIP } from '../vl-map-current-location';
import { ArgTypes } from '@storybook/web-components';

export const mapCurrentLocationArgs = {
    tooltip: DEFAULT_TOOLTIP,
    zoom: DEFAULT_ZOOM,
};

export const mapCurrentLocationArgTypes: ArgTypes<typeof mapCurrentLocationArgs> = {
    tooltip: {
        name: 'data-vl-tooltip',
        description: 'Bepaalt de tekst van de tooltip van de huidige locatie knop.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapCurrentLocationArgs.tooltip },
        },
    },
    zoom: {
        name: 'data-vl-zoom',
        description: 'Bepaalt hoever er ingezoomd wordt bij het klikken op de huidige locatie knop.',
        control: { type: 'range', min: 1, max: 13, step: 1 },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapCurrentLocationArgs.zoom },
        },
    },
};
