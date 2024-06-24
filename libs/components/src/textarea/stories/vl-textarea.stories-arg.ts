import { defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { defaultTinyMceToolbar } from '../vl-textarea.defaults';

export const textareaArgs = {
    ...defaultArgs,
    block: false,
    disabled: false,
    error: false,
    focus: false,
    success: false,
    rich: false,
    readonly: false,
    toolbar: defaultTinyMceToolbar,
};

export const textareaArgTypes: ArgTypes = {
    ...defaultArgTypes(),
    block: {
        name: 'data-vl-block',
        description:
            'Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: textareaArgs.block },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Attribuut wordt gebruikt om aan te duiden dat de textarea verplicht is of ongeldige tekst bevat.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: textareaArgs.error },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Attribuut wordt gebruikt om aan te duiden dat de textarea correct werd ingevuld.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: textareaArgs.success },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description:
            'Attribuut wordt gebruikt om te voorkomen dat de gebruiker tekst in de textarea kan ingeven. Dit gaat ook een disabled styling toepassen op het invoerveld.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: textareaArgs.disabled },
        },
    },
    focus: {
        name: 'data-vl-focus',
        description: 'Attribuut wordt gebruikt om de textarea focus te geven.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: textareaArgs.focus },
        },
    },
    readonly: {
        name: 'data-vl-readonly',
        description:
            'Geeft aan dat de tekst van de textarea in rich-text-modus niet gewijzigd kan worden door de gebruiker. \nDit gaat standaard ook de toolbar verwijderen.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: textareaArgs.readonly },
        },
    },
    rich: {
        name: 'data-vl-rich',
        description: 'Attribuut om aan te geven of het om een rich textarea gaat.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: textareaArgs.rich },
        },
    },
    toolbar: {
        name: 'data-vl-toolbar',
        description:
            'Attribuut bepaalt welke WYSIWYG toolbar items gevisualiseerd worden zodat de toolbar naar wens samengesteld kan worden. Toolbar items kunnen visueel gescheiden worden door een | character. Enkel van belang als `data-vl-rich` `true` is.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: textareaArgs.toolbar },
        },
    },
};
