import { BaseLitElement, registerWebComponents, webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';
import { VlLinkButtonElement } from '@domg-wc/elements';
import { VlHttpErrorMessage } from './vl-http-error-message.component';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-501-message')
export class VlHttp501Message extends BaseLitElement {
    static {
        registerWebComponents([VlHttpErrorMessage, VlLinkButtonElement]);
    }

    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="Verzoek niet ondersteund"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Niet ondersteund"
            >
                <p slot="text">
                    Er ging iets fout.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 501">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 501.
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
        'vl-http-501-message': VlHttp501Message;
    }
}
