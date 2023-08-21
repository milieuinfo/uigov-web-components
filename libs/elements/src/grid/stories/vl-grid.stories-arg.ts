export const gridBaseArgs = {
    stacked: true,
    stackedSmall: false,
    stackedLarge: false,
    alignStart: false,
    alignCenter: false,
    alignEnd: false,
    alignSpaceBetween: false,
    alignSpaceAround: false,
    vTop: false,
    vCenter: false,
    vBottom: false,
    vStretch: false,
};

export const gridDefaultArgs = {
    ...gridBaseArgs,
    content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?',
    background: '#f7f9fc',
    columnSize: 3,
    columnsAmount: 3,
};

export const gridBaseArgTypes = {
    stacked: {
        name: 'data-vl-is-stacked',
        description: 'Add margin between stacked columns.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    stackedSmall: {
        name: 'data-vl-is-stacked-small',
        description:
            'Add a little less margin between stacked columns. The use of `data-vl-is-stacked` is unnecessary in this case.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    stackedLarge: {
        name: 'data-vl-is-stacked-large',
        description:
            'Add some more margin between stacked columns. The use of `data-vl-is-stacked` is unnecessary in this case.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    alignStart: {
        name: 'data-vl-align-start',
        description: 'Align one or more columns on the left.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    alignCenter: {
        name: 'data-vl-align-center',
        description: 'Center one or more columns horizontally.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    alignEnd: {
        name: 'data-vl-align-end',
        description: 'Align one or more columns on the right.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    alignSpaceBetween: {
        name: 'data-vl-align-space-between',
        description: 'Leave as much space as possible between columns.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    alignSpaceAround: {
        name: 'data-vl-align-space-around',
        description: 'Leave as much space as possible around columns. ',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    vTop: {
        name: 'data-vl-v-top',
        description: 'Align one or more columns at the top.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    vCenter: {
        name: 'data-vl-v-center',
        description: 'Center one or more columns vertically.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    vBottom: {
        name: 'data-vl-v-bottom',
        description: 'Align one or more columns at the bottom.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    vStretch: {
        name: 'data-vl-v-stretch',
        description: 'Stretch the columns to their maximum height.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
};

export const gridDefaultArgTypes = {
    ...gridBaseArgTypes,
    content: {
        name: 'content (for demo purposes)',
        table: {
            type: { summary: 'string' },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    background: {
        name: 'background (for demo purposes)',
        table: {
            type: { summary: 'string' },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    columnsAmount: {
        name: 'amount of columns (for demo purposes)',
        control: { type: 'range', min: 1, max: 12, step: 1 },
        table: {
            type: { summary: 'string' },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    columnSize: {
        name: 'size of the columns (for demo purposes)',
        table: {
            type: { summary: 'string' },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
};
