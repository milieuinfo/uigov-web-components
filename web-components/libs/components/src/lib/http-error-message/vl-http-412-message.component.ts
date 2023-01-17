import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './style/vl-http-error-message.scss';

@customElement('vl-http-412-message')
export class VlHttp412Message extends LitElement {
    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="Voorwaarden voldoen niet"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Voorwaarden niet voldaan"
            >
                <p slot="text">
                    Er ging iets fout.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 412">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 412.
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
        'vl-http-412-message': VlHttp412Message;
    }
}
