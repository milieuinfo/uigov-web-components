import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { alertStyle, iconStyle } from '@domg/govflanders-style/component';
import { accessibilityStyle, resetStyle } from '@domg/govflanders-style/common';
import { VlAlertClosedEvent } from './vl-alert-closed-event';

@webComponent('vl-alert')
export class VlAlert extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['icon', 'title', 'closable', 'type', 'size'];
    }

    constructor() {
        super(`
          <style>
            ${resetStyle}
            ${iconStyle}
            ${alertStyle}
            ${accessibilityStyle}
          </style>
          <div id="alert" class="vl-alert" role="alert">
            <div id="content" class="vl-alert__content">
              <p id="title" class="vl-alert__title">
                <slot name='title'></slot>
              </p>
              <div id="message" class="vl-alert__message">
                <slot id="messages-slot"></slot>
              </div>
              <div id="actions" class="vl-alert__actions">
                <slot id="actions-slot" name="actions"></slot>
              </div>
            </div>
          </div>
        `);
    }

    connectedCallback() {
        super.connectedCallback();

        this.__processActionsElementVisibility();
        this.__processTitleElementVisibility();
        this._actionsSlotElement.addEventListener('slotchange', () => this.__processButtons());
        this._titleSlotElement.addEventListener('slotchange', () => this.__processTitleElementVisibility());
    }

    get _classPrefix() {
        return 'vl-alert--';
    }

    get _iconElement() {
        return this._element.querySelector('.vl-alert__icon');
    }

    get _closeButtonElement() {
        return this._element.querySelector('.vl-alert__close');
    }

    get _actionsElement() {
        return this._element.querySelector('.vl-alert__actions');
    }

    get _titleElement() {
        return this._element.querySelector('.vl-alert__title');
    }

    get _actionsSlotElement() {
        return this._element.querySelector('slot[name="actions"]');
    }

    get _titleSlotElement() {
        return this._element.querySelector('slot[name="title"]');
    }

    _getIconTemplate(newValue: string) {
        return this._template(`
      <div class="vl-alert__icon">
        <span is="vl-icon" data-vl-icon="${newValue}"></span>
      </div>
    `);
    }

    _getCloseButtonTemplate() {
        return this._template(`
      <button id="close" class="vl-alert__close" type="button">
        <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
        <span class="vl-u-visually-hidden">Melding sluiten</span>
      </button>
    `);
    }

    _getActionsTemplate() {
        return this._template(`
      <div class="vl-alert__actions"></div>
    `);
    }

    _iconChangedCallback(oldValue: string, newValue: string) {
        if (this._iconElement) {
            this._iconElement.remove();
        }

        if (newValue != undefined) {
            this._element.prepend(this._getIconTemplate(newValue));
        }
    }

    _titleChangedCallback(oldValue: string, newValue: string) {
        this._titleSlotElement.textContent = newValue;
        this.__processTitleElementVisibility();
    }

    _closableChangedCallback(oldValue: string, newValue: string) {
        if (this._closeButtonElement) {
            this._closeButtonElement.remove();
        }

        if (newValue != undefined) {
            const closeButtonTemplate = this._getCloseButtonTemplate();
            closeButtonTemplate.querySelector('button').addEventListener('click', this.__removeAlert);
            this._element.appendChild(closeButtonTemplate);
        }
    }

    _typeChangedCallback(oldValue: string, newValue: string) {
        if (['success', 'warning', 'error', 'info'].indexOf(newValue) >= 0) {
            this._changeClass(this._element, oldValue, newValue);
        } else {
            this._element.classList.remove(this._classPrefix + oldValue);
        }
    }

    _sizeChangedCallback(oldValue: string, newValue: string) {
        if (['small'].indexOf(newValue) >= 0) {
            this._changeClass(this._element, oldValue, newValue);
        } else {
            this._element.classList.remove(this._classPrefix + oldValue);
        }
    }

    __processTitleElementVisibility() {
        this._titleElement.hidden =
            this._titleSlotElement &&
            this._titleSlotElement.assignedElements().length == 0 &&
            this._titleSlotElement.textContent.trim() === '';
    }

    __processActionsElementVisibility() {
        this._actionsElement.hidden =
            this._actionsSlotElement && this._actionsSlotElement.assignedElements().length == 0;
    }

    __processButtons() {
        if (this._actionsSlotElement) {
            this._actionsSlotElement.assignedNodes().forEach((element: Element) => {
                if (element instanceof HTMLButtonElement) {
                    element.setAttribute('data-vl-narrow', '');
                }
            });
        }
        this.__processActionsElementVisibility();
    }

    __removeAlert() {
        this.getRootNode().host.remove();
        this.getRootNode().host.dispatchEvent(new VlAlertClosedEvent());
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-alert': VlAlert;
    }
}
