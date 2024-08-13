import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

@webComponent('vl-duration-step')
export class VlDurationStepComponent extends BaseElementOfType(HTMLElement) {
    constructor() {
        super(`
      <li class="vl-duration-step"></li>
    `);
    }

    connectedCallback() {
        super.connectedCallback();

        this._processSlots();
    }

    get template() {
        return this._element.cloneNode(true);
    }

    _processSlots() {
        [...this.childNodes].forEach((child) => this._element.append(child.cloneNode(true)));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-duration-step': VlDurationStepComponent;
    }
}
