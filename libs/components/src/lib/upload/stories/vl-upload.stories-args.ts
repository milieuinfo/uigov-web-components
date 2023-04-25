import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { Args, ArgTypes } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

export const uploadArgs: Args = {
    acceptedFiles: '',
    autoProcess: false,
    disabled: false,
    disallowDuplicates: false,
    error: false,
    errorMessageAcceptedFiles: '',
    errorMessageFilesize: '',
    errorMessageMaxFiles: '',
    fullBodyDrop: false,
    inputName: 'file',
    maxFiles: 1,
    maxSize: 2000000,
    subTitle: '',
    success: false,
    title: '',
    url: 'http://httpbin.org/post',
    onChange: action('change'),
};

export const uploadArgTypes: ArgTypes = {
    acceptedFiles: {
        name: 'data-vl-accepted-files',
        description:
            'Attribuut om te bepalen welke bestanden worden geaccepteerd door component (extensie en mimetype).',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: [] },
        },
    },
    autoProcess: {
        name: 'data-vl-autoprocess',
        description:
            'Attribuut om te activeren of deactiveren dat het het gedropte bestand direct moet opgeladen worden.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Attribuut om te voorkomen dat de gebruiker een bijlage kan opladen.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    disallowDuplicates: {
        name: 'data-vl-disallow-duplicates',
        description: 'Als dit op `true` staat, is het niet toegelaten om dezelfde bijlage meerdere keren te uploaden.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Attribuut om aan te geven dat het upload element een fout bevat.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    errorMessageAcceptedFiles: {
        name: 'data-vl-error-message-accepted-files',
        description: 'Attribuut om de message te definiëren wanneer er niet-geaccepteerde bestanden zijn toegevoegd.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    errorMessageFilesize: {
        name: 'data-vl-error-message-filesize',
        description: 'Attribuut om de message te definiëren wanneer er te grote bestanden zijn toegevoegd.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    errorMessageMaxFiles: {
        name: 'data-vl-error-message-maxfiles',
        description: 'Attribuut om de message te definiëren wanneer er teveel bestanden zijn toegevoegd.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    fullBodyDrop: {
        name: 'data-vl-full-body-drop',
        description: 'Attribuut om te activeren of deactiveren dat de dropzone over het heel scherm is.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    inputName: {
        name: 'data-vl-input-name',
        description: 'Attribuut om de key te definiëren waarmee het bestand wordt opgeladen.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    maxFiles: {
        name: 'data-vl-max-files',
        description: 'Bepaalt aantal upload-bestanden',
        table: {
            type: {
                summary: 'number',
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 1 },
        },
    },
    maxSize: {
        name: 'data-vl-max-size',
        description: 'Bepaalt de maximum grootte van de combineerde upload-bestanden (2000000 = 2MB).',
        table: {
            type: {
                summary: 'number',
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 2000000 },
        },
    },
    subTitle: {
        name: 'data-vl-sub-title',
        description: 'Attribuut om de subtitel te bepalen.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Geeft aan dat de geüploade bestanden gevalideerd zijn.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    title: {
        name: 'data-vl-title',
        description: 'Attribuut om de titel te bepalen.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    url: {
        name: 'data-vl-url',
        description: 'Bepaalt de upload url',
        type: { name: 'string', required: true },
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    resetFormOnClear: {
        name: 'data-vl-reset-form-on-clear',
        description:
            'Als dit ingesteld staat, zal de `form` waarin de `vl-upload` zich bevindt ook zijn validatie ' +
            'resetten',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    onChange: {
        name: 'change',
        description: 'Afgevuurd na het toevoegen of verwijderen van een bestand of een succesvolle upload',
        table: {
            type: { summary: 'change' },
            category: CATEGORIES.EVENTS,
        },
    },
};
