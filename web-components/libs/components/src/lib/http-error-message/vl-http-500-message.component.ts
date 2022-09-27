import { define } from '@domg-lib/common-utilities';
import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './style/vl-http-error-message.scss';

export class VlHttp500Message extends LitElement {
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
                data-vl-title="Interne fout"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Onverwachte fout"
            >
                <p slot="text">
                    Er ging iets fout. Probeer het nog eens. Lukt het nog niet,
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 500">mail dan de helpdesk</a> en
                    vermeld daarbij de URL hierboven en de foutcode 500.
                </p>
                <div slot="actions">
                    <a is="vl-link-button" href="/">Terug naar de startpagina</a>
                </div>
            </vl-http-error-message>
        `;
    }
}

define('vl-http-500-message', VlHttp500Message);
