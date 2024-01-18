import { defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';
import { action } from '@storybook/addon-actions';

export const wizardArgs = {
    ...defaultArgs,
    activeStep: 0,
    hideLabels: false,
    title: '',
    header: '',
    onClickStep: action('vl-click-step'),
};

export const wizardArgTypes = {
    ...defaultArgTypes(),
    activeStep: {
        name: 'data-vl-active-step',
        description: 'Zet de actieve stap.',
        control: { type: 'range', min: 1, max: 2, step: 1 },
        table: {
            type: {
                summary: 'Number',
            },
            category: 'Attributes',
            defaultValue: { summary: 1 },
        },
    },
    hideLabels: {
        name: 'data-vl-hide-labels',
        description: 'Bepaalt of de labels van de stappen verborgen moeten worden.',
        control: { type: 'boolean' },
        table: {
            type: {
                summary: 'Boolean',
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    title: {
        description: 'Slot voor de titel.',
        table: {
            category: 'Slots',
        },
    },
    header: {
        description: 'Slot voor de header.',
        table: {
            category: 'Slots',
        },
    },
    onClickStep: {
        name: 'vl-click-step',
        description:
            'Afgevuurd wanneer er op een stap geklikt wordt. In het event wordt het nummer en de naam vermeld.',
        table: { category: 'Events' },
    },
};
