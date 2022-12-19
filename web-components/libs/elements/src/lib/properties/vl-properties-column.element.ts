import { BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * VlPropertiesColumn
 * @class
 * @classdesc De properties kolom webcomponent wordt gebruikt om lijsten van kenmerken van een onderwerp te verdelen in verschillende kolommen.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-full - Attribuut wordt gebruikt om de kolom de volledige breedte te laten innemen.
 */
export class VlPropertiesColumnElement extends BaseElementOfType(HTMLDivElement) {
    static get _observedClassAttributes() {
        return ['full'];
    }

    connectedCallback() {
        this.classList.add('vl-properties__column');
    }

    get _classPrefix() {
        return 'vl-properties__column--';
    }
}

define('vl-properties-column', VlPropertiesColumnElement, { extends: 'div' });
