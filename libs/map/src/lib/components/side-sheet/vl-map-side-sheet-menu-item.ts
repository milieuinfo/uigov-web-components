import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import styles from './style/vl-map-side-sheet.scss';

/**
 * VlMapSideSheetMenuItem
 * @class
 * @classdesc De menu item die verbonden is aan een side sheet.
 *
 * @extends HTMLElement
 * @mixes VlElement
 *
 * @property {string} data-vl-title - Attribuut wordt gebruikt als titel van een menu item.
 * @property {string} data-vl-href - Attribuut wordt gebruikt om via het href attribuut de link te koppelen aan een menu item.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-side-sheet.html|Demo}
 */
@webComponent('vl-map-side-sheet-menu-item')
export class VlMapSideSheetMenuItem extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['title', 'href'];
    }

    constructor() {
        super(`
      <style>
        ${styles}

        .vl-map-side-sheet-menu-item {
          background: #e8ebee;
          padding: 2rem;
        }

        slot {
          padding: 1.5rem;
          display: block;
        }
      </style>
      <div>
        <div class="vl-map-side-sheet-menu-item">
          <a id="vl-map-side-sheet-menu-item-link" is="vl-link" href="#">
            <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span><span id="title">Terug</span>
          </a>
        </div>
        <slot></slot>
      </div>
    `);
    }

    get _titleElement() {
        return this._shadow.querySelector('#title');
    }

    get _hrefElement() {
        return this._shadow.querySelector('#vl-map-side-sheet-menu-item-link');
    }

    _titleChangedCallback(oldValue, newValue) {
        if (newValue) {
            this._titleElement.innerText = newValue;
        }
    }

    _hrefChangedCallback(oldValue, newValue) {
        if (newValue) {
            this._hrefElement.setAttribute('href', newValue);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-side-sheet-menu-item': VlMapSideSheetMenuItem;
    }
}
