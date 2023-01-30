export const vlFormValidationTester = {
    async isRequired() {
        return this.hasAttribute('data-required');
    },

    async getErrorMessage() {
        return this.getAttribute('data-vl-error-message');
    },

    async getErrorPlaceholder() {
        return this.getAttribute('data-vl-error-placeholder');
    },

    async getErrorClass() {
        return this.getAttribute('data-vl-error-class');
    },

    async getSuccessClass() {
        return this.getAttribute('data-vl-success-class');
    },

    async isNumericalOnlyInteger() {
        return this.hasAttribute('data-vl-numerical-only-integer');
    },

    async getNumericalGreaterThan() {
        return this.getAttribute('data-vl-numerical-greater-than');
    },

    async getNumericalGreaterThanOrEqualTo() {
        return this.getAttribute('data-vl-numerical-greater-than-or-equal-to');
    },

    async getNumericalLessThan() {
        return this.getAttribute('data-vl-numerical-less-than');
    },

    async getNumericalLessThanOrEqualTo() {
        return this.getAttribute('data-vl-numerical-less-than-or-equal-to');
    },

    async hasError() {
        const errorClass = await this.getErrorClass();
        return this.hasClass(errorClass);
    },

    async hasSuccess() {
        const successClass = await this.getSuccessClass();
        return this.hasClass(successClass);
    },
};
