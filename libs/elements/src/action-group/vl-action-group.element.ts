import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-action-group', { extends: 'div' })
export class VlActionGroup extends BaseElementOfType(HTMLDivElement) {
    static get _observedClassAttributes() {
        return ['align', 'space-between', 'bordered', 'collapse-l', 'collapse-m', 'collapse-s', 'collapse-xs'];
    }

    connectedCallback() {
        this.classList.add('vl-action-group');
    }

    get _classPrefix() {
        return 'vl-action-group--';
    }

    _alignChangedCallback(oldValue: string, newValue: string) {
        this._changeClass(this, 'align-' + oldValue, 'align-' + newValue, this._classPrefix);
    }

    _collapseLChangedCallback(oldValue: string, newValue: string) {
        this._toggleCollapseClass(newValue, 'l');
    }

    _collapseMChangedCallback(oldValue: string, newValue: string) {
        this._toggleCollapseClass(newValue, 'm');
    }

    _collapseSChangedCallback(oldValue: string, newValue: string) {
        this._toggleCollapseClass(newValue, 's');
    }

    _collapseXsChangedCallback(oldValue: string, newValue: string) {
        this._toggleCollapseClass(newValue, 'xs');
    }

    _toggleCollapseClass(value: string, type: string) {
        this._toggleClass(this, value, `${this._classPrefix}collapse--${type}`);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-action-group': VlActionGroup;
    }
}
