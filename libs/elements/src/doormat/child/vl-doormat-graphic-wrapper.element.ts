import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

@webComponent('vl-doormat-graphic-wrapper', { extends: 'div' })
export class VlDoormatGraphicWrapperElement extends BaseElementOfType(HTMLDivElement) {
    connectedCallback() {
        this._processStyle();
    }

    _processStyle() {
        this._addClass();
    }

    _addClass() {
        this.classList.add('vl-doormat__graphic-wrapper');
    }
}
