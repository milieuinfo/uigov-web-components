import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlDurationStep
 * @class
 * @classdesc De step duration component stelt een moment tussen twee stappen voor.
 *
 * @extends HTMLElement
 * @mixes vlElement
 */
@webComponent('vl-duration-step')
export class VlDurationStepComponent extends BaseElementOfType(HTMLElement) {
    constructor() {
        super(`
      <li class="vl-duration-step"></li>
    `);
    }

    connectedCallback() {
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
