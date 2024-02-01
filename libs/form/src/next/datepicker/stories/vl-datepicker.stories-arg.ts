import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgs, formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { datepickerDefaults } from '../vl-datepicker.component';
import { action } from '@storybook/addon-actions';

type DatepickerArgsType = typeof formControlArgs &
    typeof datepickerDefaults & { onVlInput: () => void; onVlValid: () => void };

export const datepickerArgs: DatepickerArgsType = {
    ...formControlArgs,
    ...datepickerDefaults,
    onVlInput: action('vl-input'),
    onVlValid: action('vl-valid'),
};

export const datepickerArgTypes: ArgTypes<typeof datepickerArgs> = {
    ...formControlArgTypes,
    block: {
        name: 'block',
        description: 'Duidt aan dat de component de volledige breedte van zijn parent mag innemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.block },
        },
    },
    readonly: {
        name: 'readonly',
        description: 'Duidt aan dat het veld enkel `readonly` is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.readonly },
        },
    },
    type: {
        name: 'type',
        description: "Type van de datepicker; range | time | date-time | '' (default)",
        control: {
            type: 'select',
            labels: {
                range: 'range',
                time: 'time',
                'date-time': 'date-time',
                '': 'default',
            },
        },
        options: ['range', 'time', 'date-time', ''],
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.type },
        },
    },
    value: {
        name: 'value',
        description: 'De waarde van het veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.value },
        },
    },
    placeholder: {
        name: 'placeholder',
        description: 'De placeholder van het veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.placeholder },
        },
    },
    autocomplete: {
        name: 'autocomplete',
        description: 'De autocomplete van het veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.autocomplete },
        },
    },
    format: {
        name: 'format',
        description:
            "Het formaat van de datum/tijd waarde, standaard 'd.m.Y' (-> 31.12.2019). Bv. 'l d M Y' geeft dinsdag 03 jan 2023.",
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.format },
        },
    },
    minDate: {
        name: 'min-date',
        control: { type: 'date' },
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
        name: 'max-date',
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
        name: 'min-time',
        description:
            "Minimum tijd conform het ingestelde formaat (bv. '09:00'). \n\nEnkel van toepassing bij type: `time` of `date-time`.",
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
            "Maximum tijd conform het ingestelde format (bv. '17:00'). \n\nEnkel van toepassing bij type: `time` of `date-time`.",
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
        description: 'Activeert de 12-uurs AM/PM timepicker. \n\nEnkel van toepassing bij type: `time` of `date-time`.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.amPm },
        },
    },
    pattern: {
        name: 'pattern',
        description: 'Het patroon dat je moet volgen bij het ingeven van een waarde.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: datepickerArgs.pattern },
        },
    },
    onVlInput: {
        name: 'vl-input',
        description:
            'Event dat afgevuurd wordt als de waarde van het datepicker-input veld verandert.<br>Het detail object van het event bevat de ingegeven waarde.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
    onVlValid: {
        name: 'vl-valid',
        description:
            'Event dat afgevuurd wordt als de waarde van het datepicker-input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
