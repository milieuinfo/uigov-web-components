import { COMPLIANCE_STATUS, EVALUATION_STATUS } from '../vl-accessibility.model';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';

export const accessibilityArgs = {
    application: '',
    compliance: null,
    date: '',
    dateModified: '',
    disableBackLink: false,
    evaluation: null,
    version: '',
    limitations: {
        withTiming: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        withoutTiming: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        outsideApplicableLaw: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
    },
    onClickBack: action('vl-click-back'),
};

export const accessibilityArgTypes: ArgTypes<typeof accessibilityArgs> = {
    application: {
        name: 'data-vl-application',
        description: 'De applicatie waar de verklaring over gaat.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"deze applicatie"' },
        },
    },
    compliance: {
        name: 'data-vl-compliance',
        description: 'De nalevingsstatus van de verklaring.',
        control: {
            type: 'select',
            options: [
                COMPLIANCE_STATUS.FULLY_COMPLIANT,
                COMPLIANCE_STATUS.PARTIALLY_COMPLIANT,
                COMPLIANCE_STATUS.NOT_COMPLIANT,
            ],
        },
        table: {
            type: {
                summary: `"${COMPLIANCE_STATUS.FULLY_COMPLIANT}" | 
                "${COMPLIANCE_STATUS.PARTIALLY_COMPLIANT}" | 
                "${COMPLIANCE_STATUS.NOT_COMPLIANT}"`,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: `"${COMPLIANCE_STATUS.PARTIALLY_COMPLIANT}"` },
        },
    },
    date: {
        name: 'data-vl-date',
        description: 'De aanmaakdatum van de verklaring.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"20 juli 2021"' },
        },
    },
    dateModified: {
        name: 'data-vl-date-modified',
        description: 'De datum van de laatste wijziging van de verklaring.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"20 juli 2021"' },
        },
    },
    disableBackLink: {
        name: 'data-vl-disable-back-link',
        description: 'Zet de terug-link uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    evaluation: {
        name: 'data-vl-evaluation',
        description: 'De evaluatiestatus van de verklaring.',
        control: {
            type: 'select',
            options: [
                EVALUATION_STATUS.EXPERT_EVALUATED,
                EVALUATION_STATUS.SELF_EVALUATED,
                EVALUATION_STATUS.NOT_EVALUATED,
            ],
        },
        table: {
            type: {
                summary: `"${EVALUATION_STATUS.EXPERT_EVALUATED}" |
                    "${EVALUATION_STATUS.SELF_EVALUATED}" |
                    "${EVALUATION_STATUS.NOT_EVALUATED}"`,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: `"${EVALUATION_STATUS.NOT_EVALUATED}"` },
        },
    },
    version: {
        name: 'data-vl-version',
        description: 'De huidige versie van de verklaring.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"1.0.0"' },
        },
    },
    limitations: {
        name: 'limitations',
        description:
            "Property om limitaties mee te geven aan de verklaring. Het object bevat 3 optionele properties. De `withTiming` limitaties vallen onder 'Niet-naleving van het bestuursdecreet'. Dit zijn tijdelijke limitaties. `withoutTiming` limitaties vallen onder 'Onevenredige last'. Dit zijn permanente limitaties. De `outsideApplicableLaw` limitaties vallen onder 'De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving'. Dit zijn limitaties die buiten de werkingssfeer van de toepasselijke wetgeving vallen.",
        table: {
            type: { summary: 'object' },
            category: CATEGORIES.PROPERTIES,
        },
    },
    onClickBack: {
        name: 'vl-click-back',
        description: 'Afgevuurd na het klikken op de terug-link.',
        table: {
            type: { summary: '-' },
            category: CATEGORIES.EVENTS,
        },
    },
};
