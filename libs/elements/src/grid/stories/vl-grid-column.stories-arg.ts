import { CATEGORIES, CONTROLS, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const gridColumnArgs = {
    size: 8,
    maxSize: 12,
    push: null,
    mediumSize: 10,
    mediumMaxSize: 12,
    mediumPush: null,
    smallSize: 12,
    smallMaxSize: 12,
    smallPush: null,
    extraSmallSize: 12,
    extraSmallMaxSize: 12,
    extraSmallPush: null,
};

export const gridColumnArgTypes: ArgTypes<typeof gridColumnArgs> = {
    size: {
        name: 'data-vl-size',
        description:
            'Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij grote schermen, typisch desktop.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.size },
        },
    },
    maxSize: {
        name: 'data-vl-max-size',
        description: 'Het maximum (noemer) waartegen zal geevalueerd worden bij grote schermen, typisch desktop.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.maxSize },
        },
    },
    push: {
        name: 'data-vl-push',
        description:
            'Het aantal (teller) van het maximum (noemer) partities te verschuiven bij grote schermen, typisch desktop.',
        control: { type: CONTROLS.NUMBER },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.push },
        },
    },
    mediumSize: {
        name: 'data-vl-medium-size',
        description:
            'Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij medium schermen, typisch tablet.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.mediumSize },
        },
    },
    mediumMaxSize: {
        name: 'data-vl-medium-max-size',
        description: 'Het maximum (noemer) waartegen zal geevalueerd worden bij medium schermen, typisch tablet.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.mediumMaxSize },
        },
    },
    mediumPush: {
        name: 'data-vl-medium-push',
        description:
            'Het aantal (teller) van het maximum (noemer) partities te verschuiven bij medium schermen, typisch tablet.',
        control: { type: CONTROLS.NUMBER },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.mediumPush },
        },
    },
    smallSize: {
        name: 'data-vl-small-size',
        description:
            'Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij kleine schermen, typisch mobiel.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.smallSize },
        },
    },
    smallMaxSize: {
        name: 'data-vl-small-max-size',
        description: 'Het maximum (noemer) waartegen zal geevalueerd worden bij kleine schermen, typisch mobiel.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.smallMaxSize },
        },
    },
    smallPush: {
        name: 'data-vl-small-push',
        description:
            'Het aantal (teller) van het maximum (noemer) partities te verschuiven bij kleine schermen, typisch mobiel.',
        control: { type: CONTROLS.NUMBER },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.smallPush },
        },
    },
    extraSmallSize: {
        name: 'data-vl-extra-small-size',
        description: 'Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij zeer kleine schermen.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.extraSmallSize },
        },
    },
    extraSmallMaxSize: {
        name: 'data-vl-extra-small-max-size',
        description: 'Het maximum (noemer) waartegen zal geevalueerd worden bij zeer kleine schermen.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.extraSmallMaxSize },
        },
    },
    extraSmallPush: {
        name: 'data-vl-extra-small-push',
        description: 'Het aantal (teller) van het maximum (noemer) partities te verschuiven bij zeer kleine schermen.',
        control: { type: CONTROLS.NUMBER },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: gridColumnArgs.extraSmallPush },
        },
    },
};
