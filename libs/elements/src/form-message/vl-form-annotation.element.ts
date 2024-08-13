import { BaseElementOfType, Class, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

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

@elementStyles()
@webComponent('vl-form-annotation', { extends: 'p' })
export class VlFormAnnotation extends baseFormAnnotationElement(HTMLParagraphElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-annotation': VlFormAnnotation;
    }
}

@elementStyles()
@webComponent('vl-form-annotation-span', { extends: 'span' })
export class VlFormAnnotationSpan extends baseFormAnnotationElement(HTMLSpanElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-annotation-span': VlFormAnnotationSpan;
    }
}
