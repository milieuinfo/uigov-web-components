import { registerWebComponents } from '@domg-wc/common';
import { type TitleProps, title, titleElements } from './title.section';

registerWebComponents(titleElements());

const mountDefault = ({ version, date }: TitleProps) => cy.mount(title({ version, date }));

const props: TitleProps = {
    version: '1.0',
    date: '01/01/2021',
};

describe('component title', () => {
    beforeEach(() => {
        mountDefault({ ...props });
    });

    it('should mount', () => {
        cy.get('[data-cy-root]').within(() => {
            cy.get('section[is="vl-region"]').should('exist');
        });
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('section[is="vl-region"]');
    });

    it('should render with some basic styling from DV - h2 should have the correct style', () => {
        cy.get('section[is="vl-region"]').should('have.css', 'padding', '20px 0px 30px');
        cy.get('section[is="vl-region"]').find('div[is="vl-layout"]').should('have.css', 'min-width', '0px');
    });
});

describe('component title - version and date props', () => {
    it('should render the version and date', () => {
        mountDefault({ ...props });
        cy.get('section[is="vl-region"]').contains(`Versie ${props.version} - ${props.date}`);
    });
});

describe('component title - helper function <titleElements()> ', () => {
    it('should return an array of WebComponents with a length of 7', () => {
        const elements = titleElements();
        expect(elements).to.be.an('array');
        expect(elements).to.have.length(7);
    });
});
