import { BaseElementOfType, registerWebComponents, webComponent } from '@domg-wc/common-utilities';
import { VlDoormatGraphicWrapperElement } from './vl-doormat-graphic-wrapper.element';

@webComponent('vl-doormat-image', { extends: 'img' })
export class VlDoormatImageElement extends BaseElementOfType(HTMLImageElement) {
    static {
        registerWebComponents([VlDoormatGraphicWrapperElement]);
    }

    static get _observedClassAttributes() {
        return ['image', 'graphic'];
    }

    connectedCallback() {
        if (this.getAttribute('graphic') === null) {
            this.doormatElement.moveChildren();
            this.setAttribute('data-vl-image', '');
        }
    }

    get doormatElement() {
        return this.closest('[is="vl-doormat"]');
    }

    get wrapperElement() {
        return this.doormatElement.querySelector('[is="vl-doormat-graphic-wrapper"]');
    }

    get _wrapperTemplate() {
        return this._template(`<div is="vl-doormat-graphic-wrapper"></div>`);
    }

    get _hasWrapper() {
        return this.parentElement.classList.contains('vl-doormat__graphic-wrapper');
    }

    get _classPrefix() {
        return 'vl-doormat__';
    }

    _graphicChangedCallback(oldValue: string, newValue: string) {
        if (newValue !== null) {
            this.removeAttribute('data-vl-image');
            if (!this._hasWrapper) {
                this.doormatElement.setAttribute('data-vl-graphic', '');
                this.doormatElement.prepend(this._wrapperTemplate);
                this.wrapperElement.append(this);
            }
        } else {
            this.doormatElement.moveChildren();
            this.doormatElement.removeAttribute('data-vl-graphic');
            this.setAttribute('data-vl-image', '');
            if (this._hasWrapper) {
                this.doormatElement.append(this);
                this.wrapperElement.remove();
            }
        }
    }
}
