import { BaseLitElement, webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-414-message')
export class VlHttp414Message extends BaseLitElement {
    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="URL te groot"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="URI te groot"
            >
                <p slot="text">
                    Er ging iets fout.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 414">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 414.
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
        'vl-http-414-message': VlHttp414Message;
    }
}
