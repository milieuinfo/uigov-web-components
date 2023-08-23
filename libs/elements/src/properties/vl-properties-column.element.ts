import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

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
@elementStyles()
@webComponent('vl-properties-column', { extends: 'div' })
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

declare global {
    interface HTMLElementTagNameMap {
        'vl-properties-column': VlPropertiesColumnElement;
    }
}
