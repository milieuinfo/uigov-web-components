import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const accordionListArgs = {
    bordered: false,
};

export const accordionListArgTypes: ArgTypes<typeof accordionListArgs> = {
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
