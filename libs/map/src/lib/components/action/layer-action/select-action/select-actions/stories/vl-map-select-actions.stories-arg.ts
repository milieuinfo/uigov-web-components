import { ArgTypes } from '@storybook/web-components';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { mapSelectActionArgTypes, mapSelectActionArgs } from '../../stories/vl-map-select-action.stories-arg';

export const mapSelectActionsArgs = {
    ...mapSelectActionArgs,
    layers: null,
};

export const mapSelectActionsArgTypes: ArgTypes<typeof mapSelectActionsArgs> = {
    ...mapSelectActionArgTypes,
    layers: {
        name: 'layers',
        description:
            'Linkt de actie aan meerdere kaartlagen.<br>Geef hier de data-vl-name attributen van de kaartlagen mee.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-layer attribuut',
        control: false,
        type: { name: null, required: true },
        table: {
            type: { summary: `${TYPES.STRING}[]` },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: mapSelectActionsArgs.layers },
        },
    },
};
