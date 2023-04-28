import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const mapSideSheetArgs = {
    customIcon: '',
    enableSwipe: false,
    hideToggleButton: false,
    href: '#',
    iconPlacement: 'before',
    right: false,
    title: 'Terug',
    toggleText: '',
    tooltipText: '',
    defaultSlot: '',
};

export const mapSideSheetArgTypes: ArgTypes<typeof mapSideSheetArgs> = {
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
    href: {
        name: 'data-vl-href',
        description: 'De link van het menu item.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.CHILD_ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.href },
        },
    },
    iconPlacement: {
        name: 'data-vl-icon-placement',
        description: 'De positie van het icoon van de toggle button.<br>Dit attribuut is niet reactief.',
        control: {
            type: 'select',
            options: ['before', 'after'],
        },
        table: {
            type: { summary: 'before | after' },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.iconPlacement },
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
    title: {
        name: 'data-vl-title',
        description: 'De titel van het menu item.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.CHILD_ATTRIBUTES,
            defaultValue: { summary: mapSideSheetArgs.title },
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
