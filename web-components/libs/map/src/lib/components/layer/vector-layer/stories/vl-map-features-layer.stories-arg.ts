import { layerArgTypes } from '../../stories/vl-map-layer.stories-arg';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const featuresLayerArgTypes = {
    ...layerArgTypes,
    autoExtent: {
        name: 'data-vl-auto-extent',
        control: { disable: true },
        type: { summary: TYPES.BOOLEAN },
        description:
            'Attribuut geeft aan of er automatisch gezoomt wordt op de kaartlaag zodat al de features zichtbaar zijn.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
    autoExtentMaxZoom: {
        name: 'data-vl-max-zoom',
        control: { disable: true },
        type: { summary: TYPES.STRING },
        description: 'Attribuut geeft aan tot op welk niveau er maximaal automatisch gezoomd wordt bij een extent',
        table: { category: CATEGORIES.ATTRIBUTES },
    },
    cluster: {
        name: 'data-vl-cluster',
        control: { disable: true },
        type: { summary: TYPES.BOOLEAN },
        description: 'Attribuut geeft aan of de features geclusterd moeten worden of niet.',
        table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'false' } },
    },
    clusterDistance: {
        name: 'data-vl-cluster-distance',
        control: { disable: true },
        type: { summary: TYPES.STRING },
        description: 'Attribuut geeft aan vanaf welke afstand tussen features er geclusterd mag worden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    features: {
        name: 'data-vl-features',
        control: { disable: true },
        type: { summary: TYPES.STRING },
        description: 'Attribuut die de kaartlaag bevat.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    featuresProp: {
        name: 'features',
        control: { disable: true },
        description: 'Property die de kaartlaag bevat.',
        table: {
            category: CATEGORIES.PROPERTIES,
        },
    },
};
