import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlIntroduction
 * @class
 * @classdesc Gebruik deze component als introductie van de website. Deze component krijgt een opvallende layout zodat de gebruiker zijn aandacht getrokken wordt.
 *
 * @extends HTMLParagraphElement
 * @mixes BaseElementOfType
 */
export class VlIntroductionElement extends BaseElementOfType(HTMLParagraphElement) {
    connectedCallback() {
        this.classList.add('vl-introduction');
    }
}

define('vl-introduction', VlIntroductionElement, { extends: 'p' });
