export const actionGroupArgs = {
    align: '',
    spaceBetween: false,
    bordered: false,
    collapseL: false,
    collapseM: false,
    collapseS: false,
    collapseXs: false,
};

export const actionGroupArgTypes = {
    align: {
        name: 'data-vl-align',
        type: {
            summary: 'string',
        },
        control: {
            type: 'select',
            options: ['left', 'center', 'right'],
        },
        table: {
            category: 'Attributes',
        },
        description: 'Sets the alignment of the action group',
    },
    spaceBetween: {
        name: 'data-vl-space-between',
        table: {
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
        type: { summary: 'boolean' },
        description: 'Sets an equal space between its children.',
    },
    bordered: {
        name: 'data-vl-bordered',
        table: {
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
        type: { summary: 'boolean' },
        control: {
            disable: true,
        },
        description: 'Adds a line between each link in the action group.',
    },
    collapseL: {
        name: 'data-vl-collapse-l',
        table: {
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
        type: { summary: 'boolean' },
        description:
            'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
    collapseM: {
        name: 'data-vl-collapse-m',
        table: {
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
        type: { summary: 'boolean' },
        description:
            'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
    collapseS: {
        name: 'data-vl-collapse-s',
        table: {
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
        type: { summary: 'boolean' },
        description:
            'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
    collapseXs: {
        name: 'data-vl-collapse-xs',
        table: {
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
        type: { summary: 'boolean' },
        description:
            'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
};
