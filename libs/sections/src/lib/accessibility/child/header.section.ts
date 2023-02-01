import { html } from 'lit';
import { AccessibilityProperties } from '../vl-accessibility.model';

export const header = ({ disableBackLink }: AccessibilityProperties) => html`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        data-vl-link="https://omgeving.vlaanderen.be"
        ?data-vl-disable-back-link=${disableBackLink}
    ></vl-functional-header>
`;
