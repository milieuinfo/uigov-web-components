const PLACEMENT = {
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left',
};

export const tooltipArgs = {
    placement: 'top',
    tooltipContent: 'Tooltip content',
    vlStatic: false,
};

export const tooltipArgTypes = {
    placement: {
        name: 'data-vl-placement',
        type: 'select',
        options: [PLACEMENT.TOP, PLACEMENT.RIGHT, PLACEMENT.BOTTOM, PLACEMENT.LEFT],
        description: 'The position of the tooltip',
        table: {
            type: {
                summary: `${PLACEMENT.TOP} | ${PLACEMENT.RIGHT} | ${PLACEMENT.BOTTOM} | ${PLACEMENT.LEFT}`,
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
