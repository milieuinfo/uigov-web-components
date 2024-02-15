import { PropertyDeclarations } from 'lit';
import Cleave from 'cleave.js';
import { masks } from './masks';
import { VlInputFieldComponent, inputFieldDefaults } from '../input-field/vl-input-field.component';
import { CleaveInstance, MaskOptions } from './vl-input-field-masked.model';
import { webComponent } from '@domg-wc/common-utilities';
import { maskValidator, minValueValidator, maxValueValidator } from './validators';

export const inputFieldMaskedDefaults = {
    ...inputFieldDefaults,
    mask: '' as string,
    maskPrefix: '' as string,
    rawValue: false as boolean,
    disableMaskValidation: false as boolean,
} as const;

@webComponent('vl-input-field-masked-next')
export class VlInputFieldMaskedComponent extends VlInputFieldComponent {
    // Attributes
    private mask = inputFieldMaskedDefaults.mask;
    private maskPrefix = inputFieldMaskedDefaults.maskPrefix;
    private rawValue = inputFieldMaskedDefaults.rawValue;
    private disableMaskValidation = inputFieldMaskedDefaults.disableMaskValidation; // Wordt enkel gebruikt in de mask validator

    // Variables
    private maskOptions: MaskOptions | null = null;
    private cleaveInstance: CleaveInstance | null = null;

    static formControlValidators = [
        ...VlInputFieldComponent.formControlValidators,
        maskValidator,
        minValueValidator,
        maxValueValidator,
    ];

    static get properties(): PropertyDeclarations {
        return {
            mask: { type: String },
            maskPrefix: { type: String, attribute: 'mask-prefix' },
            rawValue: { type: Boolean, attribute: 'raw-value' },
            disableMaskValidation: { type: Boolean, attribute: 'disable-mask-validation' },
        };
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.maskOptions = { ...masks[this.mask] };

        if (!this.maskOptions) {
            return;
        }

        if (this.maskPrefix) {
            this.maskOptions.prefix = this.maskPrefix;
        }

        if (!this.value.startsWith(this.maskOptions.prefix || '')) {
            this.value = this.maskOptions.prefix + this.value;
        }
    }

    firstUpdated(changedProperties: Map<string, unknown>) {
        super.firstUpdated(changedProperties);

        if (!this.maskOptions) {
            return;
        }

        this.cleaveInstance = new Cleave(this.validationTarget!, this.maskOptions);
    }

    resetFormControl() {
        super.resetFormControl();

        if (!this.initialValue.startsWith(this.maskOptions?.prefix || '')) {
            this.value = this.maskOptions?.prefix + this.initialValue;
        } else {
            this.value = this.initialValue;
        }
    }

    getRawValue(): string | undefined {
        return this.cleaveInstance?.getRawValue();
    }

    protected onInput() {
        // Gewrapped in een setTimeout zodat Cleave.js de input value al getransformeerd heeft.
        setTimeout(() => {
            const value = this.validationTarget!.value;
            const customTransformFn = this.maskOptions?.customTransformFn;
            const transformedValue = customTransformFn ? customTransformFn(value) : value;

            if (this.value === transformedValue) {
                // Request een update zodat de waarde van de input teruggezet wordt naar de vorige waarde.
                this.requestUpdate();
                return;
            }

            this.value = transformedValue;
        }, 0);
    }

    protected onUpdated(changedProperties: Map<string, unknown>) {
        if (changedProperties.has('value') || changedProperties.has('rawValue')) {
            let value = this.rawValue ? this.getRawValue() || '' : this.value;

            if (this.value === this.maskOptions?.prefix || this.getRawValue() === this.maskOptions?.prefix) {
                // Zet de ElementInternals value op een lege string indien enkel de prefix overschiet.
                // Dit zorgt ervoor dat de required validator kan inkicken als de gebruiker geen waarde heeft ingevuld.
                value = '';
            }

            const detail = { value };

            this.setValue(value);
            this.dispatchEvent(new CustomEvent('vl-input', { composed: true, bubbles: true, detail }));
            this.dispatchEventIfValid(detail);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field-masked-next': VlInputFieldMaskedComponent;
    }
}
