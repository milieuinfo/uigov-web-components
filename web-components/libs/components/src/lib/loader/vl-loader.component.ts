import { BaseElementOfType, define } from '@domg-wc/common-utilities';
import styles from './style/vl-loader.scss';

/**
 * VlLoader
 * @class
 * @classdesc De loader component is een animatie dat aangeeft dat een pagina of website aan het laden is.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-light - Attribuut wordt gebruikt om een alternatieve rendering te bekomen in combinatie met een donkere achtergrond.
 * @property {boolean} data-vl-text - Attribuut wordt gebruikt om een informatieve tekst te tonen tijdens het laden.
 * @property {boolean} data-vl-single - Attribuut wordt gebruikt om aan te geven dat er geen tekst getoond mag worden.
 */
export class VlLoaderComponent extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['light', 'text', 'single'];
    }

    constructor() {
        super(`
      <style>
        ${styles}
      </style>
      <div class="vl-u-align-center">
        <div class="vl-loader" role="alert" aria-busy="true"></div>
        <p id="text">
          <slot>
            Pagina is aan het laden
          </slot>
        </p>
      </div>
    `);
    }

    get _loader() {
        return this._shadow.querySelector('.vl-loader');
    }

    get _text() {
        return this._shadow.querySelector('#text');
    }

    get _slot() {
        return this._shadow.querySelector('slot');
    }

    _lightChangedCallback(oldValue: string, newValue: string) {
        this._toggleClass(this._loader, newValue, 'vl-loader--light');
    }

    _textChangedCallback(oldValue: string, newValue: string) {
        this._slot.innerText = newValue;
    }

    _singleChangedCallback(oldValue: string, newValue: string) {
        this._toggleClass(this._text, newValue, 'vl-u-visually-hidden');
    }
}

define('vl-loader', VlLoaderComponent);
