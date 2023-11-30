import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

@webComponent('vl-doormat-title', { extends: 'h2' })
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
