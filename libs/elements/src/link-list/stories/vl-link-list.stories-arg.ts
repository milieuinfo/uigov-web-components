export const linkListArgs = {
    small: false,
    inline: false,
    bordered: false,
};

export const linkListArgTypes = {
    small: {
        name: 'data-vl-small',
        type: { summary: 'boolean' },
        description: 'The smaller variant of a link-list.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    inline: {
        name: 'data-vl-inline',
        type: { summary: 'boolean' },
        description: 'A link-list that is displayed as an inline list, will follow the original flow of content.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    bordered: {
        name: 'data-vl-bordered',
        type: { summary: 'boolean' },
        description: 'A link-list that is displayed with a border.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
};
