import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';

export const progressBarArgs = {
    ...defaultArgs,
    activeStep: 0,
    showSteps: false,
    focusOnChange: false,
    numeric: false,
    steps: [''],
    onClickStep: action('vl-click-step'),
};

export const progressBarArgTypes: ArgTypes<typeof progressBarArgs> = {
    ...defaultArgTypes(),
    activeStep: {
        name: 'data-vl-active-step',
        description: 'Markeert een stap als de actieve.',
        control: { type: 'range', min: 1, max: 3, step: 1 },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: progressBarArgs.activeStep },
        },
    },
    showSteps: {
        name: 'data-vl-show-steps',
        description: 'Bepaalt of de stappen altijd zichtbaar zijn.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: progressBarArgs.showSteps },
        },
    },
    focusOnChange: {
        name: 'data-vl-focus-on-change',
        description: 'Bepaalt of een stap de focus krijgt na een wijziging.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: progressBarArgs.focusOnChange },
        },
    },
    numeric: {
        name: 'data-vl-numeric',
        description: 'Voorziet numerieke indicatoren bij de stappen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: progressBarArgs.numeric },
        },
    },
    steps: {
        description: 'Lijst met omschrijvingen per stap.',
        control: { type: 'object', required: true },
        table: {
            type: { summary: TYPES.ARRAY },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: progressBarArgs.steps },
        },
    },
    onClickStep: {
        name: 'vl-click-step',
        description:
            'Afgevuurd na het klikken op een stap.<br>Het event bevat de omschrijving en het nummer van de stap.',
        table: {
            type: { summary: '{ step: string, number: number }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
