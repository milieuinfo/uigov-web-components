import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';

export const progressBarArgs = {
    activeStep: 1,
    focusOnChange: false,
    numeric: false,
    steps: ['Stap 1/3: Aanvraag', 'Stap 2/3: Gegevens', 'Stap 3/3: Bevestigen'],
    onClickStep: action('vl-click-step'),
};

export const progressBarArgTypes: ArgTypes<typeof progressBarArgs> = {
    activeStep: {
        name: 'data-vl-active-step',
        description: 'Markeert een stap als de actieve.',
        control: { type: 'range', min: 1, max: 3, step: 1 },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 1 },
        },
    },
    focusOnChange: {
        name: 'data-vl-focus-on-change',
        description: 'Bepaalt of een stap de focus krijgt na een wijziging.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    numeric: {
        name: 'data-vl-numeric',
        description: 'Voorziet numerieke indicatoren bij de stappen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    steps: {
        description: 'Lijst met omschrijvingen per stap.',
        table: {
            type: { summary: `${TYPES.STRING}[]` },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: '[]' },
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
