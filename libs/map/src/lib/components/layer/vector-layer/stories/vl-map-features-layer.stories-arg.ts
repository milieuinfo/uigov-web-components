import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { layerArgTypes, layerArgs } from '../../stories/vl-map-layer.stories-arg';
import { ArgTypes } from '@storybook/web-components';

export const featuresLayerArgs = {
    ...layerArgs,
    autoExtent: false,
    autoExtentMaxZoom: '',
    cluster: false,
    clusterDistance: '',
    features: '',
    featuresProp: null,
};

export const featuresLayerArgTypes: ArgTypes<typeof featuresLayerArgs> = {
    ...layerArgTypes,
    autoExtent: {
        name: 'data-vl-auto-extent',
        description: 'Automatisch zoomen op de kaartlaag zodat al de features zichtbaar zijn.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    autoExtentMaxZoom: {
        name: 'data-vl-auto-extent-max-zoom',
        description: 'Het maximum niveau tot waar er automatisch gezoomd wordt bij een extent.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    cluster: {
        name: 'data-vl-cluster',
        description: 'Geeft aan of de features geclusterd moeten worden of niet.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    clusterDistance: {
        name: 'data-vl-cluster-distance',
        description: 'De afstand vanaf er tussen features geclusterd mag worden.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    features: {
        name: 'data-vl-features',
        description: 'Attribuut die de kaartlaag bevat.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    featuresProp: {
        name: 'features',
        description: 'Property die de kaartlaag bevat.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.PROPERTIES,
        },
    },
};
