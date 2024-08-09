import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';

export const descriptionDataArgs = {
    ...defaultArgs,
    bordered: false,
    size: undefined,
    maxSize: undefined,
    mediumSize: undefined,
    mediumMaxSize: undefined,
    smallSize: undefined,
    smallMaxSize: undefined,
    extraSmallSize: undefined,
    extraSmallMaxSize: undefined,
};

export const descriptionDataArgTypes = {
    ...defaultArgTypes(),
    bordered: {
        name: 'data-vl-bordered',
        description: 'Adds a border.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: descriptionDataArgs.bordered },
        },
    },
    size: {
        name: 'data-vl-items-size',
        type: { name: TYPES.NUMBER },
        description:
            'The number (numerator) of the maximum (denominator) that will be taken for each data item on large screens, typically desktop.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '12 / number of data items' },
        },
    },
    maxSize: {
        name: 'data-vl-items-max-size',
        type: { name: TYPES.NUMBER },
        description:
            'The maximum (denominator) that will be evaluated against on large screens, typically desktop, for each data item.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: undefined },
        },
    },
    mediumSize: {
        name: 'data-vl-items-medium-size',
        type: { name: TYPES.NUMBER },
        description:
            'The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: undefined },
        },
    },
    mediumMaxSize: {
        name: 'data-vl-items-medium-max-size',
        type: { name: TYPES.NUMBER },
        description:
            'The maximum (denominator) that will be evaluated against on medium screens, typically tablet, for each data item.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: undefined },
        },
    },
    smallSize: {
        name: 'data-vl-items-small-size',
        type: { name: TYPES.NUMBER },
        description:
            'The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: undefined },
        },
    },
    smallMaxSize: {
        name: 'data-vl-items-small-max-size',
        type: { name: TYPES.NUMBER },
        description:
            'The maximum (denominator) that will be evaluated against on small screens, typically mobile, for each data item.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: undefined },
        },
    },
    extraSmallSize: {
        name: 'data-vl-items-extra-small-size',
        type: { name: TYPES.NUMBER },
        description:
            'The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: undefined },
        },
    },
    extraSmallMaxSize: {
        name: 'data-vl-items-extra-small-max-size',
        type: { name: TYPES.NUMBER },
        description: 'The maximum (denominator) against which to evaluate for very small screens, for each data item.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: undefined },
        },
    },
};
