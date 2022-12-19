import { mapActionArgs, mapActionArgTypes } from '../../stories/vl-map-action.stories-arg';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const mapModifyActionArgs = {
    ...mapActionArgs,
    snapping: true,
    snappingPixelTolerance: 1000,
};

export const mapModifyActionArgTypes = {
    ...mapActionArgTypes,
    snapping: {
        name: 'data-vl-snapping',
        type: { summary: TYPES.BOOLEAN },
        description: 'Attribute enables snapping on the vl-map-wfs-layers that are added to this action.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    snappingPixelTolerance: {
        name: 'data-vl-snapping-pixel-tolerance',
        type: { summary: TYPES.NUMBER },
        description:
            'Attribute configures the maximum distance (in pixels) between a feature and your pointing device before snapping occurs.',
        table: {
            defaultValue: { summary: '10' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
