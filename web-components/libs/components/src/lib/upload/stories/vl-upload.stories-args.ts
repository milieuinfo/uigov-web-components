import { TYPES } from '@domg-wc/common-utilities';
import { Args, ArgTypes } from '@storybook/web-components';

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
    maxSize: 20000000,
    subTitle: '',
    success: false,
    title: '',
    url: 'http://httpbin.org/post',
}

export const uploadArgTypes: ArgTypes = {
    acceptedFiles: {
        name: 'data-vl-accepted-files',
        description: 'Attribuut om te bepalen welke bestanden worden geaccepteerd door component (extensie en mimetype).',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: [] },
        },
    },
    autoProcess: {
        name: 'data-vl-autoprocess',
        description: 'Attribuut om te activeren of deactiveren dat het het gedropte bestand direct moet opgeladen worden.',
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
        description: 'Attribuut om te voorkomen dat de gebruiker een bijlage kan opladen.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    disallowDuplicates: {
        name: 'data-vl-disallow-duplicates',
        description: 'Attribuut om te voorkomen dat dezelfde bijlage meerdere keren kan opgeladen worden.',
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
        description: 'Attribuut om aan te geven dat het upload element een fout bevat.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
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
            category: 'Attributes',
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
            category: 'Attributes',
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
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    fullBodyDrop: {
        name: 'data-vl-full-body-drop',
        description: 'Attribuut om te activeren of deactiveren dat het de dropzone over het heel scherm is.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
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
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    maxFiles: {
        name: 'data-vl-max-files',
        description: 'Attribuut om het maximaal aantal bestanden dat opgeladen mag worden, aan te duiden.',
        table: {
            type: {
                summary: 'number',
            },
            category: 'Attributes',
            defaultValue: { summary: 1 },
        },
    },
    maxSize: {
        name: 'data-vl-max-size',
        description: 'Attribuut om de maximum grootte van een bestand dat opgeladen kan worden (20000000 = 2MB), aan te duiden.',
        table: {
            type: {
                summary: 'number',
            },
            category: 'Attributes',
            defaultValue: { summary: 20000000 },
        },
    },
    subTitle: {
        name: 'data-vl-sub-title',
        description: 'Attribuut om de subtitel te bepalen.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Attribuut om aan te geven dat het upload element geen fout bevat.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
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
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    url: {
        name: 'data-vl-url',
        description: 'Attribuut om de url naar waar de component moet uploaden, te definiëren.',
        type: { name: 'string', required: true },
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
};
