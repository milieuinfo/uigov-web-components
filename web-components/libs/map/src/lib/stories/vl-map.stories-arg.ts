import { action } from '@storybook/addon-actions';
import { EVENT } from '../vl-map.model';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const mapArgs = {
    allowFullscreen: false,
    disableEscape: false,
    disableRotation: false,
    disableMousewheelZoom: false,
    activeActionChange: action(EVENT.ACTIVE_ACTION_CHANGED),
    layerVisibleChange: action(EVENT.LAYER_VISIBLE_CHANGED),
};

export const mapArgTypes = {
    allowFullscreen: {
        name: 'data-vl-allow-fullscreen',
        type: { summary: TYPES.BOOLEAN },
        description:
            'Attribute is used to allow the user to visualize the map in full screen. This functionality cannot be used on mobile.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        control: { disable: true },
    },
    disableEscape: {
        name: 'data-vl-disable-escape-key',
        type: { summary: TYPES.BOOLEAN },
        description: 'Attribute is used to ensure that the escape key cannot be used.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        control: { disable: true },
    },
    disableRotation: {
        name: 'data-vl-disable-rotation',
        type: { summary: TYPES.BOOLEAN },
        description: 'Attribute is used to ensure that it is not possible to rotate the map.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        control: { disable: true },
    },
    disableMousewheelZoom: {
        name: 'data-vl-disable-mouse-wheel-zoom',
        type: { summary: TYPES.BOOLEAN },
        description: 'Attribute is used to ensure that it is not possible to zoom the map with the mouse wheel.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        control: { disable: true },
    },
    activeActionChange: {
        name: EVENT.ACTIVE_ACTION_CHANGED,
        description: 'Event fired when the current active action changes.',
        table: { category: CATEGORIES.EVENTS },
    },
    layerVisibleChange: {
        name: EVENT.LAYER_VISIBLE_CHANGED,
        description: "Event fired when a layer's visible state changes.",
        table: { category: CATEGORIES.EVENTS },
    },
};
