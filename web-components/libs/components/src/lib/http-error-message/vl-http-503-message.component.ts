import { define } from '@domg-wc/common-utilities';
import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './style/vl-http-error-message.scss';

export class VlHttp503Message extends LitElement {
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

define('vl-http-503-message', VlHttp503Message);
