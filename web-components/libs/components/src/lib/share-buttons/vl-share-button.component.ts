import { html, LitElement, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './style/vl-share-button.scss';

export const MEDIA = {
    FACEBOOK: 'facebook',
    TWITTER: 'twitter',
    LINKED_IN: 'linkedin',
    GOOGLE_PLUS: 'googleplus',
    MAIL: 'mail',
};

export const MEDIA_NAMES = {
    [MEDIA.FACEBOOK]: 'Facebook',
    [MEDIA.TWITTER]: 'Twitter',
    [MEDIA.LINKED_IN]: 'LinkedIn',
    [MEDIA.GOOGLE_PLUS]: 'Google Plus',
    [MEDIA.MAIL]: 'mail',
};

@customElement('vl-share-button')
export class VlShareButton extends LitElement {
    private medium = '';
    private href = '';

    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    static get properties() {
        return {
            medium: { type: String, attribute: 'data-vl-medium', reflect: true },
            href: { type: String, attribute: 'href', reflect: true },
        };
    }

    render() {
        const name = MEDIA_NAMES[this.medium];
        return html`<a
            href=${this.href}
            class="vl-share-button vl-share-button--${this.medium}"
            title="Deel op ${name}"
        >
            <i class="vl-vi vl-vi-${this.medium}" aria-hidden="true"></i>
            ${name}
        </a>`;
    }
}
