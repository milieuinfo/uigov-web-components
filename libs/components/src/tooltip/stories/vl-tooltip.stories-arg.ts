import { CONTROLS, defaultArgs, defaultArgTypes, getSelectControlOptions } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

const PLACEMENT = {
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left',
};

export const tooltipArgs = {
    ...defaultArgs,
    placement: 'top',
    tooltipContent: 'Tooltip content',
    vlStatic: false,
};

export const tooltipArgTypes: ArgTypes<typeof tooltipArgs> = {
    ...defaultArgTypes(),
    placement: {
        name: 'data-vl-placement',
        control: { type: CONTROLS.SELECT },
        options: Object.values(PLACEMENT),
        description: 'The position of the tooltip',
        table: {
            type: {
                summary: getSelectControlOptions(Object.values(PLACEMENT)),
            },
            category: 'Attributes',
        },
    },
    tooltipContent: { name: 'content (for demo purposes)' },
    vlStatic: {
        name: 'data-vl-static',
        description: 'Adds a tooltip that is always visible',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
        },
    },
};
