import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { mapActionArgs, mapActionArgTypes } from '../../stories/vl-map-action.stories-arg';

export const mapDrawActionActionArgs = {
    ...mapActionArgs,
    snapping: true,
    snappingPixelTolerance: 1000,
};

export const mapDrawActionActionArgTypes = {
    ...mapActionArgTypes,
    snapping: {
        name: 'data-vl-snapping',
        description:
            'Attribuut wordt gebruikt om aan te geven dat er bij het tekenen snapping mag gebeuren, hetzij op de laag waarop getekend wordt (indien geen vl-map-wfs-layer(s) als child elementen), hetzij op de meegegeven vl-map-wfs-layers.',
        table: {
            defaultValue: { summary: 'false' },
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    snappingPixelTolerance: {
        name: 'data-vl-snapping-pixel-tolerance',
        description: 'Attribuut om aan te geven binnen de hoeveel pixel van een feature er gesnapt mag worden.',
        table: {
            defaultValue: { summary: 10 },
            type: {
                summary: TYPES.NUMBER,
            },
            category: CATEGORIES.ATTRIBUTES,
        },
        if: { arg: 'snapping' },
    },
};
