import { html } from 'lit';
import type { AccessibilityProperties } from '../vl-accessibility.model';
import { VlColumnElement, VlH2Element } from '@domg-wc/elements';

export type SetupStatementProps = Pick<AccessibilityProperties, 'evaluation' | 'date' | 'dateModified'>;

export const setupStatementElements = () => [VlColumnElement, VlH2Element];

export const setupStatement = ({ evaluation, date, dateModified }: SetupStatementProps) => {
    const setupStatementTemplate = () => {
        switch (evaluation) {
            case 'EXPERT_EVALUATED':
                return html`Deze toegankelijkheidsverklaring is opgesteld op ${date} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${dateModified}.`;
            case 'SELF_EVALUATED':
                return html`Deze toegankelijkheidsverklaring is opgesteld op ${date} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${dateModified}.`;
            case 'NOT_EVALUATED':
                return html`Deze toegankelijkheidsverklaring is opgesteld op ${date} en werd voor het laatst herzien op
                ${dateModified}.`;
            default:
                return null;
        }
    };
    return html` <div id="setup-accessibility-statement" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Opstelling van deze toegankelijkheidsverklaring</h2>
        <p>${setupStatementTemplate()}</p>
    </div>`;
};
