import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { documentStyle, iconStyle } from '@domg/govflanders-style/component';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';

/**
 * VlDocument
 * @class
 * @classdesc Gebruik de document component om een link naar een bestand toe te voegen dat de gebruiker kan bekijken in de browser of downloaden.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} data-vl-href - Attribuut wordt gebruikt om de download link te bepalen.
 */
@webComponent('vl-document')
export class VlDocumentComponent extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['href'];
    }

    constructor() {
        super(`
      <style>
        ${resetStyle}
        ${baseStyle}
        ${documentStyle}
        ${iconStyle}
      </style>
      <a class="vl-document" href="#" download>
        <div class="vl-document__type">
          <i class="vl-vi vl-vi-document" aria-hidden="true"></i>
          <span class="vl-document__type__text">
            <slot name="type"></slot>
          </span>
        </div>
        <div class="vl-document__content">
          <div class="vl-document__title vl-link">
            <slot name="title"></slot>
          </div>
          <div class="vl-document__metadata">
            <slot name="metadata"></slot>
          </div>
        </div>
      </a>
    `);
    }

    _hrefChangedCallback(oldValue: string, newValue: string) {
        this._element.href = newValue;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-document': VlDocumentComponent;
    }
}
