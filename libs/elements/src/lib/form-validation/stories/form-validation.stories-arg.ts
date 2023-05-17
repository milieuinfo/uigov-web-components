import { VALIDATION_TYPE } from '../vl-form-validation.model';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const formValidationArgs = {
    validationType: '',
    required: false,
    errorMessage: '',
    errorPlaceholder: '',
    successClass: false,
    errorClass: false,
    numericalOnlyInteger: false,
    numericalGreaterThan: 0,
    numericalGreaterThanOrEqualTo: 0,
    numericalLessThan: 0,
    numericalLessThanOrEqualTo: 0,
};

export const formValidationArgTypes = {
    validationType: {
        name: 'data-vl-validation-type',
        description: 'Bepaalt het validatie type.',
        table: {
            type: {
                summary: `${VALIDATION_TYPE.EMAIL} | ${VALIDATION_TYPE.DATE} | ${VALIDATION_TYPE.RRN} | ${VALIDATION_TYPE.UUID} | ${VALIDATION_TYPE.PHONE} | ${VALIDATION_TYPE.IBAN} | ${VALIDATION_TYPE.SELECT} | ${VALIDATION_TYPE.NUMERICAL}`,
            },
            category: CATEGORIES.ATTRIBUTES,
        },
        control: {
            type: 'select',
            options: [
                VALIDATION_TYPE.EMAIL,
                VALIDATION_TYPE.DATE,
                VALIDATION_TYPE.RRN,
                VALIDATION_TYPE.UUID,
                VALIDATION_TYPE.PHONE,
                VALIDATION_TYPE.IBAN,
                VALIDATION_TYPE.SELECT,
                VALIDATION_TYPE.NUMERICAL,
            ],
        },
    },
    required: {
        name: 'data-vl-required',
        description: 'Geeft aan of het een verplicht veld betreft (`required`).',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formValidationArgs.required },
        },
    },
    errorMessage: {
        name: 'data-vl-error-message',
        description: 'De tekst die bij fout getoond wordt in het `vl-form-validation`-component.',
        table: {
            type: { summary: '' },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formValidationArgs.errorMessage },
        },
    },
    errorPlaceholder: {
        name: 'data-vl-error-placeholder',
        description:
            'Maakt de link het corresponderende `vl-form-validation`-component met id attribuut `data-vl-error-id`.',
        table: {
            type: { summary: '' },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    successClass: {
        name: 'data-vl-success-class',
        description: 'Stel de css klasse in wanneer de `vl-form-validation`-component validatie succesvol was.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
    errorClass: {
        name: 'data-vl-error-class',
        description: 'Stel de css klasse in wanneer de `vl-form-validation`-component validatie in fout ging.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formValidationArgs.errorClass },
        },
    },
    numericalOnlyInteger: {
        name: 'data-vl-numerical-only-integer',
        description: 'Bepaalt dat enkel integers valide zijn voor numerieke validatie.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: formValidationArgs.numericalOnlyInteger },
        },
    },
    numericalGreaterThan: {
        name: 'data-vl-numerical-greater-than',
        description: 'Bij numerieke validatie bepaalt moet het ingegeven cijfer hoger liggen dat dit cijfer.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    numericalGreaterThanOrEqualTo: {
        name: 'data-vl-numerical-greater-than-or-equal-to',
        description:
            'Bij numerieke validatie bepaalt moet het ingegeven cijfer gelijk zijn aan of hoger liggen dat dit cijfer.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    numericalLessThan: {
        name: 'data-vl-numerical-less-than',
        description: 'Bij numerieke validatie bepaalt moet het ingegeven cijfer lager liggen dat dit cijfer.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    numericalLessThanOrEqualTo: {
        name: 'data-vl-numerical-less-than-or-equal-to',
        description:
            'Bij numerieke validatie bepaalt moet het ingegeven cijfer gelijk zijn aan of lager liggen dat dit cijfer.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};

export const formValidationArgsDisabled = {
    validationType: {
        control: {
            disable: true,
        },
    },
    required: {
        control: {
            disable: true,
        },
    },
    errorMessage: {
        control: {
            disable: true,
        },
    },
    errorPlaceholder: {
        control: {
            disable: true,
        },
    },
    successClass: {
        control: {
            disable: true,
        },
    },
    errorClass: {
        control: {
            disable: true,
        },
    },
    numericalOnlyInteger: {
        control: {
            disable: true,
        },
    },
    numericalGreaterThan: {
        control: {
            disable: true,
        },
    },
    numericalGreaterThanOrEqualTo: {
        control: {
            disable: true,
        },
    },
    numericalLessThan: {
        control: {
            disable: true,
        },
    },
    numericalLessThanOrEqualTo: {
        control: {
            disable: true,
        },
    },
};
