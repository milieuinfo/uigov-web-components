import { TYPES } from '@domg-wc/common-utilities';
import { Args, ArgTypes } from '@storybook/web-components';

export const toasterArgs: Args = {
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
    fadeOut: false,
};

export const toasterArgTypes: ArgTypes = {
    topLeft: {
        name: 'data-vl-top-left',
        description: 'Positioneert de toaster op linkerbovenhoek.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    topRight: {
        name: 'data-vl-top-right',
        description: 'Positioneert de toaster op rechterbovenhoek. Standaard gaat de toaster altijd in de rechterbovenhoek getoond worden.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    bottomLeft: {
        name: 'data-vl-bottom-left',
        description: 'Positioneert de toaster op linkeronderhoek.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    bottomRight: {
        name: 'data-vl-bottom-right',
        description: 'Positioneert de toaster op rechteronderhoek.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    fadeOut: {
        name: 'data-vl-fadeout',
        description: 'Elke alert verdwijnt automatisch 5 seconden na openen.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
};
