import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const breadcrumbItemArgs = {
    ...defaultArgs,
    href: '',
};

export const breadcrumbItemArgTypes: ArgTypes<typeof breadcrumbItemArgs> = {
    ...defaultArgTypes(),
    href: {
        name: 'data-vl-href',
        description: 'Url voor breadcrumb-item.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: breadcrumbItemArgs.href },
        },
    },
};
