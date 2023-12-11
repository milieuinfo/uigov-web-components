import { defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const templateArgs = {
    ...defaultArgs,
    center: false,
    stretch: false,
};

export const templateArgTypes: ArgTypes<typeof templateArgs> = {
    ...defaultArgTypes(),
    center: {
        name: 'data-vl-v-center',
        description: 'Attribuut wordt gebruikt om ervoor te zorgen dat de content verticaal gecentreerd wordt.',
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    stretch: {
        name: 'data-vl-v-stretch',
        description: 'Attribuut wordt gebruikt om ervoor te zorgen dat de content 100% zal innemen.',
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
};
