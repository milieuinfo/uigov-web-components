import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { mapLayerArgs, mapLayerArgTypes } from '../../../stories/vl-map-layer.stories-arg';
import { ArgTypes } from '@storybook/web-components';

export const mapWfsLayerArgs = {
    ...mapLayerArgs,
    layers: '',
    url: '',
};

export const mapWfsLayerArgTypes: ArgTypes<typeof mapWfsLayerArgs> = {
    ...mapLayerArgTypes,
    layers: {
        name: 'data-vl-layers',
        description: 'De layers van de WFS.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapWfsLayerArgs.layers },
        },
    },
    url: {
        name: 'data-vl-url',
        description: 'De WFS url.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapWfsLayerArgs.url },
        },
    },
};
