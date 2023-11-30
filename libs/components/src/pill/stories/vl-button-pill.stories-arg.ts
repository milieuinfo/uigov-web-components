import { defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';

export const buttonPillArgs = {
    ...defaultArgs,
    type: '',
};

export const buttonPillArgTypes = {
    ...defaultArgTypes(),
    type: {
        name: 'data-vl-type',
        description: 'The attribute that determines the type. ',
        control: {
            type: 'select',
            options: ['success', 'warning', 'error'],
        },
        table: {
            type: {
                summary: `${'success'} | ${'warning'} | ${'error'}`,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
};
