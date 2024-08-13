import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

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
