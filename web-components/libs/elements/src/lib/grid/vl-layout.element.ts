import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlLayout
 * @class
 * @classdesc Het layout element (vl-layout) centreert uw inhoud in de viewport. Het layout element heeft een breedte van 1200px. Je kan het layout element vergelijken met het Container element in Bootstrap.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 */
@webComponent('vl-layout', { extends: 'div' })
export class VlLayoutElement extends BaseElementOfType(HTMLDivElement) {
    static get _observedClassAttributes() {
        return [];
    }

    connectedCallback() {
        this.classList.add('vl-layout');
    }

    get _classPrefix() {
        return 'vl-layout--';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-layout': VlLayoutElement;
    }
}
