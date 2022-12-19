import { BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * VlInputGroup
 * @class
 * @classdesc Gebruik vl-ui-input-group om een 'input field' en een 'input add-on' te combineren. Bijvoorbeeld: de 'vl-datepicker' component combineert een 'input field' en een 'input add-on' in een 'input group'.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 */
export class VlInputGroupElement extends BaseElementOfType(HTMLDivElement) {
    connectedCallback() {
        this.classList.add('vl-input-group');
    }
}

define('vl-input-group', VlInputGroupElement, { extends: 'div' });
