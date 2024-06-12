const doormatNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=components-next-doormat--doormat-default&viewMode=story';
const doormatNextAltUrl = 'http://localhost:8080/iframe.html?id=components-next-doormat--doormat-alt&viewMode=story';
const doormatNextImageUrl =
    'http://localhost:8080/iframe.html?id=components-next-doormat--doormat-image&viewMode=story';
const doormatNextGraphicUrl =
    'http://localhost:8080/iframe.html?id=components-next-doormat--doormat-graphic&viewMode=story';

describe('story - vl-doormat-next - default', () => {
    it('should render', () => {
        cy.visit(doormatNextDefaultUrl);

        cy.get('vl-doormat-next').shadow().find('a');
    });
});

describe('story - vl-doormat-next - alt', () => {
    it('should render', () => {
        cy.visit(doormatNextAltUrl);

        cy.get('vl-doormat-next').shadow().find('a');
    });
});

describe('story - vl-doormat-next - image', () => {
    it('should render', () => {
        cy.visit(doormatNextImageUrl);

        cy.get('vl-doormat-next').shadow().find('a');
    });
});

describe('story - vl-doormat-next - graphic', () => {
    it('should render', () => {
        cy.visit(doormatNextGraphicUrl);

        cy.get('vl-doormat-next').shadow().find('a');
    });
});
