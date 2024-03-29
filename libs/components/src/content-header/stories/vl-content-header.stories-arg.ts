import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';

export const contentHeaderArgs = {
    ...defaultArgs,
    contextLink: '',
    titleLink: '',
};

export const contentHeaderArgTypes = {
    ...defaultArgTypes(),
    image: {
        name: 'image (slot)',
        description: '',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    contextLink: {
        name: 'context-link (slot)',
        description: 'Link voor de context.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: contentHeaderArgs.contextLink },
        },
    },
    titleLink: {
        name: 'title-link (slot)',
        description: 'Link voor de titel',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: contentHeaderArgs.titleLink },
        },
    },
};
