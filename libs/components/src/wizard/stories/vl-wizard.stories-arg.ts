import { defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';
import { action } from '@storybook/addon-actions';

export const wizardArgs = {
    ...defaultArgs,
    activeStep: 0,
    title: '',
    header: '',
    onClickStep: action('vl-click-step'),
};

export const wizardArgTypes = {
    ...defaultArgTypes(),
    activeStep: {
        name: 'data-vl-active-step',
        description: 'Sets the active step of the wizard.',
        control: { type: 'range', min: 1, max: 2, step: 1 },
        table: {
            type: {
                summary: 'Number',
            },
            category: 'Attributes',
            defaultValue: { summary: 1 },
        },
    },
    title: {
        description: 'Slot to place a title in the wizard.',
        table: {
            category: 'Slots',
        },
    },
    header: {
        description: 'Slot to place a header in the wizard.',
        table: {
            category: 'Slots',
        },
    },
    onClickStep: {
        name: 'vl-click-step',
        description:
            'The custom event fired on click of a step. In the detail of the event, you can find the number and name of the clicked step.',
        table: { category: 'Events' },
    },
};
