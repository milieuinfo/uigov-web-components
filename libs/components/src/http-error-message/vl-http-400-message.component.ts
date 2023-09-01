import { BaseLitElement, registerWebComponents, webComponentPromised } from '@domg-wc/common-utilities';
import { VlLinkButtonElement } from '@domg-wc/elements';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';
import { VlHttpErrorMessage } from './vl-http-error-message.component';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-400-message')
export class VlHttp400Message extends BaseLitElement {
    static {
        registerWebComponents([VlHttpErrorMessage, VlLinkButtonElement]);
    }

    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="Oeps, dat ging fout"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Verkeerd verzoek"
            >
                <p slot="text">
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 400">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 400.
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
        'vl-http-400-message': VlHttp400Message;
    }
}
