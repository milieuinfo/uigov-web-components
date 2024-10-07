import { BaseElementOfType, webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-form-label', { extends: 'label' })
export class VlFormLabel extends BaseElementOfType(HTMLLabelElement) {
    static get _observedClassAttributes() {
        return ['light', 'block'];
    }

    connectedCallback() {
        this.classList.add('vl-form__label');
    }

    get _classPrefix() {
        return 'vl-form__label--';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-label': VlFormLabel;
    }
}
