import { html } from 'lit';
import type { PrivacyProps } from '../vl-privacy.section';
import { VlFunctionalHeaderComponent } from '@domg-wc/components';

export type PrivacyHeaderProps = Pick<PrivacyProps, 'disableBackLink'>;

export const privacyHeaderElements = () => [VlFunctionalHeaderComponent];

export const header = ({ disableBackLink }: PrivacyHeaderProps) => html`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Privacy"
        data-vl-link="https://omgeving.vlaanderen.be"
        ?data-vl-disable-back-link=${disableBackLink}
    ></vl-functional-header>
`;
