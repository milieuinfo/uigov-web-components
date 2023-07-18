import { BaseLitElement, webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-403-message')
export class VlHttp403Message extends BaseLitElement {
    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="Geen toegang tot deze pagina"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Onvoldoende rechten"
            >
                <p slot="text">
                    U heeft daarvoor onvoldoende rechten.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 403">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 403.
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
        'vl-http-403-message': VlHttp403Message;
    }
}
