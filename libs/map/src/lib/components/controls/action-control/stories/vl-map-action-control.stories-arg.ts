import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const actionControlArgs = {
    actionId: 'measure-action',
    icon: 'ruler',
    label: 'Meten',
};

export const actionControlArgTypes: ArgTypes<typeof actionControlArgs> = {
    actionId: {
        name: 'data-vl-action-id',
        description:
            'Het id van de actie die gelinkt is aan deze action-control.<br>Houd dit in sync met het id attribuut dat je op de actie plaatst.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    icon: {
        name: 'data-vl-icon',
        description: 'Het icoon van de toggle-button.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    label: {
        name: 'data-vl-label',
        description: 'Het label van de toggle-button.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
};
