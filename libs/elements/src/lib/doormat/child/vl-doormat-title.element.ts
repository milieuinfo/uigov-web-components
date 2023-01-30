import { BaseElementOfType, define } from '@domg-wc/common-utilities';

export class VlDoormatTitleElement extends BaseElementOfType(HTMLHeadingElement) {
    connectedCallback() {
        this._processStyle();
    }

    _processStyle() {
        this._addClass();
    }

    _addClass() {
        this.classList.add('vl-doormat__title');
    }
}

define('vl-doormat-title', VlDoormatTitleElement, { extends: 'h2' });
