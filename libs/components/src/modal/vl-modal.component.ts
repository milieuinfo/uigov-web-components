import { awaitUntil, BaseElementOfType, registerWebComponents, webComponent } from '@domg-wc/common-utilities';
import { VlActionGroup, VlButtonLinkElement, VlColumnElement, VlGridElement, VlIconElement } from '@domg-wc/elements';
import { accessibilityStyle, gridStyle, resetStyle } from '@domg/govflanders-style/common';
import { actionGroupStyle, iconStyle, linkStyle, modalStyle } from '@domg/govflanders-style/component';
import '@govflanders/vl-ui-core/dist/js/core.js';
import '@govflanders/vl-ui-util/dist/js/util.js';
import './vl-modal.lib.js';
import modalUigStyle from './vl-modal.uig-css';

declare const vl: any;

@webComponent('vl-modal')
export class VlModalComponent extends BaseElementOfType(HTMLElement) {
    static {
        registerWebComponents([VlActionGroup, VlButtonLinkElement, VlColumnElement, VlGridElement, VlIconElement]);
    }

    static get _observedAttributes() {
        return ['id', 'title', 'closable', 'not-cancellable', 'open', 'not-auto-closable', 'allow-overflow'];
    }

    static get _closableAttribute() {
        return 'data-vl-modal-closable';
    }

    static get _closeAttribute() {
        return 'data-vl-modal-close';
    }

    constructor() {
        super(`
            <style>
                ${resetStyle}
                ${modalStyle}
                ${modalUigStyle}
                ${accessibilityStyle}
                ${actionGroupStyle}
                ${iconStyle}
                ${linkStyle}
                ${gridStyle}
            </style>
            <div class="vl-modal">
                <dialog class="vl-modal-dialog" data-vl-modal tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="modal-toggle-title" aria-describedby="modal-toggle-description">
                    <div class="vl-modal-dialog__wrapper" id="modal-dialog-wrapper">
                        <div is="vl-grid" data-vl-is-stacked>
                            <div id="modal-toggle-description" is="vl-column" data-vl-size="12" data-vl-medium-size="12" class="vl-modal-dialog__content">
                                <slot name="content">Modal content</slot>
                            </div>
                            <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                <div id="modal-action-group" is="vl-action-group">
                                    <slot name="button" data-vl-modal-close></slot>
                                    <button is="vl-button-link" id="modal-toggle-cancellable" data-vl-modal-close>
                                        <span is="vl-icon" icon="cross" before></span>Annuleer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        `);
    }

    connectedCallback() {
        super.connectedCallback();

        this.dress();
    }

    get _dialogElement(): HTMLDialogElement {
        return this._element?.querySelector('dialog');
    }

    get _dialogWrapperElement(): HTMLDialogElement {
        return this._element?.querySelector('#modal-dialog-wrapper');
    }

    get _titleElement() {
        return this._element.querySelector('#modal-toggle-title');
    }

    get _actionGroupElement() {
        return this._element.querySelector('#modal-action-group');
    }

    get _cancelElement() {
        return this._element.querySelector('#modal-toggle-cancellable');
    }

    get _slotButtonElement() {
        return this._element.querySelector('slot[name="button"]');
    }

    get _dressed() {
        return !!this.getAttribute('data-vl-modal-dressed');
    }

    /**
     * Initialiseer de modal config.
     */
    dress() {
        if (!this._dressed) {
            vl.modal.dress(this._dialogElement);
        }
    }

    /**
     * Handmatig openen van modal.
     */
    open() {
        vl.modal.lastClickedToggle = this._dialogElement;
        if (!this.isOpen()) {
            awaitUntil(() => this._dialogElement.isConnected).then(() => {
                vl.modal.toggle(this._dialogElement);
                this._dialogElement?.focus();
            });
        }
    }

    /**
     * Handmatig sluiten van modal.
     */
    close() {
        if (this.isOpen()) {
            vl.modal.toggle(this._dialogElement);
        }
    }

    /**
     * Mogelijkheid om functies toe te voegen op events die op de dialog voorkomen.
     * @param {String} event
     * @param {Function} callback
     */
    on(event: string, callback: any) {
        this._dialogElement?.addEventListener(event, callback);
    }

    /**
     * Mogelijkheid om event listeners die op de dialog geplaatst zijn te verwijderen.
     * Zie dat je dezelfde referentie voor de callback meegeeft als bij het toevoegen van de event listener.
     * @param {String} event
     * @param {Function} callback
     */
    off(event: string, callback: any) {
        this._dialogElement?.removeEventListener(event, callback);
    }

    /**
     * Geeft terug of de modal geopend is.
     * @return {boolean}
     */
    isOpen() {
        return this._dialogElement?.hasAttribute('open');
    }

    _getCloseButtonTemplate() {
        return this._template(`
      <button id="close" type="button" class="vl-modal-dialog__close" data-vl-modal-close>
        <i class="vl-modal-dialog__close__icon vl-vi vl-vi-cross" aria-hidden="true"></i>
        <span class="vl-u-visually-hidden">Venster sluiten</span>
      </button>
    `);
    }

    _getTitleTemplate(titel: string) {
        return this._template(`
      <h2 class="vl-modal-dialog__title" id="modal-toggle-title">${titel}</h2>`);
    }

    _getCancelTemplate() {
        return this._template(`
      <button is="vl-button-link" data-vl-modal-close id="modal-toggle-cancellable">
          <span is="vl-icon" icon="cross" before data-vl-modal-close></span>Annuleer
      </button>`);
    }

    _idChangedCallback(oldValue: string, newValue: string) {
        this._dialogElement.id = newValue;
    }

    _titleChangedCallback(oldValue: string, newValue: string) {
        if (newValue) {
            if (this._titleElement) {
                this._titleElement.innerText = newValue;
            } else {
                this._dialogWrapperElement.prepend(this._getTitleTemplate(newValue));
            }
        } else if (this._titleElement) {
            this._titleElement.remove();
        }
    }

    _notCancellableChangedCallback(oldValue: string, newValue: string) {
        if (newValue == undefined && !this._cancelElement) {
            this._actionGroupElement.append(this._getCancelTemplate());
        } else if (newValue != undefined && this._cancelElement) {
            this._cancelElement.remove();
        }
    }

    _openChangedCallback(oldValue: string, newValue: string) {
        this.open();
    }

    _closableChangedCallback(oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this._closeButtonElement = this._getCloseButtonTemplate();
            this._dialogElement.setAttribute(VlModalComponent._closableAttribute, '');
            this._dialogElement.appendChild(this._closeButtonElement);
        } else if (this._closeButtonElement) {
            this._closeButtonElement.remove();
            this._dialogElement.removeAttribute(VlModalComponent._closableAttribute);
        }
    }

    _notAutoClosableChangedCallback(oldValue: string, newValue: string) {
        if (newValue == undefined && !this._slotButtonElement.hasAttribute(VlModalComponent._closeAttribute)) {
            this._slotButtonElement.setAttribute(VlModalComponent._closeAttribute, '');
        } else if (newValue != undefined && this._slotButtonElement.hasAttribute(VlModalComponent._closeAttribute)) {
            this._slotButtonElement.removeAttribute(VlModalComponent._closeAttribute);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-modal': VlModalComponent;
    }
}
