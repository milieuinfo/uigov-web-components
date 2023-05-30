import { html } from 'lit';
import { privacyProps } from '../vl-privacy.section';

export const header = ({ disableBackLink }: typeof privacyProps) => html`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Privacy"
        data-vl-link="https://omgeving.vlaanderen.be"
        ?data-vl-disable-back-link=${disableBackLink}
    ></vl-functional-header>
`;
