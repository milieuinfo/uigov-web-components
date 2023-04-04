import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { layerArgTypes, layerArgs } from '../../stories/vl-map-layer.stories-arg';
import { ArgTypes } from '@storybook/web-components';

export const wmtsLayerArgs = {
    ...layerArgs,
    layer: '',
    url: '',
};

export const wmtsLayerArgTypes: ArgTypes<typeof wmtsLayerArgs> = {
    ...layerArgTypes,
    layer: {
        name: 'data-vl-layer',
        description: 'De layer van de WMTS.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    url: {
        name: 'data-vl-url',
        description: 'De WMTS url.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
