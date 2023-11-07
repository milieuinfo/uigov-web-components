import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgs, formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';

export const datepickerArgs = {
    ...formControlArgs,
    type: '',
    format: 'd.m.Y',
    visualFormat: 'd.m.Y',
    selectedDate: 'today',
    minDate: '',
    maxDate: '',
    minTime: '',
    maxTime: '',
    amPm: false,
    error: false,
    success: false,
    value: '',
    pattern: '',
    name: '',
};

export const datepickerArgTypes: ArgTypes = {
    ...formControlArgTypes,
    value: {
        name: 'value',
        description: 'De waarde van het veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.value },
        },
    },
    type: {
        name: 'type',
        description: "Attribuut bepaalt het soort datepicker; range | time | date-time | '' (default)",
        control: {
            type: 'select',
            options: ['range', 'time', 'date-time', ''],
        },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.type },
        },
    },
    format: {
        name: 'format',
        description:
            "Attribuut bepaalt het formaat van de datum/tijd waarde, standaard 'd.m.Y' (-> 31.12.2019). Bv. 'l d M Y' geeft dinsdag 03 jan 2023.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.format },
        },
    },
    visualFormat: {
        name: 'visual-format',
        description: 'Attribuut bepaalt het visueel formaat van de datum/tijd waarde.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.visualFormat },
        },
    },
    selectedDate: {
        name: 'selected-date',
        description:
            "Attribuut voor een vooringestelde datum conform het ingestelde formaat (bv. '03-10-2019') of 'today' voor vandaag.",
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.selectedDate },
        },
    },
    minDate: {
        name: 'min-date',
        control: { type: 'date' },
        description:
            "Attribuut voor een minimum datum conform het ingestelde formaat (bv. '01-01-2019') of 'today' voor vandaag.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.minDate },
        },
    },
    maxDate: {
        name: 'max-date',
        description:
            "Attribuut voor een maximum datum conform het ingestelde format (bv. '31-12-2019') of 'today' voor vandaag.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.maxDate },
        },
    },
    minTime: {
        name: 'min-time',
        description:
            "Attribuut voor een minimum tijd conform het ingestelde formaat (bv. '09:00'). \n\nEnkel van toepassing bij type: `time` of `date-time`.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.minTime },
        },
    },
    maxTime: {
        name: 'max-time',
        description:
            "Attribuut voor een maximum tijd conform het ingestelde format (bv. '17:00'). \n\nEnkel van toepassing bij type: `time` of `date-time`.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.maxTime },
        },
    },
    amPm: {
        name: 'am-pm',
        description:
            'Attribuut om de 12-uurs AM/PM timepicker te activeren. \n\nEnkel van toepassing bij type: `time` of `date-time`.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.amPm },
        },
    },
    pattern: {
        name: 'pattern',
        description: 'Attribuut om aan te geven aan welk patroon de input moet voldoen.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.pattern },
        },
    },
};
