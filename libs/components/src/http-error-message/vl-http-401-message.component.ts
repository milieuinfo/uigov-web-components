import { BaseLitElement, webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-401-message')
export class VlHttp401Message extends BaseLitElement {
    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="Meld u eerst aan"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Niet aangemeld"
            >
                <p slot="text">
                    Om toegang te krijgen tot deze pagina, moet u eerst aangemeld zijn.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 401">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 401.
                </p>
                <div slot="actions">
                    <a is="vl-link-button" href="/">Terug naar de startpagina</a>
                </div>
            </vl-http-error-message>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-http-401-message': VlHttp401Message;
    }
}
