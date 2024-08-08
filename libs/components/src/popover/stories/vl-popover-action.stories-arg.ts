import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const popoverActionArgs = {
    ...defaultArgs,
    selected: false,
};

export const popoverActionArgTypes: ArgTypes = {
    ...defaultArgTypes(true),
    selected: {
        name: 'selected',
        description: 'Duidt aan dat de actie geselecteerd is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: popoverActionArgs.selected },
        },
    },
};
