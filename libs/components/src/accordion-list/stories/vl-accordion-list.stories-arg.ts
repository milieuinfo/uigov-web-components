import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const accordionListArgs = {
    ...defaultArgs,
    bordered: false,
};

export const accordionListArgTypes: ArgTypes<typeof accordionListArgs> = {
    ...defaultArgTypes(),
    bordered: {
        name: 'data-vl-bordered',
        description: 'Beeldt een border af boven en onder de accordions.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
};
