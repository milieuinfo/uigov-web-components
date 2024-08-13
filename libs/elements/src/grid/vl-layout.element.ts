import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
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
