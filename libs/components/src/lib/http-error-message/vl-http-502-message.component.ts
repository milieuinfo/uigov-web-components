import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './style/vl-http-error-message.scss';

@customElement('vl-http-502-message')
export class VlHttp502Message extends LitElement {
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
                data-vl-title="Tijdelijk niet bereikbaar"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Tijdelijk niet bereikbaar"
            >
                <p slot="text">
                    De website is tijdelijk niet bereikbaar. Probeer later opnieuw. Heb je vragen:
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 502">mail dan de helpdesk</a> en
                    vermeld daarbij de URL hierboven en de foutcode 502.
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
        'vl-http-502-message': VlHttp502Message;
    }
}
