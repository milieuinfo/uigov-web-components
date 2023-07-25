import { BaseElementOfType, VL, webComponent } from '@domg-wc/common-utilities';
import './vl-form-group.element';

declare const vl: VL;

/**
 * VlForm
 * @class
 * @classdesc Formulier element.
 *
 * @extends HTMLElement
 *
 * @property {boolean} data-vl-validate - Attribuut wordt gebruikt om aan te geven dat de input velden validatie geactiveerd moet worden.
 */
@webComponent('vl-form', { extends: 'form' })
export class VlFormElement extends BaseElementOfType(HTMLFormElement) {
    private observer: MutationObserver | undefined;

    static get _observedAttributes() {
        return ['target', 'action', 'validate', 'native-validation'];
    }

    static get _targetElementName() {
        return 'hidden-form-target';
    }

    connectedCallback() {
        this._process();
        this._addClasses();
        this._observeAddedElements();
    }

    disconnectedCallback() {
        this.observer?.disconnect();
    }

    get _targetElement() {
        return this.querySelector(`iframe[name="${VlFormElement._targetElementName}"]`);
    }

    _getTargetElementTemplate() {
        return this._template(
            `<iframe name="${VlFormElement._targetElementName}" width="0" height="0" border="0" hidden></iframe>`
        );
    }

    _process() {
        const targetAttributeIsMissing = !this.hasAttribute('target');
        const actionAttributeIsMissing = !this.hasAttribute('action');
        if (targetAttributeIsMissing && actionAttributeIsMissing) {
            this._addTargetElement();
        }
        this._disableNativeValidation();
    }

    /**
     * this function creates a MutationObserver that will observe the elements added to the form
     * if it detects that a form validation element has been added, it'll undress & dress the form again
     */
    _observeAddedElements(): void {
        const vlFormElement = this as unknown as VlFormElement & Node;
        this.observer = new MutationObserver((mutations) => {
            const formElementSelector = 'input, textarea, select, [data-vl-error-placeholder]';
            const matchesSelector = (element: HTMLElement) =>
                element.matches(formElementSelector) || element.querySelector(formElementSelector);

            for (const mutation of mutations) {
                const { addedNodes, attributeName, target } = mutation;
                if (attributeName === 'name') {
                    if (target instanceof HTMLElement && matchesSelector(target)) {
                        // as every form element is identified with its name
                        // when we change it, we need to redress
                        vl.formValidation.undress(vlFormElement);
                        vl.formValidation.dress(vlFormElement);
                    }
                } else {
                    for (const node of addedNodes) {
                        if (!(node instanceof HTMLElement)) continue; // not an element so we exit loop here
                        // we look if the added element matches or contains a form element for which validation can happen
                        if (matchesSelector(node)) {
                            // in case a new formElement was added, we need to undress the form to avoid duplicate event listeners
                            // then dress the form again
                            vl.formValidation.undress(vlFormElement);
                            vl.formValidation.dress(vlFormElement);
                        }
                    }
                }
            }
        });
        this.observer.observe(vlFormElement, {
            attributes: true,
            childList: true,
            characterData: false,
            subtree: true,
        });
    }

    _addTargetElement() {
        this.setAttribute('target', VlFormElement._targetElementName);
        this.setAttribute('action', '');
        this.appendChild(this._getTargetElementTemplate());
    }

    _removeTargetElement() {
        this.removeAttribute('target');
        this._targetElement.remove();
    }

    _targetChangedCallback(oldValue: string, newValue: string) {
        if (newValue && newValue != VlFormElement._targetElementName && this._targetElement) {
            this._removeTargetElement();
        }
    }

    _actionChangedCallback(oldValue: string, newValue: string) {
        if (newValue && this._targetElement) {
            this._removeTargetElement();
        }
    }

    _validateChangedCallback(oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this.setAttribute('data-validate-form', '');
        } else {
            this.removeAttribute('data-validate-form');
        }
    }

    _disableNativeValidation() {
        const nativeValidationEnabled = this.getAttribute('data-vl-native-validation') !== null;
        if (!nativeValidationEnabled) {
            this.setAttribute('novalidate', '');
        }
    }

    _addClasses() {
        this.classList.add('vl-form');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form': VlFormElement;
    }
}
