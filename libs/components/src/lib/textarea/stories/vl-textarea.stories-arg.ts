import { TYPES } from '@domg-wc/common-utilities';
import { Args, ArgTypes } from '@storybook/web-components';
import { defaultTinyMceToolbar } from '../vl-textarea.element';

export const textareaArgs: Args = {
    block: false,
    error: false,
    success: false,
    rich: false,
};

export const textareaArgTypes: ArgTypes = {
    block: {
        name: 'data-vl-block',
        description:
            'Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
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
            defaultValue: { summary: false },
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
            defaultValue: { summary: false },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description:
            'Attribuut wordt gebruikt om te voorkomen dat de gebruiker tekst in de textarea kan ingeven. Dit werkt enkel als `data-vl-rich` `false` is.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
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
            defaultValue: { summary: false },
        },
    },
    rich: {
        name: 'data-vl-rich',
        description: 'Attribuut om aan te geven of het om een rich area text area gaat.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
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
            defaultValue: { summary: defaultTinyMceToolbar },
        },
    },
};
