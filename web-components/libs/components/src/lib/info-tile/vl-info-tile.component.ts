import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import '../accordion/vl-accordion.component';
import styles from './style/vl-info-tile.scss';

declare const vl: any;

@webComponent('vl-info-tile')
export class VlInfoTile extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['auto-open', 'toggleable'];
    }

    constructor() {
        super(`
      <style>
        ${styles}
      </style>
      <div class="vl-info-tile">
        <header class="vl-info-tile__header" role="presentation">
          <div id="wrapper" class="vl-info-tile__header__wrapper">
            <h3 id="title" class="vl-info-tile__header__title">
              <slot name="title"></slot><slot name="title-label"></slot>
            </h3>
            <p class="vl-info-tile__header__subtitle">
              <slot name="subtitle"></slot>
            </p>
          </div>
        </header>

        <div class="vl-info-tile__content">
          <slot name="content"></slot>
        </div>

        <footer class="vl-info-tile__footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    `);
    }

    connectedCallback() {
        this.__processAutoOpen();
        this.__processSlots();
        this.__processAutoOpen();
    }

    get isToggleable() {
        return this.getAttribute('toggleable') !== null;
    }

    get isOpen() {
        if (this.isToggleable) {
            return this._element.classList.contains('js-vl-accordion--open');
        }
        return true;
    }

    get _headerWrapperElement() {
        return this._element.querySelector('#wrapper');
    }

    get _titleElement() {
        return this._headerWrapperElement.querySelector('#title');
    }

    get _titleLabelSlot() {
        return this.querySelector("[slot='title-label']");
    }

    get _titleLabelSlotElement() {
        return this._titleElement.querySelector('[name="title-label"]');
    }

    get _buttonElement() {
        return this._element.querySelector('button');
    }

    toggle() {
        this._toggleElement.click();
    }

    open() {
        if (!this.isOpen) {
            this.toggle();
        }
    }

    close() {
        if (this.isOpen) {
            this.toggle();
        }
    }

    get _toggleElement() {
        return this._shadow.querySelector('.js-vl-accordion__toggle');
    }

    get _subtitleElement() {
        return this._shadow.querySelector('slot[name="subtitle"]');
    }

    get _contentElement() {
        return this._shadow.querySelector('slot[name="content"]');
    }

    _toggleableChangedCallback(oldValue: string, newValue: string) {
        if (newValue === null) {
            this.__removeAccordionElements();
            this.__removePreventContentClickPropagation();
        } else {
            this.__prepareAccordionElements();
            vl.accordion.dress(this._buttonElement);
            this.__preventContentClickPropagation();
            this.__processAutoOpen();
        }
    }

    __prepareAccordionElements() {
        this._element.classList.add('js-vl-accordion');
        const button = this._template(`
      <button class="vl-toggle vl-link vl-link--bold js-vl-accordion__toggle">
        <i class="vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
      </button>
    `).firstElementChild;
        button.appendChild(this._titleElement);
        this._headerWrapperElement.prepend(button);
    }

    __removeAccordionElements() {
        this._element.classList.remove('js-vl-accordion');
        this._headerWrapperElement.replaceChild(this._titleElement, this._buttonElement);
    }

    __preventContentClickPropagation() {
        this._subtitleElement.addEventListener('click', (e: Event) => e.stopPropagation());
        this._contentElement.addEventListener('click', (e: Event) => e.stopPropagation());
    }

    __removePreventContentClickPropagation() {
        this._subtitleElement.removeEventListener('click', (e: Event) => e.stopPropagation());
        this._contentElement.removeEventListener('click', (e: Event) => e.stopPropagation());
    }

    __processAutoOpen() {
        if (this.isToggleable) {
            if (this.dataset.vlAutoOpen === undefined) {
                this.close();
            } else {
                this.open();
            }
        }
    }

    __processSlots() {
        if (!this._titleLabelSlot) {
            this._titleLabelSlotElement.remove();
        }
        this._titleElement.addEventListener('click', (event: Event) => {
            event.stopPropagation();
            this._buttonElement.click();
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-info-tile': VlInfoTile;
    }
}
