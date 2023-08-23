import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VLActionGroup
 * @class
 * @classdesc Toon meerdere knoppen of links. De groep zorgt ervoor dat ze correct zijn uitgelijnd.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {string} data-vl-align - Attribuut wordt gebruikt om ervoor te zorgen dat de onderliggende elementen worden gealigneerd. Mogelijkheden: align="center" of align="right".
 * @property {boolean} data-vl-space-between - Attribuut wordt gebruikt om aan te duiden dat de ruimte tussen de elementen volledig moet worden opgevuld.
 * @property {boolean} data-vl-bordered - Attribuut wordt gebruikt om aan te duiden dat de tussenliggende elementen een rand krijgen.
 * @property {boolean} data-vl-collapse-l - Attribuut wordt gebruikt om de button bij large schermen als block element te tonen.
 * @property {boolean} data-vl-collapse-m - Attribuut wordt gebruikt om de button bij medium schermen als block element te tonen.
 * @property {boolean} data-vl-collapse-s - Attribuut wordt gebruikt om de button bij small schermen als block element te tonen.
 * @property {boolean} data-vl-collapse-xs - Attribuut wordt gebruikt om de button bij extra small schermen als block element te tonen.
 */
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
