// TODO: te bekijken of dit nuttig is: remove from here and reuse from "vl-button.stories-helper.ts" instead.
// import { sharedButtonArgs, sharedButtonArgTypes } from '@domg-wc/elements';

import { CONTROLS, defaultArgs, defaultArgTypes, getSelectControlOptions, TYPES } from '@domg-wc/common-storybook';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';
import { ICON_PLACEMENT } from '../vl-toggle-button.model';

const sharedButtonArgs = {
    ...defaultArgs,
    loading: false,
    disabled: false,
    error: false,
    block: false,
    large: false,
    wide: false,
    narrow: false,
    content: null,
};

const sharedButtonArgTypes: ArgTypes<typeof sharedButtonArgs> = {
    ...defaultArgTypes(),
    disabled: {
        description: 'Used to indicate to the user that the functionality is not active.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Used to emphasize the importance or consequences of an action.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    block: {
        name: 'data-vl-block',
        description:
            'Used to ensure that the button is shown as a block element and will therefore take the width of the parent.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    large: {
        name: 'data-vl-large',
        description: "Used to grab the user's attention by increasing the font size.",
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    wide: {
        name: 'data-vl-wide',
        description: 'Makes the button appear wider on the screen.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    narrow: {
        name: 'data-vl-narrow',
        description: 'Causes the button to appear narrower on the screen.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    loading: {
        name: 'data-vl-loading',
        description: 'Used to indicate to the user that their action is currently being processed.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    content: {
        name: 'content (for demo purposes)',
        table: {
            type: { summary: 'String' },
        },
    },
};

export const toggleButtonArgs = {
    ...sharedButtonArgs,
    active: false,
    icon: undefined,
    iconPlacement: undefined,
    content: 'Toggle button',
    textHidden: false,
    disabled: false,
    click: action('click'),
    change: action('change'),
};

export const toggleButtonArgTypes: ArgTypes<typeof toggleButtonArgs> = {
    ...sharedButtonArgTypes,
    active: {
        name: 'active',
        description: 'Controls the active state of the toggle button.',
        table: {
            type: {
                summary: 'Boolean',
            },
            category: 'Properties',
        },
        control: { disabled: true },
    },
    icon: {
        name: 'data-vl-icon',
        type: { name: TYPES.STRING, required: false },
        description: 'Sets the icon of the toggle button.',
        table: {
            type: { summary: TYPES.STRING },
            category: 'Attributes',
        },
    },
    iconPlacement: {
        name: 'data-vl-icon-placement',
        description: 'Determines where the icon should be rendered before or after the text.',
        table: {
            type: { summary: getSelectControlOptions(Object.values(ICON_PLACEMENT)) },
            category: 'Attributes',
            defaultValue: { summary: ICON_PLACEMENT.AFTER },
        },
        control: { type: CONTROLS.SELECT },
        options: Object.values(ICON_PLACEMENT),
    },
    textHidden: {
        name: 'data-vl-text-hidden',
        description: 'Determines whether the toggle button text is shown.',
        table: {
            type: { summary: 'Boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    change: {
        name: 'change',
        description: 'Custom event that is triggered when the active state of the toggle button changes.',
        table: { category: 'Events' },
    },
    click: {
        name: 'click',
        description: 'Event fired on click of the toggle button.',
        table: { category: 'Events' },
    },
};
