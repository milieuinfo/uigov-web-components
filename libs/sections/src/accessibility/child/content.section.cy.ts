// import { type ContentProps, content } from './content.section';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { COMPLIANCE_STATUS, EVALUATION_STATUS, type AccessibilityProperties } from '../vl-accessibility.model';
import { content, setElements } from './content.section';

const mountDefault = (props: AccessibilityProperties) => cy.mount(content(props));

registerWebComponents([setElements()]);

describe('content component', () => {
    const props: AccessibilityProperties = {
        application: 'Test Application',
        compliance: COMPLIANCE_STATUS.FULLY_COMPLIANT,
        date: '2021-01-01',
        dateModified: '2021-01-01',
        disableBackLink: false,
        evaluation: EVALUATION_STATUS.SELF_EVALUATED,
        limitations: {
            withTiming: ['Limitation 1', 'Limitation 2'],
            withoutTiming: ['Limitation 3', 'Limitation 4'],
            outsideApplicableLaw: ['Limitation 5', 'Limitation 6'],
        },
        version: '1.0.0',
    };

    beforeEach(() => {
        mountDefault(props);
    });

    it('should mount', () => {
        cy.get('section[id="content"]');
    });

    it('should render the correct application', () => {
        cy.get('p').contains(`Deze toegankelijkheidsverklaring is van toepassing op ${props.application}.`);
    });

    it('should render the correct contact card', () => {
        cy.get('vl-contact-card[id="contact-card-1"]');
    });

    it('should render the correct enforcement procedure', () => {
        cy.get('div[id="enforcement-procedure"]');
    });

    it('should render the side navigation', () => {
        cy.get('nav[id="side-nav-accessibility"]').should('have.attr', 'aria-label', 'inhoudsopgave');
        cy.get('nav[is="vl-side-navigation"]').should('exist');
    });
});
