import {
    CATEGORIES,
    CONTROLS,
    defaultArgs,
    defaultArgTypes,
    getSelectControlOptions,
    TYPES,
} from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const mapSideSheetArgs = {
    ...defaultArgs,
    customIcon: '',
    enableSwipe: false,
    hideToggleButton: false,
    open: false,
    iconPlacement: 'before',
    right: false,
    toggleText: '',
    tooltipText: '',
    defaultSlot: '',
};

export const mapSideSheetArgTypes: ArgTypes<typeof mapSideSheetArgs> = {
    ...defaultArgTypes(),
    customIcon: {
        name: 'data-vl-custom-icon',
        description: 'Het icoon van de toggle button.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.customIcon },
        },
    },
    enableSwipe: {
        name: 'data-vl-enable-swipe',
        description: 'Het zijpaneel kan gesloten worden door te swipen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.enableSwipe },
        },
    },
    hideToggleButton: {
        name: 'data-vl-hide-toggle-button',
        description: 'Verbergt de toggle button.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.hideToggleButton },
        },
    },
    iconPlacement: {
        name: 'data-vl-icon-placement',
        description: 'De positie van het icoon van de toggle button.<br>Dit attribuut is niet reactief.',
        control: { type: CONTROLS.SELECT },
        options: ['before', 'after'],
        table: {
            type: { summary: getSelectControlOptions(['before', 'after']) },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.iconPlacement },
        },
    },
    open: {
        name: 'data-vl-open',
        description: 'Duidt aan dat het zijpaneel open is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.open },
        },
    },
    right: {
        name: 'data-vl-right',
        description: 'Positioneert het zijpaneel aan de rechterrand.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.right },
        },
    },
    toggleText: {
        name: 'data-vl-toggle-text',
        description: 'De tekst van de toggle button.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.toggleText },
        },
    },
    tooltipText: {
        name: 'data-vl-tooltip-text',
        description: 'De tooltip van de toggle button.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.tooltipText },
        },
    },
    defaultSlot: {
        name: '[default]',
        description: 'Element dat afgebeeld wordt in het zijpaneel.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
};
