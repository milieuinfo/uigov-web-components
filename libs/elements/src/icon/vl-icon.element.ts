import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlIcon
 * @class
 * @classdesc Gebruik een vl-icon om een extra visueel element toe te voegen.
 *
 * @extends HTMLSpanElement
 * @mixes nativeVlElement
 *
 * @property {string} data-vl-icon - Attribuut wordt gebruikt om aan te geven welk icoon getoond moet worden.
 * @property {(small | large)} data-vl-size - Attribuut wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent.
 * @property {boolean} data-vl-light - Attribuut wordt gebruikt om het icoon een lichte kleur te geven.
 * @property {boolean} data-vl-before - Attribuut wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.
 * @property {boolean} data-vl-after - Attribuut wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.
 * @property {boolean} data-vl-90deg - Attribuut wordt gebruikt om het icoon 90 graden te roteren.
 * @property {boolean} data-vl-180deg - Attribuut wordt gebruikt om het icoon 180 graden te roteren.
 * @property {boolean} data-vl-link - Attribuut moet gebruikt worden wanneer het icoon binnen een a tag gebruikt wordt zodat de stijl goed is.
 */
@elementStyles()
@webComponent('vl-icon', { extends: 'span' })
export class VlIconElement extends BaseElementOfType(HTMLSpanElement) {
    static get _observedAttributes() {
        return ['icon', 'size', '90deg', '180deg', 'link'];
    }

    static get _observedChildClassAttributes() {
        return ['before', 'after', 'light'];
    }

    connectedCallback() {
        this.classList.add('vl-icon');
        this.classList.add('vl-vi');
        this.setAttribute('aria-hidden', true);
    }

    get _classPrefix() {
        return 'vl-icon--';
    }

    _iconChangedCallback(oldValue: string, newValue: string) {
        this._changeClass(this._element, oldValue, newValue, 'vl-vi-');
    }

    _sizeChangedCallback(oldValue: string, newValue: string) {
        if (['small', 'large'].indexOf(newValue) >= 0) {
            this._changeClass(this._element, oldValue, newValue);
        } else {
            this._element.classList.remove(this._prefix + oldValue);
        }
    }

    _90degChangedCallback(oldValue: string, newValue: string) {
        this._toggleClass(this._element, newValue, 'vl-vi-u-90deg');
    }

    _180degChangedCallback(oldValue: string, newValue: string) {
        this._toggleClass(this._element, newValue, 'vl-vi-u-180deg');
    }

    _linkChangedCallback(oldValue: string, newValue: string) {
        setTimeout(() => {
            if (newValue != undefined) {
                this._element.classList.forEach((value: string) => {
                    this._element.classList.replace(value, value.replace('-icon', '-link__icon'));
                });
            } else {
                this._element.classList.forEach((value: string) => {
                    this._element.classList.replace(value, value.replace('-link__icon', '-icon'));
                });
            }
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-icon': VlIconElement;
    }
}
