import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-text', { extends: 'span' })
export class VlText extends BaseElementOfType(HTMLSpanElement) {
    static get _observedAttributes() {
        return ['visually-hidden'];
    }
    static get _observedClassAttributes() {
        return ['success', 'warning', 'error'];
    }

    get _classPrefix() {
        return 'vl-u-text--';
    }

    _visuallyHiddenChangedCallback(oldValue: string, newValue: string) {
        if (this.hasAttribute('visually-hidden')) {
            this._element?.classList.add('vl-u-visually-hidden');
        } else {
            this._element?.classList.remove('vl-u-visually-hidden');
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-text': VlText;
    }
}
