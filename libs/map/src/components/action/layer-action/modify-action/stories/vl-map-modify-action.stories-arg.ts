import { ArgTypes } from '@storybook/web-components';
import { mapActionArgs, mapActionArgTypes } from '../../../stories/vl-map-action.stories-arg';
import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';

export const mapModifyActionArgs = {
    ...mapActionArgs,
    snapping: false,
    snappingPixelTolerance: 10,
};

export const mapModifyActionArgTypes: ArgTypes<typeof mapModifyActionArgs> = {
    ...mapActionArgTypes,
    snapping: {
        name: 'data-vl-snapping',
        description:
            'Geeft aan dat er bij het tekenen snapping mag gebeuren, hetzij op de laag waarop getekend wordt (indien geen vl-map-wfs-layer(s) als child elementen), hetzij op de meegegeven vl-map-wfs-layers.<br>Dit attribuut is niet reactief.',
        control: false,
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapModifyActionArgs.snapping },
        },
    },
    snappingPixelTolerance: {
        name: 'data-vl-snapping-pixel-tolerance',
        description:
            'Binnen de hoeveel pixel van een feature er gesnapt mag worden.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapModifyActionArgs.snappingPixelTolerance },
        },
    },
};
