import { define } from '@domg-lib/common-utilities';
import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './style/vl-http-error-message.scss';

export class VlHttp404Message extends LitElement {
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

define('vl-http-404-message', VlHttp404Message);
