import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-properties')
export class VlPropertiesComponent extends BaseElementOfType(HTMLElement) {
    static get _observedClassAttributes() {
        return ['full-width', 'collapsed'];
    }

    connectedCallback() {
        this.classList.add('vl-properties');
        this._setPropertiesTitle();
    }

    get _titles() {
        return this.querySelectorAll('h1,h2,h3,h4,h5,h6');
    }

    get _classPrefix() {
        return 'vl-properties--';
    }

    _setPropertiesTitle() {
        this._titles.forEach((title: Element) => {
            title.classList.add('vl-properties__title');
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-properties': VlPropertiesComponent;
    }
}
