import { BaseElementOfType, webComponent } from '@domg-wc/common';

@webComponent('vl-doormat-text', { extends: 'div' })
export class VlDoormatTextElement extends BaseElementOfType(HTMLDivElement) {
    connectedCallback() {
        this._processStyle();
    }

    _processStyle() {
        this._addClass();
    }

    _addClass() {
        this.classList.add('vl-doormat__text');
    }
}
