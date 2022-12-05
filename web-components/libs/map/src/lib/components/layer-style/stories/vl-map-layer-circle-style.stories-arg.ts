import { layerStyleArgTypes } from './vl-map-layer-style.stories-arg';
import { CATEGORIES, TYPES } from '@domg-lib/common-utilities';

export const layerCircleStyleArgTypes = {
    ...layerStyleArgTypes,
    size: {
        name: 'data-vl-size',
        type: { summary: TYPES.NUMBER },
        description: 'Attribuut wordt gebruikt om aan te geven wat de grootte is van de cirkels',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 5 },
        },
        control: { disable: true },
    },
    borderColor: {
        name: 'data-vl-border-color',
        type: { summary: TYPES.STRING },
        description: 'Attribuut wordt gebruikt om aan te geven wat de color is van de randen van de cirkels.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'rgba(0, 0, 0, 0)' },
        },
        control: { disable: true },
    },
    borderSize: {
        name: 'data-vl-border-size',
        type: { summary: TYPES.NUMBER },
        description: 'Attribuut wordt gebruikt om aan te geven wat de grootte is van de randen van de cirkels.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 1 },
        },
        control: { disable: true },
    },
    clusterTextColor: {
        name: 'data-vl-cluster-text-color',
        type: { summary: TYPES.STRING },
        description:
            'Attribuut wordt gebruikt om aan te geven wat de kleur van de tekst is bij het clusteren van features.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '#FFF' },
        },
        control: { disable: true },
    },
    clusterColor: {
        name: 'data-vl-cluster-color',
        type: { summary: TYPES.STRING },
        description: 'Attribuut wordt gebruikt om aan te geven wat de kleur is bij het clusteren van features.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'rgba(2, 85, 204, 1)' },
        },
        control: { disable: true },
    },
};
