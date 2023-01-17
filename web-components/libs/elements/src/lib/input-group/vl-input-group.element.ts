import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlInputGroup
 * @class
 * @classdesc Gebruik vl-ui-input-group om een 'input field' en een 'input add-on' te combineren. Bijvoorbeeld: de 'vl-datepicker' component combineert een 'input field' en een 'input add-on' in een 'input group'.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 */
@webComponent('vl-input-group', { extends: 'div' })
export class VlInputGroupElement extends BaseElementOfType(HTMLDivElement) {
    connectedCallback() {
        this.classList.add('vl-input-group');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-group': VlInputGroupElement;
    }
}
