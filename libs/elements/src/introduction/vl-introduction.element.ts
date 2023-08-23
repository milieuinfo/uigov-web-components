import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlIntroduction
 * @class
 * @classdesc Gebruik deze component als introductie van de website. Deze component krijgt een opvallende layout zodat de gebruiker zijn aandacht getrokken wordt.
 *
 * @extends HTMLParagraphElement
 * @mixes BaseElementOfType
 */
@elementStyles()
@webComponent('vl-introduction', { extends: 'p' })
export class VlIntroductionElement extends BaseElementOfType(HTMLParagraphElement) {
    connectedCallback() {
        this.classList.add('vl-introduction');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-introduction': VlIntroductionElement;
    }
}
