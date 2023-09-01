import { BaseLitElement, registerWebComponents, webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';
import { VlLinkButtonElement } from '@domg-wc/elements';
import { VlHttpErrorMessage } from './vl-http-error-message.component';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-408-message')
export class VlHttp408Message extends BaseLitElement {
    static {
        registerWebComponents([VlHttpErrorMessage, VlLinkButtonElement]);
    }

    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="Oeps, dat duurde te lang"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Verzoek duurt te lang"
            >
                <p slot="text">
                    Het laden van de pagina duurde te lang. Probeer het opnieuw en als het nog niet lukt:
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 408">mail dan de helpdesk</a> en
                    vermeld daarbij de URL hierboven en de foutcode 408.
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
        'vl-http-408-message': VlHttp408Message;
    }
}
