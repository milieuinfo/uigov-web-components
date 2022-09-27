import { define } from '@domg-lib/common-utilities';
import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './style/vl-http-error-message.scss';

export class VlHttp401Message extends LitElement {
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
                data-vl-title="Meld u eerst aan"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Niet aangemeld"
            >
                <p slot="text">
                    Om toegang te krijgen tot deze pagina, moet u eerst aangemeld zijn.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 401">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 401.
                </p>
                <div slot="actions">
                    <a is="vl-link-button" href="/">Terug naar de startpagina</a>
                </div>
            </vl-http-error-message>
        `;
    }
}

define('vl-http-401-message', VlHttp401Message);
