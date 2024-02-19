import { CATEGORIES, CONTROLS, getSelectControlOptions } from '@domg-wc/common-storybook';

export const iconButtonArgs = {
    content: 'Icon button',
    type: 'after',
};

export const iconButtonArgTypes = {
    type: {
        name: 'type (for demo purposes)',
        control: { type: CONTROLS.SELECT },
        options: ['before', 'after', 'hidden text'],
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: getSelectControlOptions(['before', 'after', 'hidden text']) },
        },
    },
};
