import { BaseLitElement, registerWebComponents, webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';
import { VlLinkButtonElement } from '@domg-wc/elements';
import { VlHttpErrorMessage } from './vl-http-error-message.component';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-503-message')
export class VlHttp503Message extends BaseLitElement {
    static {
        registerWebComponents([VlHttpErrorMessage, VlLinkButtonElement]);
    }

    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="De website is tijdelijk niet beschikbaar"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Tijdelijk niet bereikbaar"
            >
                <p slot="text">
                    Probeer later opnieuw. Heb je vragen:
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 503">mail dan de helpdesk</a> en
                    vermeld daarbij de URL hierboven en de foutcode 503.
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
        'vl-http-503-message': VlHttp503Message;
    }
}
