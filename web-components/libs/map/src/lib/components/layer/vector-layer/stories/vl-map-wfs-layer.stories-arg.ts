import { CATEGORIES, TYPES } from '@domg-lib/common-utilities';
import { layerArgTypes } from '../../stories/vl-map-layer.stories-arg';

export const wfsLayerArgTypes = {
    ...layerArgTypes,
    url: {
        name: 'data-vl-url',
        type: { summary: TYPES.STRING },
        description: 'Attribuut bepaalt de WMS url. Verplicht.',
        control: { disable: true },
        table: { category: CATEGORIES.ATTRIBUTES },
    },
    layers: {
        name: 'data-vl-layers',
        type: { summary: TYPES.STRING },
        description: 'Attribuut bepaalt de layers van de WMS. Verplicht.',
        control: { disable: true },
        table: { category: CATEGORIES.ATTRIBUTES },
    },
};
