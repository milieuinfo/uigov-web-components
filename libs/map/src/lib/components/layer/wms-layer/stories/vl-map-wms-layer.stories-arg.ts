import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { layerArgTypes, layerArgs } from '../../stories/vl-map-layer.stories-arg';
import { ArgTypes } from '@storybook/web-components';

export const wmsLayerArgs = {
    ...layerArgs,
    layers: '',
    styles: '',
    url: '',
    version: '',
};

export const wmsLayerArgTypes: ArgTypes<typeof wmsLayerArgs> = {
    ...layerArgTypes,
    layers: {
        name: 'data-vl-layers',
        description: 'De WMS layers.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    styles: {
        name: 'data-vl-styles',
        description: 'De WMS stijlen.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    url: {
        name: 'data-vl-url',
        description: 'De WMS url.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    version: {
        name: 'data-vl-version',
        description: 'De WMS versie.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '1.3.0' },
        },
    },
};
