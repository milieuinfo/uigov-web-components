import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const mapLayerSwitcherArgs = {
    title: 'Kaartlagen',
    layers: null,
};

export const mapLayerSwitcherArgTypes: ArgTypes<typeof mapLayerSwitcherArgs> = {
    title: {
        name: 'data-vl-title',
        description: 'De titel bovenaan de layer-switcher.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLayerSwitcherArgs.title },
        },
    },
    layers: {
        name: 'layers',
        description:
            'Kan gebruikt worden om een subselectie van kaartlagen te tonen.<br>Geef hier de data-vl-name attributen van de kaartlagen mee.<br>Kaartlagen worden niet langer automatisch toegevoegd of verwijderd in de layer-switcher.',
        table: {
            type: { summary: `${TYPES.STRING}[]` },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: mapLayerSwitcherArgs.layers },
        },
    },
};
