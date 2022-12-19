import { BaseElementOfType, define } from '@domg-wc/common-utilities';
import './child/vl-doormat-content.element';
import './child/vl-doormat-title.element';
import './child/vl-doormat-text.element';
import './child/vl-doormat-image.element';
import './child/vl-doormat-graphic-wrapper.element';

export class VlDoormatElement extends BaseElementOfType(HTMLAnchorElement) {
    static get _observedClassAttributes() {
        return ['alt', 'graphic'];
    }

    connectedCallback() {
        this._processStyle();
    }

    get contentElement() {
        return this._getElement('content');
    }

    get titleElement() {
        return this._getElement('title');
    }

    get textElement() {
        return this._getElement('text');
    }

    get imageElement() {
        return this._getElement('image');
    }

    get _contentTemplate() {
        return this._template(`<div is="vl-doormat-content"></div>`);
    }

    get _classPrefix() {
        return 'vl-doormat--';
    }

    _imageChild() {
        return this.querySelector('[is="vl-doormat-image"]');
    }

    _getElement(type: string) {
        return this.querySelector(`[is="vl-doormat-${type}"]`);
    }

    _processStyle() {
        this._addClass();
        this._addChildContainer();

        if (!this._imageChild()) {
            this.moveChildren();
        }
    }

    _addClass() {
        this.classList.add('vl-doormat');
    }

    _addChildContainer() {
        this.prepend(this._contentTemplate);
    }

    moveChildren() {
        this._moveTitle();
        this._moveText();
    }

    _moveTitle() {
        if (this.titleElement) {
            this.contentElement.append(this.titleElement);
        }
    }

    _moveText() {
        if (this.textElement) {
            this.contentElement.append(this.textElement);
        }
    }
}

define('vl-doormat', VlDoormatElement, { extends: 'a' });
