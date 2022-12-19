import { define } from '@domg-wc/common-utilities';
import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './style/vl-http-error-message.scss';

export class VlHttp505Message extends LitElement {
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
                data-vl-title="HTTP-versie niet ondersteund"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Niet ondersteunde HTTP versie"
            >
                <p slot="text">
                    De HTTP-versie van uw verzoek wordt niet ondersteund door onze server.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 505">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 505.
                </p>
                <div slot="actions">
                    <a is="vl-link-button" href="/">Terug naar de startpagina</a>
                </div>
            </vl-http-error-message>
        `;
    }
}

define('vl-http-505-message', VlHttp505Message);
