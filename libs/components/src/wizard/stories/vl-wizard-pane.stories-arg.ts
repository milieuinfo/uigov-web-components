import { defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';

export const wizardPaneArgs = {
    ...defaultArgs,
    name: '',
};

export const wizardPaneArgTypes = {
    ...defaultArgTypes(),
    name: {
        name: 'data-vl-name',
        description: 'Sets the name of the pane. The name is visible in de tooltip of the step.',
        table: {
            type: {
                summary: 'string',
            },
            category: 'Attributes',
        },
    },
};
