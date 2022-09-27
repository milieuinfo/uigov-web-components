import { BaseElementOfType, define } from '@domg-lib/common-utilities';

export class VlDoormatContentElement extends BaseElementOfType(HTMLDivElement) {
    connectedCallback() {
        this._processStyle();
    }

    get _iconTemplate() {
        return this._template(`<span class="vl-doormat__content__arrow" aria-hidden="true"></span>`);
    }

    _processStyle() {
        this._addClass();
        this._prependIcon();
    }

    _addClass() {
        this.classList.add('vl-doormat__content');
    }

    _prependIcon() {
        this.prepend(this._iconTemplate);
    }
}

define('vl-doormat-content', VlDoormatContentElement, { extends: 'div' });
