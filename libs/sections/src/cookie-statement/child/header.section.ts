import { html } from 'lit';
import { VlFunctionalHeaderComponent } from '@domg-wc/components';

export const cookieStatementHeaderElements = () => [VlFunctionalHeaderComponent];

export const header = () => html`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Cookieverklaring"
        data-vl-link="https://omgeving.vlaanderen.be"
    ></vl-functional-header>
`;
