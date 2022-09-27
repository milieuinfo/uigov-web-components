export const gridColumnBaseArgs = {
    size: 8,
    maxSize: 12,
    mediumSize: 10,
    mediumMaxSize: 12,
    smallSize: 12,
    smallMaxSize: 12,
    extraSmallSize: 12,
    extraSmallMaxSize: 12,
    push: 0,
};

export const gridColumnDefaultArgs = {
    ...gridColumnBaseArgs,
    content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?',
};

export const gridColumnBaseArgTypes = {
    size: {
        name: 'data-vl-size',
        description:
            'The number (numerator) of the maximum (denominator) that will be taken on large screens, typically desktop.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
            defaultValue: { summary: 8 },
        },
    },
    maxSize: {
        name: 'data-vl-max-size',
        description: 'The maximum (denominator) that will be evaluated against on large screens, typically desktop.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
            defaultValue: { summary: 12 },
        },
    },
    mediumSize: {
        name: 'data-vl-medium-size',
        description:
            'The number (numerator) of the maximum (denominator) that will be taken on medium screens, typically tablet.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
            defaultValue: { summary: 10 },
        },
    },
    mediumMaxSize: {
        name: 'data-vl-medium-max-size',
        description: 'The maximum (denominator) that will be evaluated against on medium screens, typically tablet.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
            defaultValue: { summary: 12 },
        },
    },
    smallSize: {
        name: 'data-vl-small-size',
        description:
            'The number (numerator) of the maximum (denominator) that will be taken on small screens, typically mobile.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
            defaultValue: { summary: 12 },
        },
    },
    smallMaxSize: {
        name: 'data-vl-small-max-size',
        description: 'The maximum (denominator) that will be evaluated against on small screens, typically mobile. ',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
            defaultValue: { summary: 12 },
        },
    },
    extraSmallSize: {
        name: 'data-vl-extra-small-size',
        description: 'The number (numerator) of the maximum (denominator) that will be taken on very small screens.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
            defaultValue: { summary: 12 },
        },
    },
    extraSmallMaxSize: {
        name: 'data-vl-extra-small-max-size',
        description: 'The maximum (denominator) against which to evaluate for very small screens.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
            defaultValue: { summary: 12 },
        },
    },
    push: {
        name: 'data-vl-push',
        description: 'Number of partitions to move.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
        },
    },
};

export const gridColumnDefaultArgTypes = {
    ...gridColumnBaseArgTypes,
    content: {
        name: 'content (for demo purposes)',
    },
};
