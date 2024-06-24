import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgs, formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { selectDefaults } from '../vl-select.defaults';
import { action } from '@storybook/addon-actions';

type SelectArgs = typeof formControlArgs & typeof selectDefaults & { onVlSelect: () => void; onVlValid: () => void };

export const selectArgs: SelectArgs = {
    ...formControlArgs,
    ...selectDefaults,
    onVlSelect: action('vl-select'),
    onVlValid: action('vl-valid'),
};

export const selectArgTypes: ArgTypes<SelectArgs> = {
    ...formControlArgTypes,
    block: {
        name: 'block',
        description: 'Duidt aan dat de component de volledige breedte van zijn parent mag innemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.block },
        },
    },
    placeholder: {
        name: 'placeholder',
        description: 'De placeholder tekst van het veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.placeholder },
        },
    },
    autocomplete: {
        name: 'autocomplete',
        description:
            'De autocomplete van het veld. Dit moet een waarde zijn die door de browser ondersteund wordt.<br>Een lijst van waarden kan je vinden op [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.autocomplete },
        },
    },
    notDeletable: {
        name: 'not-deletable',
        description: 'Duidt aan dat de selectie niet verwijderbaar is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.notDeletable },
        },
    },
    options: {
        name: 'options',
        description: 'De opties die geselecteerd kunnen worden.<br>Zie de documentatie pagina voor meer info.',
        table: {
            type: { summary: 'SelectOption' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: selectArgs.options },
        },
    },
    onVlSelect: {
        name: 'vl-select',
        description:
            'Event dat afgevuurd wordt als er een optie selecteerd of verwijderd wordt.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
    onVlValid: {
        name: 'vl-valid',
        description:
            'Event dat afgevuurd wordt als de select valid is.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
