const inputFieldMaskedNextIbanUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-iban&viewMode=story';
const inputFieldMaskedNextRrnUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-rrn&viewMode=story';
const inputFieldMaskedNextUuidUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-uuid&viewMode=story';
const inputFieldMaskedNextDateUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-date&viewMode=story';
const inputFieldMaskedNextNumericalUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-numerical&viewMode=story';
const inputFieldMaskedNextPriceUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-price&viewMode=story';
const inputFieldMaskedNextPhoneUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-phone&viewMode=story';
const inputFieldMaskedNextPhoneInternationalUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-phone-international&viewMode=story';
const inputFieldMaskedNextMobileUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-mobile&viewMode=story';

describe('story - vl-input-field-masked-next - iban', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextIbanUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});

describe('story - vl-input-field-masked-next - rrn', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextRrnUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});

describe('story - vl-input-field-masked-next - uuid', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextUuidUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});

describe('story - vl-input-field-masked-next - date', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextDateUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});

describe('story - vl-input-field-masked-next - numerical', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextNumericalUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});

describe('story - vl-input-field-masked-next - price', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextPriceUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});

describe('story - vl-input-field-masked-next - phone', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextPhoneUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});

describe('story - vl-input-field-masked-next - phoneinternational', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextPhoneInternationalUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});

describe('story - vl-input-field-masked-next - mobile', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextMobileUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});
