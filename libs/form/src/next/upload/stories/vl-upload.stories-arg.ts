import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgs, formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { uploadDefaults } from '../vl-upload.defaults';

type UploadArgs = typeof uploadDefaults &
    typeof formControlArgs & {
        onVlInput: () => void;
        onVlError: () => void;
        onVlValid: () => void;
    };

export const uploadArgs: UploadArgs = {
    ...formControlArgs,
    ...uploadDefaults,
    onVlInput: action('vl-input'),
    onVlValid: action('vl-valid'),
    onVlError: action('vl-error'),
};

export const uploadArgTypes: ArgTypes<UploadArgs> = {
    ...formControlArgTypes,
    readonly: {
        name: 'readonly',
        description: 'Duidt aan dat het veld enkel leesbaar is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.readonly },
        },
    },
    acceptedFiles: {
        name: 'accepted-files',
        description:
            'Attribuut om te bepalen welke bestanden worden geaccepteerd door component (extensie en mimetype).',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.acceptedFiles },
        },
    },
    autoProcess: {
        name: 'auto-process',
        description:
            'Attribuut om te activeren of deactiveren dat het het gedropte bestand direct moet opgeladen worden.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.autoProcess },
        },
    },
    disallowDuplicates: {
        name: 'disallow-duplicates',
        description:
            'Bepaalt dat het niet is toegelaten om dezelfde bijlage meerdere keren te uploaden. Niet reactief.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.disallowDuplicates },
        },
    },
    errorMessageAcceptedFiles: {
        name: 'error-message-accepted-files',
        description:
            'Attribuut om de message te definiëren wanneer er bestanden zijn toegevoegd die niet voldoen aan het gevraagde bestandstype.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.errorMessageAcceptedFiles },
        },
    },
    errorMessageFilesize: {
        name: 'error-message-filesize',
        description:
            'Attribuut om de message te definiëren wanneer er te grote bestanden zijn toegevoegd. <br> Gebruik {{maxSize}} om de maximum grootte weer te geven in MB.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.errorMessageFilesize },
        },
    },
    errorMessageMaxFiles: {
        name: 'error-message-maxfiles',
        description:
            'Attribuut om de boodschap te bepalen wanneer er te veel bestanden zijn toegevoegd. <br> Gebruik {{maxFiles}} om het maximum aantal bestanden weer te geven.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.errorMessageMaxFiles },
        },
    },
    maxFiles: {
        name: 'max-files',
        description: 'Bepaalt aantal upload-bestanden',
        table: {
            type: {
                summary: 'number',
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.maxFiles },
        },
    },
    maxSize: {
        name: 'max-size',
        description: 'Bepaalt de maximum grootte per upload-bestand in MB.',
        table: {
            type: {
                summary: 'number',
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.maxSize },
        },
    },
    subTitle: {
        name: 'sub-title',
        description: 'De annotatietekst voor de upload knop.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.subTitle },
        },
    },
    mainTitle: {
        name: 'main-title',
        description: 'De tekst die op de upload knop komt te staan.',
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.mainTitle },
        },
    },
    url: {
        name: 'url',
        description: 'Bepaalt de upload url',
        type: { name: 'string', required: true },
        table: {
            type: {
                summary: TYPES.STRING,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: uploadArgs.url },
        },
    },
    onVlInput: {
        name: 'vl-input',
        description:
            'Event dat afgevuurd wordt als bestanden worden toegevoegd of verwijderd.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook aan welke file werd verwijderd of toegevoegd.',
        table: {
            type: {
                summary: '{ value: string, type: string, file: File}',
            },
            category: CATEGORIES.EVENTS,
        },
    },
    onVlValid: {
        name: 'vl-valid',
        description:
            'Event dat afgevuurd wordt als de waarde van het input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
    onVlError: {
        name: 'vl-error',
        description:
            'Event dat afgevuurd wordt als een bestand niet voldoet aan de validatie.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook de file met de fout.',
        table: {
            type: {
                summary: '{ value: string, type: string, file: File, errorMessage: string}',
            },
            category: CATEGORIES.EVENTS,
        },
    },
};
