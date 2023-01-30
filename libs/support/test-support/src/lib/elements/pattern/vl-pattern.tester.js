export const vlPatternTester = {
    async hasIBANPattern() {
        return this._hasPattern('iban');
    },
    async hasPhonePattern() {
        return this._hasPattern('phone');
    },
    async hasDatePattern() {
        return this._hasPattern('date');
    },
    async hasPricePattern() {
        return this._hasPattern('price');
    },
    async hasRRNPattern() {
        return this._hasPattern('rrn');
    },
    async hasUuidPattern() {
        return this._hasPattern('uuid');
    },
    async hasNumericalPattern() {
        return this._hasPattern('numerical');
    },
    async hasPatternPrefix() {
        const prefix = await this.getAttribute('data-vl-pattern-prefix');
        return prefix != undefined;
    },
    async getPatternPrefix() {
        return this.getAttribute('data-vl-pattern-prefix');
    },
    async getNumericalDecimalScale() {
        return this.getAttribute('data-vl-numerical-decimal-scale');
    },
    async _hasPattern(pattern) {
        const attribute = await this.getAttribute('data-vl-pattern');
        return attribute == pattern;
    },
};
