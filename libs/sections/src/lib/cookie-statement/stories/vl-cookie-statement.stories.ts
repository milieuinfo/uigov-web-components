import { html } from 'lit-html';
import '../vl-cookie-statement.section';

export default {
    title: 'sections/cookie-statement',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const cookieStatementDefault = () => {
    return html`
        <vl-cookie-statement data-cy="cookie-statement" data-vl-version="1.0" data-vl-date="15 oktober 2020">
            <vl-cookie
                data-vl-title="Captcha contactformulier"
                data-vl-name="NID"
                data-vl-purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."
                data-vl-domain="google.com"
                data-vl-processor="Google"
                data-vl-validity="Permanente cookie met een geldigheid van 6 maanden"
            >
            </vl-cookie>
            <vl-cookie
                data-vl-title="Bestellen publicaties Vlaamse overheid"
                data-vl-name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"
                data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."
                data-vl-domain="publicaties.vlaanderen.be"
                data-vl-processor="Vlaamse overheid"
                data-vl-validity="Permanente cookie met een geldigheid van 3 weken"
            >
            </vl-cookie>
        </vl-cookie-statement>
    `;
};
cookieStatementDefault.storyName = 'vl-cookie-statement - default';
