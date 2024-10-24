import {
    CATEGORIES,
    CONTROLS,
    defaultArgs,
    defaultArgTypes,
    getSelectControlOptions,
    TYPES,
} from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { LEGEND_PLACEMENT } from '../vl-map-legend.defaults';

export const mapLegendArgs = {
    ...defaultArgs,
    bottom: '',
    left: '',
    placement: LEGEND_PLACEMENT.BOTTOM_RIGHT,
    right: '',
    top: '',
    layoutVertical: false,
    hideTitle: false,
    version: null,
};

export const mapLegendArgTypes: ArgTypes<typeof mapLegendArgs> = {
    ...defaultArgTypes(),
    bottom: {
        name: 'bottom',
        description:
            'Bepaalt de "bottom" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.bottom },
        },
    },
    left: {
        name: 'left',
        description:
            'Bepaalt de "left" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.left },
        },
    },
    placement: {
        name: 'data-vl-placement',
        description: 'Bepaalt de plaats van de legende op de kaart.',
        control: { type: CONTROLS.SELECT },
        options: Object.values(LEGEND_PLACEMENT),
        table: {
            type: {
                summary: getSelectControlOptions(Object.values(LEGEND_PLACEMENT)),
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.placement },
        },
    },
    right: {
        name: 'right',
        description:
            'Bepaalt de "right" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.right },
        },
    },
    top: {
        name: 'top',
        description:
            'Bepaalt de "top" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.top },
        },
    },
    layoutVertical: {
        name: 'data-vl-layout-vertical',
        description: 'Zet de layout van de legende in verticale positie.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.layoutVertical },
        },
    },
    hideTitle: {
        name: 'data-vl-hide-title',
        description: 'Laat de "Legende" titel weg.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.hideTitle },
        },
    },
    version: {
        name: 'data-vl-version',
        description: 'Voeg een "version" parameter toe aan de legende url.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.version },
        },
    },
};
