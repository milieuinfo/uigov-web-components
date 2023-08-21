import { action } from '@storybook/addon-actions';

export const wizardArgs = {
    activeStepSlider: 1,
    title: 'Wizard title',
    header: "You're a wizard Harry",
    onClickStep: action('vl-click-step'),
};

export const wizardArgTypes = {
    activeStepSlider: {
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
    activeStep: {
        description: 'Sets the active step of the wizard.',
        table: {
            type: {
                summary: 'Number',
            },
            category: 'Properties',
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
