import { LEGEND_PLACEMENT } from '../vl-map-legend';
import { CATEGORIES, TYPES } from '@domg-lib/common-utilities';

export const legendArgTypes = {
    placement: {
        name: 'data-vl-placement',
        type: {
            summary: `${LEGEND_PLACEMENT.TOP_LEFT} | ${LEGEND_PLACEMENT.TOP_RIGHT} | ${LEGEND_PLACEMENT.BOTTOM_LEFT}
        | ${LEGEND_PLACEMENT.BOTTOM_RIGHT}`,
            required: false,
        },
        description: 'Attribuut wordt gebruikt om de plaats van de legende op de kaart te bepalen',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: `${LEGEND_PLACEMENT.BOTTOM_RIGHT}` },
        },
        control: {
            type: 'select',
            options: [
                LEGEND_PLACEMENT.TOP_LEFT,
                LEGEND_PLACEMENT.TOP_RIGHT,
                LEGEND_PLACEMENT.BOTTOM_LEFT,
                LEGEND_PLACEMENT.BOTTOM_RIGHT,
            ],
        },
    },
    left: {
        name: 'left',
        type: { summary: TYPES.STRING },
        description:
            'Attribuut wordt gebruikt om de "left" positie van de legende op de kaart te bepalen. Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'undefined' },
        },
        control: { type: 'text' },
    },
    top: {
        name: 'top',
        type: { summary: TYPES.STRING },
        description:
            'Attribuut wordt gebruikt om de "top" positie van de legende op de kaart te bepalen. Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'undefined' },
        },
        control: { type: 'text' },
    },
    right: {
        name: 'right',
        type: { summary: TYPES.STRING },
        description:
            'Attribuut wordt gebruikt om de "right" positie van de legende op de kaart te bepalen. Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'undefined' },
        },
        control: { type: 'text' },
    },
    bottom: {
        name: 'bottom',
        type: { summary: TYPES.STRING },
        description:
            'Attribuut wordt gebruikt om de "bottom" positie van de legende op de kaart te bepalen. Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'undefined' },
        },
        control: { type: 'text' },
    },
};
