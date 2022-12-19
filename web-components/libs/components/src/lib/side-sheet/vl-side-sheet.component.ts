import '@domg-wc/elements';
import swipeDetect from 'swipe-detect/dist/';
import styles from './style/vl-side-sheet.scss';
import { BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * VlSideSheet
 * @class
 * @classdesc SideSheet zijn containers die aan de linker- of rechterrand van het scherm zijn verankerd.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-enable-swipe - Attribute wordt gebruikt om aan te duiden dat swipe functie toegelaten is.
 * @property {boolean} data-vl-left - Attribute wordt gebruikt om aan te duiden dat de side-sheet de linkererand van het scherm moet plaatsen.
 * @property {boolean} data-vl-absolute - Attribute wordt gebruikt om aan te duiden dat de side-sheet absoluut gepositioneerd wordt.
 * @property {boolean} data-vl-right - Attribute wordt gebruikt om aan te duiden dat de side-sheet de rechterkant van het scherm moet plaatsen.
 * @property {boolean} data-vl-toggle-text - Attribute wordt gebruikt om de toggle knop tekst te wijzigen.
 *
 * @example Breedte van de side sheet aanpassen(op grote scherm):
 *  static get styles() {
    return [
      css`
        :host {
         --vl-side-sheet-width: 480px;
         }
      `
    ];
  }
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-sheet/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-sheet/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-sheet.html|Demo}
 *
 */
export class VlSideSheet extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['enable-swipe', 'toggle-text'];
    }

    static get _observedClassAttributes() {
        return ['left', 'right', 'absolute'];
    }

    constructor(style = '') {
        super(`
      <style>
        ${styles}
      </style>
      <div>
        <button is="vl-button" type="button" class="vl-side-sheet__toggle">
          <span is="vl-icon" data-vl-icon="nav-left"></span>
          <span id="vl-side-sheet-toggle-text" is="vl-text" data-vl-visually-hidden>Zijpaneel</span>
        </button>
        <div id="vl-side-sheet-backdrop"></div>
        <div id="vl-side-sheet">
          <section is="vl-region">
            <div is="vl-layout">
              <slot></slot>
            </div>
          </section>
        </div>
      </div>
    `);
    }

    connectedCallback() {
        this._toggle = () => this.toggle();
        this._toggleButton.addEventListener('click', this._toggle);
    }

    disconnectedCallback() {
        this._toggleButton.removeEventListener('click', this._toggle);
    }

    get isOpen() {
        return this.hasAttribute('open');
    }

    get isLeft() {
        return this.hasAttribute('left');
    }

    get _classPrefix() {
        return 'vl-side-sheet--';
    }

    get _toggleButton() {
        return this._shadow.querySelector('.vl-side-sheet__toggle');
    }

    get _toggleButtonTextElement() {
        return this._shadow.querySelector('#vl-side-sheet-toggle-text');
    }

    get _toggleButtonIcon() {
        return this._toggleButton.querySelector('[is="vl-icon"]');
    }

    get _sheetElement() {
        return this._shadow.querySelector('#vl-side-sheet');
    }

    get _regionElement() {
        return this._sheetElement.querySelector('[is="vl-region"]');
    }

    get _backdropElement() {
        return this._shadow.querySelector('#vl-side-sheet-backdrop');
    }

    get _slotElement() {
        return this._shadow.querySelector('slot');
    }

    /**
     * Triggert een toggle van de side-sheet zonder te klikken op de side-sheet.
     *
     * @Return {void}
     */
    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    /**
     * Handmatig openen van de side-sheet
     *
     * @Return {void}
     */
    open() {
        this.setAttribute('data-vl-open', '');
        this._toggleButton.setAttribute('aria-expanded', 'true');
        this._toggleButtonIcon.setAttribute('data-vl-icon', this.isLeft ? 'nav-left' : 'nav-right');
    }

    /**
     * Handmatig sluiten van de side-sheet
     *
     * @Return {void}
     */
    close() {
        this.removeAttribute('data-vl-open');
        this._toggleButton.setAttribute('aria-expanded', 'false');
        this._toggleButtonIcon.setAttribute('data-vl-icon', this.isLeft ? 'nav-right' : 'nav-left');
        if (this._onClose) {
            this._onClose();
        }
    }

    /**
     * De callback wordt uitgevoerd direct na de afsluiten van een side sheet.
     *
     * @param {function} callback
     */
    onClose(callback: any) {
        this._onClose = callback;
    }

    _enableSwipeChangedCallback(oldValue: any, newValue: any) {
        if (newValue !== null) {
            swipeDetect(
                this._sheetElement,
                (direction: any) => {
                    if ((this.isLeft && direction === 'left') || (!this.isLeft && direction === 'right')) {
                        this.close();
                    }
                },
                50
            );
        } else {
            //TODO: disable does not work, needs to be refactored: https://github.com/mhfen/swipe-detect/issues/11
            swipeDetect.disable();
        }
    }

    _absoluteChangedCallback(oldValue: any, newValue: any) {
        if (newValue != undefined && this._regionElement) {
            this._sheetElement.append(this._slotElement);
            this._regionElement.remove();
        }
    }

    _leftChangedCallback(oldValue: any, newValue: any) {
        if (newValue != undefined) {
            this._toggleButtonIcon.setAttribute('data-vl-icon', 'nav-right');
        } else {
            this._toggleButtonIcon.setAttribute('data-vl-icon', 'nav-left');
        }
    }

    _toggleTextChangedCallback(oldValue: any, newValue: any) {
        this._toggleButtonTextElement.textContent = newValue;
    }
}

define('vl-side-sheet', VlSideSheet);
