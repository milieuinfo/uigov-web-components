import { BaseElementOfType, define } from '@domg-wc/common-utilities';

export class VlTabSectionComponent extends BaseElementOfType(HTMLElement) {
    static get is() {
        return 'vl-tab-section';
    }

    constructor() {
        super();
        this._processClasses();
        this._processAttributes();
    }

    _processClasses() {
        this.classList.add('vl-col--1-1');
        this.classList.add('vl-tab__pane');
    }

    _processAttributes() {
        this.setAttribute('data-vl-tab-pane', '');
        this.setAttribute('tabindex', 0);
        this.setAttribute('role', 'tabpanel');
        this.setAttribute('hidden', 'hidden');
        this.setAttribute('aria-labelledby', `${this.id}-tab`);
    }
}

define(VlTabSectionComponent.is, VlTabSectionComponent, { extends: 'section' });
