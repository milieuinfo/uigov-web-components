import { html } from 'lit';
import { wcagLink } from './wcag-link.section';
import { type ComplianceStatusProps, complianceStatus } from './compliance-status.section';
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from '../vl-accessibility.model';
import { registerWebComponents } from '@domg-wc/common-utilities';

registerWebComponents([complianceStatus, wcagLink]);

const mountDefault = ({ compliance, evaluation }: ComplianceStatusProps) =>
    cy.mount(complianceStatus({ compliance, evaluation }));

// [TODO]: Fix this test
describe('component compliance-status', () => {
    const props: ComplianceStatusProps = {
        compliance: COMPLIANCE_STATUS.FULLY_COMPLIANT,
        evaluation: EVALUATION_STATUS.EXPERT_EVALUATED,
    };

    beforeEach(() => {
        mountDefault({ ...props });
    });

    it('should mount', () => {
        cy.get('#compliance-status');
    });

    // it.skip('should render compliance status correctly', () => {
    //     cy.get('#compliance-status').shadow().contains('Deze website voldoet volledig aan de');
    // });

    // it('should not render non-compliance message when evaluation is EVALUATED', () => {
    //     cy.get['div["data-cy-root"]'];
    //     cy.get('#compliance-status').should('not.contain', 'Deze website voldoet niet aan de');
    // });
});

// describe('component compliance-status - with NOT_EVALUATED evaluation', () => {
//     const props: ComplianceStatusProps = {
//         compliance: COMPLIANCE_STATUS.FULLY_COMPLIANT,
//         evaluation: EVALUATION_STATUS.NOT_EVALUATED,
//     };

//     beforeEach(() => {
//         mountDefault({ ...props });
//     });

//     it('should render non-compliance message when evaluation is NOT_EVALUATED', () => {
//         cy.get('#compliance-status').contains('Deze website voldoet niet aan de');
//     });
// });
