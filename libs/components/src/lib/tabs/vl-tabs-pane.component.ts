import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

@webComponent('vl-tabs-pane')
export class VlTabsPaneComponent extends BaseElementOfType(HTMLElement) {
    static get is() {
        return 'vl-tabs-pane';
    }

    static get _observedAttributes() {
        return ['id', 'title'];
    }

    constructor() {
        super(`<slot></slot>`);
        this.__processTitleSlot();
    }

    disconnectedCallback() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }

    get id() {
        return this.getAttribute('data-vl-id');
    }

    get title() {
        return this.getAttribute('data-vl-title') || '';
    }

    get titleSlot() {
        return this.querySelector('[slot="title"]');
    }

    __processTitleSlot() {
        if (this.titleSlot) {
            this.__moveTabPaneTitleSlot();
            this._observer = this.__observeTitleSlot(() => this.__moveTabPaneTitleSlot());
        }
    }

    __moveTabPaneTitleSlot() {
        const clone = this.titleSlot.cloneNode(true);
        clone.setAttribute('slot', `${this.id}-title-slot`);
        const slot = this.parentElement.querySelector(`[slot="${this.id}-title-slot"]`);
        if (slot) {
            this.parentElement.replaceChild(clone, slot);
        } else {
            this.parentElement.appendChild(clone);
        }
    }

    __observeTitleSlot(callback: any) {
        const observer = new MutationObserver((mutations) => callback(mutations));
        observer.observe(this.titleSlot, { childList: true, subtree: true, characterData: true });
        return observer;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-tabs-pane': VlTabsPaneComponent;
    }
}
