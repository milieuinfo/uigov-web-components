import { registerWebComponents } from '@domg-wc/common-utilities';
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from '../vl-accessibility.model';
import { type InaccessibleContentProps, inaccessibleContent } from './inaccessible-content.section';
import { VlTypography } from '@domg-wc/components';

const mountDefault = (props: InaccessibleContentProps) => cy.mount(inaccessibleContent(props));

registerWebComponents([VlTypography, inaccessibleContent]);

const baseProps: InaccessibleContentProps = {
    compliance: COMPLIANCE_STATUS.FULLY_COMPLIANT,
    evaluation: EVALUATION_STATUS.NOT_EVALUATED,
    limitations: {
        withTiming: ['Limitation 1', 'Limitation 2'],
        withoutTiming: ['Limitation 3', 'Limitation 4'],
        outsideApplicableLaw: ['Limitation 5', 'Limitation 6'],
    },
};

describe('component inaccessibleContent - default', () => {
    beforeEach(() => {
        mountDefault(baseProps);
    });

    it('should mount', () => {
        cy.get('div[id="inaccessible-content"]');
    });

    // it('should render the correct message based on evaluation and compliance', () => {
    //     cy.get('').contains('Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.');
    // });

    // it('should render the correct limitations', () => {
    //     cy.get('h3').contains('Niet-naleving van het bestuursdecreet');
    //     cy.get('h3').contains('Onevenredige last');
    //     cy.get('h3').contains('De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving');
    // });
});

describe('component inaccessibleContent - default', () => {
    it('should display message for not evaluated websites', () => {
        const props: InaccessibleContentProps = {
            ...baseProps,
            compliance: COMPLIANCE_STATUS.FULLY_COMPLIANT,
            evaluation: EVALUATION_STATUS.NOT_EVALUATED,
        };
        mountDefault(props);
        cy.contains('De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.');
    });

    // it('should hide content for fully compliant websites', () => {
    //     const props = {
    //         ...baseProps,
    //         compliance: COMPLIANCE_STATUS.FULLY_COMPLIANT,
    //         evaluation: EVALUATION_STATUS.EXPERT_EVALUATED,
    //     };
    //     mountDefault(props);
    //     cy.get('div[id="inaccessible-content"]').should('have.css', 'display', 'none');
    // });

    // it('should render the correct limitations', () => {
    //     const props = {
    //         compliance: COMPLIANCE_STATUS.PARTIALLY_COMPLIANT,
    //         evaluation: EVALUATION_STATUS.EXPERT_EVALUATED,
    //         limitations: {
    //             withTiming: ['Limitation 1', 'Limitation 2'],
    //             withoutTiming: ['Limitation 3', 'Limitation 4'],
    //             outsideApplicableLaw: ['Limitation 5', 'Limitation 6'],
    //         },
    //     };
    //     mountDefault(props);
    //     cy.contains('Niet-naleving van het bestuursdecreet');
    //     cy.contains('Onevenredige last');
    //     cy.contains('De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving');

    //     cy.contains('Limitation 1');
    //     cy.contains('Limitation 2');
    // });
});
