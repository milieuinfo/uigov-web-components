export const linkBaseArgs = {
    block: false,
    error: false,
    content: 'Terug naar overzicht',
    inline: false,
    small: false,
    large: false,
    bold: false,
};

export const linkDefaultArgs = {
    href: '#',
};

export const linkIconArgs = {
    type: 'before',
    icon: 'arrow-right-fat',
};

export const linkBaseArgTypes = {
    block: {
        name: 'data-vl-block',
        type: { summary: 'boolean' },
        description: 'A link that is displayed as a block element, will take the width of the parent container.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    error: {
        name: 'data-vl-error',
        type: { summary: 'boolean' },
        description: 'Use the error link to emphasize the importance or the consequence of an action.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    inline: {
        name: 'data-vl-inline',
        type: { summary: 'boolean' },
        description: 'A link that is displayed as an inline element, will follow the original flow of content.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    small: {
        name: 'data-vl-small',
        type: { summary: 'boolean' },
        description: 'The smaller variant of a link.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    large: {
        name: 'data-vl-large',
        type: { summary: 'boolean' },
        description: 'The larger variant of a link.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    bold: {
        name: 'data-vl-bold',
        type: { summary: 'boolean' },
        description: 'The bold variant of a link.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    content: { name: 'content (for demo purposes)' },
};

export const linkDefaultArgTypes = {
    href: { name: 'href (for demo purposes)' },
};

export const linkIconArgTypes = {
    type: {
        name: 'type (for demo purposes)',
        control: {
            type: 'select',
            options: ['before', 'after'],
        },
    },
    icon: {
        name: 'icon (for demo purposes)',
        type: 'select',
        options: ['arrow-right-fat', 'external'],
        table: {
            type: { summary: 'string' },
        },
    },
};
