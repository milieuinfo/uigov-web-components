import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { AccessibilityProperties } from './vl-accessibility.model';
import { registerWebComponents } from '@domg-wc/common';
import { VlAccessibility } from './vl-accessibility.section';

registerWebComponents([VlAccessibility]);

type MountDefaultProps = AccessibilityProperties & { onClickBack?: () => void; headerSlot?: string };

const mountDefault = ({ ...props }: MountDefaultProps) =>
    cy.mount(html` <vl-accessibility
        data-vl-application=${props.application}
        data-vl-compliance=${props.compliance}
        data-vl-date=${props.date}
        data-vl-date-modified=${props.dateModified}
        ?data-vl-disable-back-link=${props.disableBackLink}
        data-vl-evaluation=${props.evaluation}
        data-vl-version=${props.version}
        .limitations=${props.limitations}
    >
        ${unsafeHTML(props.headerSlot)}
    </vl-accessibility>`);

const defaultProps: MountDefaultProps = {
    application: 'deze applicatie',
    compliance: 'PARTIALLY_COMPLIANT',
    date: '20 juli 2021',
    dateModified: '20 juli 2021',
    disableBackLink: false,
    evaluation: 'NOT_EVALUATED',
    version: '1.0.0',
    limitations: undefined,
    onClickBack: () => {},
    headerSlot: undefined,
};

describe('component vl-accessibility', () => {
    beforeEach(() => {
        mountDefault(defaultProps);
    });

    it('should mount', () => {
        cy.get('vl-accessibility').shadow();
    });

    it('should be accessible', () => {
        cy.injectAxe();
        cy.checkA11y('vl-accessibility');
    });
});

describe('component vl-accessibility - properties default ', () => {
    it('should have default values properties', () => {
        mountDefault(defaultProps);

        cy.get('vl-accessibility').should('have.attr', 'data-vl-application', defaultProps.application);
        cy.get('vl-accessibility').should('have.attr', 'data-vl-compliance', defaultProps.compliance);
        cy.get('vl-accessibility').should('have.attr', 'data-vl-date', defaultProps.date);
        cy.get('vl-accessibility').should('have.attr', 'data-vl-date-modified', defaultProps.dateModified);
        cy.get('vl-accessibility').should('not.have.attr', 'data-vl-disable-back-link', defaultProps.disableBackLink);
        cy.get('vl-accessibility').should('have.attr', 'data-vl-evaluation', defaultProps.evaluation);
        cy.get('vl-accessibility').should('have.attr', 'data-vl-version', defaultProps.version);
        cy.get('vl-accessibility').should('not.have.attr', 'data-vl-limitations', defaultProps.limitations);
    });
});

describe('component vl-accessibility - properties reflect ', () => {
    it('should reflect the <application> attribute', () => {
        mountDefault({ ...defaultProps, application: 'Omgeving' });

        cy.get('vl-accessibility').should('have.attr', 'data-vl-application', 'Omgeving');
    });

    it('should reflect the <compliance> attribute', () => {
        mountDefault({ ...defaultProps, compliance: 'NOT_COMPLIANT' });

        cy.get('vl-accessibility').should('have.attr', 'data-vl-compliance', 'NOT_COMPLIANT');
    });

    it('should reflect the <date> attribute', () => {
        mountDefault({ ...defaultProps, date: '27 januari 2024' });

        cy.get('vl-accessibility').should('have.attr', 'data-vl-date', '27 januari 2024');
    });

    it('should reflect the <dateModified> attribute', () => {
        mountDefault({ ...defaultProps, dateModified: '27 januari 2024' });

        cy.get('vl-accessibility').should('have.attr', 'data-vl-date-modified', '27 januari 2024');
    });

    it('should reflect the <disableBackLink> attribute', () => {
        mountDefault({ ...defaultProps, disableBackLink: true });

        cy.get('vl-accessibility').should('have.attr', 'data-vl-disable-back-link');
    });

    it('should reflect the <evaluation> attribute', () => {
        mountDefault({ ...defaultProps, evaluation: 'EXPERT_EVALUATED' });

        cy.get('vl-accessibility').should('have.attr', 'data-vl-evaluation', 'EXPERT_EVALUATED');
    });

    it('should reflect the <version> attribute', () => {
        mountDefault({ ...defaultProps, version: 'v24' });

        cy.get('vl-accessibility').should('have.attr', 'data-vl-version', 'v24');
    });
});

describe('component vl-accessibility - header slot', () => {
    it('should replace default header with custom header', () => {
        mountDefault({
            ...defaultProps,
            headerSlot: `<vl-functional-header
        data-vl-title="Toegankelijkheidsverklaring"
        data-vl-title-level="1"
        data-vl-no-border
        data-vl-no-background
    >
        <a id="back-link" is="vl-link" href="https://overheid.vlaanderen.be" data-vl-link-back>
            Start
        </a>
    </vl-functional-header>`,
        });

        cy.get('vl-accessibility').find('vl-functional-header').should('exist');
    });
});
