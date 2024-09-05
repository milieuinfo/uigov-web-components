import { webComponent } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { radioStyle } from '@domg/govflanders-style/component';
import { CSSResult, html, PropertyDeclarations, PropertyValues, TemplateResult } from 'lit';
import { FormControl } from '../form-control/form-control';
import { radioGroupDefaults } from './vl-radio-group.defaults';
import { VlRadioComponent } from './vl-radio.component';
import radioUigStyle from './vl-radio.component.uig-css';

@webComponent('vl-radio-group-next')
export class VlRadioGroupComponent extends FormControl {
    // Attributes
    private readonly = radioGroupDefaults.readonly;
    private value: string | null = radioGroupDefaults.value;

    // Variables
    private initialValue: string | null = null;

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, baseStyle, vlElementsStyle, radioStyle, radioUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            readonly: { type: Boolean },
            value: { type: String, reflect: true },
            block: { type: Boolean },
        };
    }

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener('vl-checked', this.updateGroupAfterCheck);
        this.addEventListener('keydown', this.handleKeyDown);
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);

        if (!this.initialValue) {
            this.initialValue = this.value;
        }
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        if (changedProperties.has('value')) {
            this.setValue(this.value);
            this.checkRadioForValue(this.value);
        }

        if (changedProperties.has('name')) {
            this.updateRadiosForAttribute('name');
        }

        if (changedProperties.has('block')) {
            this.updateRadiosForAttribute('block');
        }

        if (changedProperties.has('readonly')) {
            this.updateRadiosForAttribute('readonly');
            this.preventDefaultEventOnAllInputsOfAllRadio(this.readonly);
        }

        if (changedProperties.has('disabled')) {
            this.updateRadiosForAttribute('disabled');
        }

        if (changedProperties.has('error')) {
            this.updateRadiosForAttribute('error');
        }

        if (changedProperties.has('isInvalid')) {
            this.getRadios()?.forEach((radio) => {
                if (this.isInvalid) {
                    radio.setAttribute('error', '');
                    radio.setAttribute('aria-invalid', 'true');
                } else {
                    radio.removeAttribute('error');
                    radio.removeAttribute('aria-invalid');
                }
            });
        }

        if (changedProperties.has('success')) {
            this.updateRadiosForAttribute('success');
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener('vl-checked', this.updateGroupAfterCheck);
    }

    render(): TemplateResult {
        return html`
            <fieldset>
                <legend class="vl-u-visually-hidden">${this.label}</legend>
                <slot></slot>
            </fieldset>
        `;
    }

    resetFormControl() {
        super.resetFormControl();

        this.resetAllRadios();
        this.resetToInitialValue();
    }

    get validationTarget(): HTMLInputElement | undefined | null {
        const firstRadio = this.getRadios()[0];
        return firstRadio ? firstRadio.validationTarget : null;
    }

    private resetToInitialValue() {
        this.setValue(this.initialValue);
        this.checkRadioForValue(this.initialValue);
        this.value = this.initialValue;
    }

    private checkRadioForValue(value: string | null) {
        this.getRadios()?.forEach((radio) => {
            if (value && radio.getAttribute('value') === value) {
                radio.setAttribute('checked', '');
            } else {
                radio.removeAttribute('checked');
            }
        });
    }

    private resetAllRadios() {
        this.getRadios()?.forEach((radio) => {
            radio.removeAttribute('checked');
        });
    }

    private preventDefaultAndFocus = (event: Event) => {
        const targetElement = event.target as VlRadioComponent;
        targetElement?.validationTarget?.focus();
        event.preventDefault();
    };

    private preventDefaultEventOnAllInputsOfAllRadio(readonly: boolean) {
        this.getRadios()?.forEach((radio) => {
            if (readonly) {
                radio.addEventListener('click', this.preventDefaultAndFocus);
            } else {
                radio.removeEventListener('click', this.preventDefaultAndFocus);
            }
        });
    }

    private updateRadiosForAttribute(attribute: string) {
        const attributeKey = attribute as unknown as keyof VlRadioGroupComponent;
        this.getRadios()?.forEach((radio) =>
            this[attributeKey] ? radio.setAttribute(attribute, '') : radio.removeAttribute(attribute)
        );
    }

    private getRadios(): VlRadioComponent[] {
        return Array.from(this.querySelectorAll<VlRadioComponent>('vl-radio-next'));
    }

    private checkSelectedRadio(selectedRadio: VlRadioComponent) {
        this.getRadios()?.forEach((radio) => {
            const value = radio.getAttribute('value');
            if (radio !== selectedRadio) {
                radio.removeAttribute('checked');
            } else {
                if (!radio.hasAttribute('checked')) radio.setAttribute('checked', '');
                this.value = value;
                this.setValue(value);
            }
        });
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        const arrows = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
        if (arrows.includes(event.code)) {
            event.preventDefault(); // Voorkom dat de pagina scrollt
            this.navigateRadioButtons(event.code);
        }
        if (event.code === 'Space') {
            const focusedRadio = this.getRadios()?.find((radio) => radio === document.activeElement);
            if (focusedRadio && !focusedRadio.hasAttribute('checked')) this.checkSelectedRadio(focusedRadio);
        }
    };

    private navigateRadioButtons(direction: string) {
        const radios = this.getRadios();
        const currentIndex = radios.findIndex((radio) => radio.hasAttribute('checked'));
        let newIndex;

        if (direction === 'ArrowLeft' || direction === 'ArrowUp') {
            newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = radios.length - 1;
        } else if (direction === 'ArrowRight' || direction === 'ArrowDown') {
            newIndex = currentIndex + 1;
            if (newIndex >= radios.length) newIndex = 0;
        }

        this.checkSelectedRadio(radios[newIndex!]);
        radios[newIndex!].focus();
    }

    private updateGroupAfterCheck(event: Event) {
        const targetElement = event.target as VlRadioComponent;
        this.checkSelectedRadio(targetElement);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-radio-group-next': VlRadioGroupComponent;
    }
}
