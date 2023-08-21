import { css, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './vl-spotlight.uig-css';
import { SIZE } from './vl-spotlight.model';
import { BaseLitElement } from '@domg-wc/common-utilities';

@customElement('vl-spotlight')
export class VlSpotlight extends BaseLitElement {
    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    constructor() {
        super();
        this.alt = false;
    }

    static get properties() {
        return {
            link: {
                type: String,
                attribute: 'data-vl-link',
            },
            alt: {
                type: Boolean,
                attribute: 'data-vl-alt',
                reflect: true,
            },
            size: {
                type: String,
                attribute: 'data-vl-size',
                reflect: true,
            },
            imgSrc: {
                type: String,
                attribute: 'data-vl-img-src',
            },
            imgAlt: {
                type: String,
                attribute: 'data-vl-img-alt',
            },
        };
    }

    private link = '';
    private alt = false;
    private size = '';
    private imgSrc = '';
    private imgAlt = '';

    __getSlot(slotName: string) {
        return html` <slot name="${slotName}"></slot>`;
    }

    __processSlotTitle() {
        return this._getTitleTemplateWithValue(this.__getSlot('title'));
    }

    __processSlotSubTitle() {
        return this._getSubTitleTemplateWithValue(this.__getSlot('subtitle'));
    }

    __processSlotTitleInHeader() {
        return this._getTitleTemplateWithValue(this.__getSlot('title'));
    }

    __processSlotContent() {
        return this._getContentTemplateWithValue(this.__getSlot('content'));
    }

    __processSlotText() {
        return this._getTextTemplateWithValue(this.__getSlot('text'));
    }

    _getTitleTemplateWithValue(value: any) {
        return html`<h3 class="vl-spotlight__title">${value}</h3>`;
    }

    _getSubTitleTemplateWithValue(value: any) {
        return html`<p class="vl-spotlight__subtitle">${value}</p>`;
    }

    _getContentTemplateWithValue(value: any) {
        return html` <div class="vl-spotlight__content">${value}</div>`;
    }

    _getTextTemplateWithValue(value: any) {
        return html`<p class="vl-spotlight__text">${value}</p>`;
    }

    __fallbackIfEmpty(value: any, templateResult: any) {
        if (value && value.length > 0) {
            return templateResult;
        }
        return ``;
    }

    render() {
        if (this.link) {
            return html`<a href="${this.link}" class="${this.__applySpotlightStyling()}">
                <article role="none">
                    ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
                    ${this.__processSlotContent()} ${this.__processSlotText()}
                </article>
            </a>`;
        }
        return html` <article class="${this.__applySpotlightStyling()}" role="none">
            ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
            ${this.__processSlotContent()} ${this.__processSlotText()}
        </article>`;
    }

    __applySpotlightStyling() {
        const small = this.size === SIZE.S;
        const xSmall = this.size === SIZE.XS;
        const large = this.size === SIZE.L;
        return `vl-spotlight ${this.alt ? 'vl-spotlight--alt' : ''} ${xSmall ? 'vl-spotlight--xs' : ''}
    ${small ? 'vl-spotlight--s' : ''} ${large ? 'vl-spotlight--l' : ''}`;
    }

    __processHeader() {
        if (!this.imgSrc) return html``;
        return html` <header role="none" class="vl-spotlight__header">
            <div class="vl-spotlight__image vl-spotlight__image--focus-center-center">
                <img class="vl-spotlight__image__img" src="${this.imgSrc}" alt="${this.imgAlt}" />
            </div>
            <div class="vl-spotlight__title-wrapper">${this.__processSlotTitleInHeader()}</div>
        </header>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-spotlight': VlSpotlight;
    }
}
