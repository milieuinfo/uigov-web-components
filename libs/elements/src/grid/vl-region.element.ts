import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-region', { extends: 'section' })
export class VlRegionElement extends BaseElementOfType(HTMLElement) {
    static get _observedClassAttributes() {
        return ['no-space', 'no-space-bottom', 'no-space-top', 'alt', 'small', 'medium', 'bordered', 'overlap'];
    }

    connectedCallback() {
        this.classList.add('vl-region');
    }

    get _classPrefix() {
        return 'vl-region--';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-region': VlRegionElement;
    }
}
