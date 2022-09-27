import { VALIDATION_TYPE } from '../vl-form-validation.model';

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
        description: 'Attribute is used to indicate which validation applies.',
        table: {
            type: {
                summary: `${VALIDATION_TYPE.EMAIL} | ${VALIDATION_TYPE.DATE} | ${VALIDATION_TYPE.RRN} | ${VALIDATION_TYPE.UUID} | ${VALIDATION_TYPE.PHONE} | ${VALIDATION_TYPE.IBAN} | ${VALIDATION_TYPE.SELECT} | ${VALIDATION_TYPE.NUMERICAL}`,
            },
            category: 'Attributes',
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
        description: 'Attribute is used to indicate that the field is required.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    errorMessage: {
        name: 'data-vl-error-message',
        description: 'Attribute is used to determine the text that appears in the vl-form-validation component.',
        table: {
            type: { summary: '' },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    errorPlaceholder: {
        name: 'data-vl-error-placeholder',
        description:
            'Attribute is used to make the link with the corresponding vl-form-validation component with id attribute `data-vl-error-id`.',
        table: {
            type: { summary: '' },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    successClass: {
        name: 'data-vl-success-class',
        description:
            'Attribute is used to set the class when a vl-form-validation component is successfully validated.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    errorClass: {
        name: 'data-vl-error-class',
        description: 'Attribute is used to set the class if a vl-form-validation component is incorrectly validated.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    numericalOnlyInteger: {
        name: 'data-vl-numerical-only-integer',
        description: 'Attribute is used to indicate that only integers are valid for numerical validation.',
        table: {
            type: { summary: 'boolean' },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    numericalGreaterThan: {
        name: 'data-vl-numerical-greater-than',
        description:
            'Attribute is used to indicate that for numerical validation the number must be greater than the number in this attribute.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
        },
    },
    numericalGreaterThanOrEqualTo: {
        name: 'data-vl-numerical-greater-than-or-equal-to',
        description:
            'Attribute is used to indicate that for numerical validation the number must be greater than or equal to the number in this attribute.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
        },
    },
    numericalLessThan: {
        name: 'data-vl-numerical-less-than',
        description:
            'Attribute is used to indicate that for numerical validation the number must be less than the number in this attribute.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
        },
    },
    numericalLessThanOrEqualTo: {
        name: 'data-vl-numerical-less-than-or-equal-to',
        description:
            'Attribute is used to indicate that for numerical validation the number must be less than or equal to the number in this attribute.',
        table: {
            type: { summary: 'number' },
            category: 'Attributes',
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
