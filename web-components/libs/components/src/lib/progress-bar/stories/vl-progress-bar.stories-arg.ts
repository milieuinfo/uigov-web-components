import { action } from '@storybook/addon-actions';
import { Args, ArgTypes } from '@storybook/web-components';

export const progressBarArgs: Args = {
    numeric: false,
    activeStep: 1,
    focusOnChange: false,
    steps: ['Stap 1/3: Aanvraag', 'Stap 2/3: Gegevens', 'Stap 3/3: Bevestigen'],
    onClickStep: action('vl-click-step'),
};

export const progressBarArgTypes: ArgTypes = {
    numeric: {
        name: 'data-vl-numeric',
        description: 'voorziet numerieke indicatoren bij de stappen',
        table: {
            type: {
                summary: 'boolean',
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    activeStep: {
        name: 'data-vl-active-step',
        description: 'markeert een stap als de actieve',
        control: { type: 'range', min: 1, max: 3, step: 1 },
        table: {
            type: {
                summary: 'number',
            },
            category: 'Attributes',
            defaultValue: { summary: 1 },
        },
    },
    focusOnChange: {
        name: 'data-vl-focus-on-change',
        description: 'bepaalt of een stap de focus krijgt na een wijziging',
        table: {
            type: {
                summary: 'boolean',
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    steps: {
        description: 'een lijst met omschrijvingen per stap',
        table: {
            type: { summary: 'string[]' },
            category: 'Properties',
            defaultValue: { summary: '[]' },
        },
    },
    onClickStep: {
        name: 'vl-click-step',
        description: 'event na klikken op een stap - bevat het nummer en de naam van de stap waarop geklikt is',
        table: { category: 'Events' },
    },
};
