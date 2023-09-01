import { BaseLitElement, registerWebComponents, webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';
import { VlLinkButtonElement } from '@domg-wc/elements';
import { VlHttpErrorMessage } from './vl-http-error-message.component';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-404-message')
export class VlHttp404Message extends BaseLitElement {
    static {
        registerWebComponents([VlHttpErrorMessage, VlLinkButtonElement]);
    }

    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="Pagina niet gevonden"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg"
                data-vl-image-alt="Pagina niet gevonden"
            >
                <p slot="text">
                    We vonden de pagina niet terug. Controleer even of u een tikfout heeft gemaakt. Bent u via een link
                    of website op deze pagina gekomen.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 404">Mail dan de helpdesk</a> en
                    vermeld daarbij de URL hierboven en de foutcode 404.
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
        'vl-http-404-message': VlHttp404Message;
    }
}
