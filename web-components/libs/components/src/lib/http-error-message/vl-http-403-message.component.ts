import { define } from '@domg-lib/common-utilities';
import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './style/vl-http-error-message.scss';

export class VlHttp403Message extends LitElement {
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

define('vl-http-403-message', VlHttp403Message);
