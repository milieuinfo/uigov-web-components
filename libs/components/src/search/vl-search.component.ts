import { BaseElementOfType, registerWebComponents, webComponent } from '@domg-wc/common';
import { VlButtonElement, VlIconElement, VlInputFieldElement, VlSelect } from '@domg-wc/elements';
import { resetStyle } from '@domg/govflanders-style/common';
import { buttonStyle, inputFieldStyle, selectStyle } from '@domg/govflanders-style/component';
import searchUigStyle from './vl-search.uig-css';

@webComponent('vl-search')
export class VlSearchComponent extends BaseElementOfType(HTMLElement) {
    static {
        registerWebComponents([VlButtonElement, VlIconElement, VlInputFieldElement]);
    }

    static get _observedAttributes() {
        return ['label', 'submit-label'];
    }

    static get _observedChildClassAttributes() {
        return ['inline', 'block', 'alt'];
    }

    constructor() {
        super(`
      <style>
        ${resetStyle}
        ${buttonStyle}
        ${inputFieldStyle}
        ${selectStyle}
        ${searchUigStyle}
      </style>
      <div class="vl-search">
        <slot name="input"></slot>
        <input is="vl-input-field" class="vl-search__input" type="search" id="search-input" value="" title="Zoekterm"/>
      </div>
    `);
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this._isInline && !this._isBlock) {
            this.setAttribute('data-vl-block', ''); // default to block if none set
        }
        this.__processInputSlot();
        this.__setupChangeEventTriggers();
    }

    disconnectedCallback() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }

    /**
     * Geeft de zoekterm.
     *
     * @return {String}
     */
    get value() {
        return this.__inputElement.value;
    }

    get _isInline() {
        return this.hasAttribute('data-vl-inline');
    }

    get _isBlock() {
        return this.hasAttribute('data-vl-block');
    }

    get _classPrefix() {
        return 'vl-search--';
    }

    get __labelElement() {
        return this._element.querySelector('#search-label');
    }

    get __buttonElement() {
        return this._element.querySelector('#search-button');
    }

    get __inputElement() {
        return this._element.querySelector('#search-input');
    }

    get __inputSlotElement() {
        return this._element.querySelector('slot[name="input"]');
    }

    get __inputSlot() {
        return this.querySelector('[slot="input"]');
    }

    _inlineChangedCallback(oldValue: string, newValue: string) {
        this.toggleAttribute('data-vl-block', newValue == undefined);
        this.__render();
    }

    _blockChangedCallback(oldValue: string, newValue: string) {
        this.toggleAttribute('data-vl-inline', newValue == undefined);
        this.__render();
    }

    _labelChangedCallback() {
        this.__renderLabel();
    }

    _submitLabelChangedCallback() {
        this.__renderButton();
    }

    __setupChangeEventTriggers() {
        if (this.__inputElement) {
            this.__inputElement.addEventListener('change', (event: Event) => {
                event.stopPropagation();
                this._submit();
            });
        }
        if (this.__labelElement) {
            this.__labelElement.addEventListener('click', () => {
                const slottedInput = this.querySelector(`:scope > [slot=input]`);
                slottedInput?.querySelector('input')?.click();
            });
        }
    }

    _submit() {
        this.dispatchEvent(new Event('change'));
    }

    __render() {
        this.__renderLabel();
        this.__renderButton();
    }

    __renderLabel() {
        if (this.__labelElement) {
            this.__labelElement.remove();
        }
        this._element.prepend(this.__getLabelTemplate());
    }

    __renderButton() {
        if (this.__buttonElement) {
            this.__buttonElement.remove();
        }
        this._element.append(this.__getButtonTemplate());
    }

    __iconTemplate() {
        return `<span is="vl-icon" data-vl-icon="magnifier" aria-hidden="true"></span>`;
    }

    __getLabelTemplate() {
        const text = this.dataset.vlLabel || 'Zoekterm';
        const content = this._isInline
            ? `<span class="vl-u-visually-hidden">${text}</span> ${this.__iconTemplate()}`
            : text;
        return this._template(`
      <label id="search-label" class="vl-search__label" for="search-input">
        <slot name="label">
          ${content}
        </slot>
      </label>
    `);
    }

    __getButtonTemplate() {
        const content = this._isInline ? this.__iconTemplate() : ``;
        return this._template(`
          <button is="vl-button" id="search-button" class="vl-search__submit" type="submit">
            ${content}
            <slot name="submit-label">
              ${this.dataset.vlSubmitLabel || 'Zoeken'}
            </slot>
          </button>
        `);
    }

    __processInputSlot() {
        const slot = this.querySelector('[slot="input"]');
        if (!slot) {
            this.__inputSlotElement.remove();
        } else {
            customElements.whenDefined('vl-select').then(async () => {
                if (slot instanceof VlSelect) {
                    this.setAttribute('data-vl-has-input-slot', '');
                    await slot.ready();
                    this.__observeInputSlot((mutations: any) => {
                        const isOpen = (mutation: any) => mutation.target.classList.contains('is-open');
                        const isFocused = (mutation: any) => mutation.target.classList.contains('is-focused');
                        if (mutations.find((mutation: any) => isOpen(mutation) || isFocused(mutation))) {
                            this.__inputSlotElement.classList.add('is-open');
                        } else {
                            this.__inputSlotElement.classList.remove('is-open');
                        }
                    });
                    this.append(slot._wrapperElement);
                }
            });

            if (this.__inputElement) {
                this.__inputElement.remove();
            }
        }
    }

    __observeInputSlot(callback: any) {
        this._observer = new MutationObserver(callback);
        this._observer.observe(this.__inputSlot, {
            attributes: true,
            attributeFilter: ['class'],
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-search': VlSearchComponent;
    }
}
