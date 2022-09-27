import { html } from 'lit';
import { wcagLink } from './wcag-link.section';
import { AccessibilityStatus } from '../model/status.model';

export const complianceStatus = ({ complianceStatus, evaluationStatus }: AccessibilityStatus) => {
    const complianceTemplate = () => {
        switch (complianceStatus) {
            case 'FULLY_COMPLIANT':
                return html`Deze website voldoet volledig aan de ${wcagLink()}.`;
                break;
            case 'PARTIALLY_COMPLIANT':
                return html`Deze website voldoet gedeeltelijk aan de ${wcagLink()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;
                break;
            case 'NOT_COMPLIANT':
                return html`Deze website voldoet niet aan de ${wcagLink()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;
                break;
            default:
                return null;
                break;
        }
    };
    return html` <div id="compliance-status" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Nalevingsstatus</h2>
        ${evaluationStatus === 'NOT_EVALUATED'
            ? html`Deze website voldoet niet aan de ${wcagLink()}.`
            : complianceTemplate()}
    </div>`;
};
