import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { mapLayerArgs, mapLayerArgTypes } from '../../stories/vl-map-layer.stories-arg';
import { ArgTypes } from '@storybook/web-components';

export const mapWmtsLayerArgs = {
    ...mapLayerArgs,
    layer: '',
    url: '',
    matrixSet: 'BPL72VL',
    matrixPrefix: false
};

export const mapWmtsLayerArgTypes: ArgTypes<typeof mapWmtsLayerArgs> = {
    ...mapLayerArgTypes,
    layer: {
        name: 'data-vl-layer',
        description: 'De layer van de WMTS.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapWmtsLayerArgs.layer },
        },
    },
    url: {
        name: 'data-vl-url',
        description: 'De WMTS url.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapWmtsLayerArgs.url },
        },
    },
    matrixSet: {
        name: 'data-vl-matrix-set',
        description: 'De matrix set van de WMTS.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: false },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapWmtsLayerArgs.matrixSet }
        }
    },
    matrixPrefix: {
        name: 'data-vl-matrix-prefix',
        description: 'Definieert of de matrix moet geprefixt worden met de matrix set.<br/>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapWmtsLayerArgs.matrixPrefix },
        },
    }
};
