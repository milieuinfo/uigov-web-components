import { TYPES } from '@domg-wc/common-utilities';
import { Args, ArgTypes } from '@storybook/web-components';

export const datepickerArgs: Args = {
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
        description: "Attribuut bepaalt het soort datepicker; range | time | date-time | '' (default)",
        control: {
            type: 'select',
            options: ['range', 'time', 'date-time', ''],
        },
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    format: {
        name: 'data-vl-format',
        description:
            "Attribuut bepaalt het formaat van de datum/tijd waarde, standaard 'd.m.Y' (-> 31.12.2019). Bv. 'l d M Y' geeft dinsdag 03 jan 2023.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: 'd.m.Y' }, // dateFormat is 'Y-m-d' in vl-datepicker.lib.js
        },
    },
    visualFormat: {
        name: 'data-vl-visual-format',
        description: 'Attribuut bepaalt het visueel formaat van de datum/tijd waarde.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: 'd.m.Y' },
        },
    },
    selectedDate: {
        name: 'data-vl-selected-date',
        description:
            "Attribuut voor een vooringestelde datum conform het ingestelde formaat (bv. '03-10-2019') of 'today' voor vandaag.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    minDate: {
        name: 'data-vl-min-date',
        description:
            "Attribuut voor een minimum datum conform het ingestelde formaat (bv. '01-01-2019') of 'today' voor vandaag.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    maxDate: {
        name: 'data-vl-max-date',
        description:
            "Attribuut voor een maximum datum conform het ingestelde format (bv. '31-12-2019') of 'today' voor vandaag.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    minTime: {
        name: 'data-vl-min-time',
        description: "Attribuut voor een minimum tijd conform het ingestelde formaat (bv. '09:00').",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    maxTime: {
        name: 'data-vl-max-time',
        description: "Attribuut voor een maximum tijd conform het ingestelde format (bv. '17:00').",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    amPm: {
        name: 'data-vl-am-pm',
        description: 'Attribuut om de 12-uurs AM/PM timepicker te activeren.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Attribuut om aan te geven dat de datepicker een error bevat.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Attribuut om aan te geven dat de datepicker geen error bevat.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    value: {
        name: 'data-vl-value',
        description: 'Attribuut om de waarde te definiëren.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    pattern: {
        name: 'data-vl-pattern',
        description: 'Attribuut om aan te geven aan welk patroon de input moet voldoen.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    name: {
        name: 'data-vl-name',
        description: 'Attribuut om aan de naam te definiëren.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
};
