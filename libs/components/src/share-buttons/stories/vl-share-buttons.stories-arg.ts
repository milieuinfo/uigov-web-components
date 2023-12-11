import { defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';

export const shareButtonsArgs = {
    ...defaultArgs,
    alt: false,
};

export const shareButtonsArgTypes = {
    ...defaultArgTypes(),
    alt: {
        name: 'data-vl-alt',
        description: 'Removes the gray border top.',
        table: {
            category: 'Attributes',
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
        },
    },
};
