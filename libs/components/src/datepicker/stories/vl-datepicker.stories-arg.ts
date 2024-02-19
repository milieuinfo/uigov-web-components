import { CATEGORIES, CONTROLS, getSelectControlOptions, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const datepickerArgs = {
    type: '',
    format: 'd.m.Y',
    visualFormat: '',
    selectedDate: '',
    minDate: '',
    maxDate: '',
    minTime: '',
    maxTime: '',
    amPm: false,
    error: false,
    success: false,
    value: false,
    pattern: '',
    name: '',
};

export const datepickerArgTypes: ArgTypes = {
    type: {
        name: 'data-vl-type',
        description: "Type van de datepicker; range | time | date-time | '' (default)",
        control: { type: CONTROLS.SELECT },
        options: ['range', 'time', 'date-time', ''],
        table: {
            type: { summary: getSelectControlOptions(['range', 'time', 'date-time', '']) },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.type },
        },
    },
    format: {
        name: 'data-vl-format',
        description:
            "Formaat van de datum/tijd waarde, standaard 'd.m.Y' (-> 31.12.2019). Bv. 'l d M Y' geeft dinsdag 03 jan 2023.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.format }, // dateFormat is 'Y-m-d' in vl-datepicker.lib.js
        },
    },
    visualFormat: {
        name: 'data-vl-visual-format',
        description: 'Visueel formaat van de datum/tijd waarde.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.visualFormat },
        },
    },
    selectedDate: {
        name: 'data-vl-selected-date',
        description:
            "Vooraf ingestelde datum conform het ingestelde formaat (bv. '03-10-2019') of 'today' voor vandaag.",
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.selectedDate },
        },
    },
    minDate: {
        name: 'data-vl-min-date',
        description: "Minimum datum conform het ingestelde formaat (bv. '01-01-2019') of 'today' voor vandaag.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.minDate },
        },
    },
    maxDate: {
        name: 'data-vl-max-date',
        description: "Maximum datum conform het ingestelde format (bv. '31-12-2019') of 'today' voor vandaag.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.maxDate },
        },
    },
    minTime: {
        name: 'data-vl-min-time',
        description: "Minimum tijd conform het ingestelde formaat (bv. '09:00').",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.minTime },
        },
    },
    maxTime: {
        name: 'data-vl-max-time',
        description: "Maximum tijd conform het ingestelde format (bv. '17:00').",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.maxTime },
        },
    },
    amPm: {
        name: 'data-vl-am-pm',
        description: 'Activeert de 12-uurs AM/PM timepicker.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.amPm },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Stelt een error in op de datepicker.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.error },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Geeft aan dat de datepicker geen error bevat.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.success },
        },
    },
    value: {
        name: 'data-vl-value',
        description: 'De waarde van de datepicker.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.value },
        },
    },
    pattern: {
        name: 'data-vl-pattern',
        description: 'Patroon waaraan de input moet voldoen.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.pattern },
        },
    },
    name: {
        name: 'data-vl-name',
        description: 'Naam van de input.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.name },
        },
    },
};
