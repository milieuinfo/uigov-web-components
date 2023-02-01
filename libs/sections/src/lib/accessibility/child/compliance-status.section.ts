import { html } from 'lit';
import { wcagLink } from './wcag-link.section';
import { AccessibilityProperties } from '../vl-accessibility.model';

export const complianceStatus = ({ compliance, evaluation }: AccessibilityProperties) => {
    const complianceTemplate = () => {
        switch (compliance) {
            case 'FULLY_COMPLIANT':
                return html`Deze website voldoet volledig aan de ${wcagLink()}.`;
            case 'PARTIALLY_COMPLIANT':
                return html`Deze website voldoet gedeeltelijk aan de ${wcagLink()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;
            case 'NOT_COMPLIANT':
                return html`Deze website voldoet niet aan de ${wcagLink()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;
            default:
                return null;
        }
    };
    return html` <div id="compliance-status" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Nalevingsstatus</h2>
        ${evaluation === 'NOT_EVALUATED' ? html`Deze website voldoet niet aan de ${wcagLink()}.` : complianceTemplate()}
    </div>`;
};
