import { Class, BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * Gebruik de form-annotation mixin in combinatie met HTML elementen.
 * @mixin vlFormAnnotationElement
 *
 * @param {Object} SuperClass - Class die als base class gebruikt zal worden.
 * @return {Object} class
 */
const baseFormAnnotationElement = (SuperClass: Class): Class => {
    return class extends BaseElementOfType(SuperClass) {
        static get _observedClassAttributes() {
            return ['block'];
        }

        connectedCallback() {
            this.classList.add('vl-form__annotation');
        }

        get _classPrefix() {
            return 'vl-form__annotation--';
        }
    };
};

/**
 * VlFormAnnotation
 * @class
 * @classdesc Gebruik de vl-form-annotation om invoerinstructies toe te voegen aan een formulier.
 *
 * @extends HTMLParagraphElement
 * @mixes baseFormAnnotationElement
 *
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 */
export class VlFormAnnotation extends baseFormAnnotationElement(HTMLParagraphElement) {}

define('vl-form-annotation', VlFormAnnotation, { extends: 'p' });

/**
 * VlFormAnnotation
 * @class
 * @classdesc Gebruik de vl-form-annotation om invoerinstructies toe te voegen aan een formulier.
 *
 * @extends HTMLParagraphElement
 * @mixes baseFormAnnotationElement
 *
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 */
export class VlFormAnnotationSpan extends baseFormAnnotationElement(HTMLSpanElement) {}

define('vl-form-annotation-span', VlFormAnnotationSpan, { extends: 'span' });
