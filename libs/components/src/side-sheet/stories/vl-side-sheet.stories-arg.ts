import { ArgTypes } from '@storybook/web-components';
import { TYPES } from '@domg-wc/common-storybook';

export const sideSheetArgs = {
    absolute: false,
    customIcon: '',
    enableSwipe: false,
    hideToggleButton: false,
    iconPlacement: 'before',
    left: false,
    right: false,
    toggleText: '',
    tooltipText: '',
};

export const sideSheetArgTypes: ArgTypes<typeof sideSheetArgs> = {
    enableSwipe: {
        name: 'data-vl-enable-swipe',
        description: 'Attribute wordt gebruikt om aan te duiden dat swipe functie toegelaten is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: sideSheetArgs.enableSwipe },
        },
    },
    left: {
        name: 'data-vl-left',
        description: 'Attribute om de side-sheet aan de linkerrand te positioneren.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: sideSheetArgs.left },
        },
    },
    right: {
        name: 'data-vl-right',
        description: 'Attribute om de side-sheet aan de rechterrand te positioneren. Dit is de standaard instelling.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: sideSheetArgs.right },
        },
    },
    absolute: {
        name: 'data-vl-absolute',
        description: 'Attribute wordt gebruikt om aan te duiden dat de side-sheet absoluut gepositioneerd wordt.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: sideSheetArgs.absolute },
        },
    },
    toggleText: {
        name: 'data-vl-toggle-text',
        description: 'Attribute wordt gebruikt om de toggle knop tekst te wijzigen.',
        table: {
            type: { summary: TYPES.STRING },
            defaultValue: { summary: sideSheetArgs.toggleText },
        },
    },
    tooltipText: {
        name: 'data-vl-tooltip-text',
        description: 'Attribute wordt gebruikt om de native tooltip te bepalen.',
        table: {
            type: { summary: TYPES.STRING },
            defaultValue: { summary: sideSheetArgs.tooltipText },
        },
    },
    customIcon: {
        name: 'data-vl-custom-icon',
        description:
            'Dit vervangt zowel open & close icon door 1 custom icon. \n Standaard wordt afhankelijk van de positie van de side-sheet een pijltje getoond dat aanduidt of de side-sheet open of dicht is.',
        table: {
            type: { summary: TYPES.STRING },
            defaultValue: { summary: sideSheetArgs.customIcon },
        },
    },
    iconPlacement: {
        name: 'data-vl-icon-placement',
        description: 'Positie van icon bepalen. Standaard bevindt die zich voor de tekst.',
        control: {
            type: 'select',
            options: ['before', 'after'],
        },
        table: {
            type: { summary: TYPES.STRING },
            defaultValue: { summary: sideSheetArgs.iconPlacement },
        },
    },
    hideToggleButton: {
        name: 'data-vl-hide-toggle-button',
        description: 'Toggle knop verbergen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: sideSheetArgs.hideToggleButton },
        },
    },
};
