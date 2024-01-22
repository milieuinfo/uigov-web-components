import { PropertyDeclarations } from 'lit';
import { customElement } from 'lit/decorators.js';
import Cleave from 'cleave.js';
import { masks } from './masks';
import { VlInputFieldComponent, InputFieldDefaults } from '../input-field/vl-input-field.component';
import { CleaveInstance, MaskOptions } from './vl-input-field-masked.model';
import { Validator } from '@open-wc/form-control';

const maskValidator: Validator = {
    key: 'patternMismatch',
    message(): string {
        return `Value does not meet the given mask pattern.`;
    },
    isValid(
        instance: HTMLElement & {
            disableValidation: boolean;
            validationRegex: RegExp;
            maskOptions: MaskOptions;
            cleaveInstance: CleaveInstance;
        },
        value: string
    ): boolean {
        const { disableValidation } = instance;
        const validationRegex = instance.validationRegex || instance.maskOptions?.validationRegex;
        const cleaveInstance = instance.cleaveInstance;

        if (disableValidation || !value || !validationRegex || !cleaveInstance) {
            return true;
        }

        const rawValue = cleaveInstance.getRawValue();
        const regExp = new RegExp(validationRegex);

        return !!regExp.exec(rawValue);
    },
};

export const InputFieldMaskedDefaults = {
    ...InputFieldDefaults,
    mask: '',
    maskPrefix: '',
    rawValue: false,
    disableValidation: false,
    validationRegex: null,
};

@customElement('vl-input-field-masked-next')
export class VlInputFieldMaskedComponent extends VlInputFieldComponent {
    // Properties
    private mask = InputFieldMaskedDefaults.mask;
    private maskPrefix = InputFieldMaskedDefaults.maskPrefix;
    private rawValue = InputFieldMaskedDefaults.rawValue;
    // Ongebruikt in dit component, maar wel nodig voor de maskValidator.
    private disableValidation = InputFieldMaskedDefaults.disableValidation;
    private validationRegex: RegExp | null = InputFieldMaskedDefaults.validationRegex;

    // Variables
    private maskOptions: MaskOptions | null = null;
    private cleaveInstance: CleaveInstance | null = null;

    static formControlValidators = [...VlInputFieldComponent.formControlValidators, maskValidator];

    static get properties(): PropertyDeclarations {
        return {
            mask: { type: String },
            maskPrefix: { type: String, attribute: 'mask-prefix' },
            rawValue: { type: Boolean, attribute: 'raw-value' },
            disableValidation: { type: Boolean, attribute: 'disable-validation' },
            validationRegex: { type: Object },
        };
    }

    firstUpdated(changedProperties: Map<string, unknown>) {
        super.firstUpdated(changedProperties);

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

        this.cleaveInstance = new Cleave(this.validationTarget!, this.maskOptions);
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        if (changedProperties.has('value') || changedProperties.has('rawValue')) {
            if (this.value === this.maskOptions?.prefix || this.getRawValue() === this.maskOptions?.prefix) {
                // Zet de ElementInternals value op een lege string indien enkel de prefix overschiet.
                // Dit zorgt ervoor dat de mask validatie niet inkicked als de gebruiker geen waarde heeft ingevuld.
                this.setValue('');
            } else {
                const value = this.rawValue ? this.getRawValue() : this.value;
                this.setValue(value || '');
            }
        }
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

            if (transformedValue !== value) {
                this.value = transformedValue;
                this.requestUpdate();
                return;
            }

            this.value = value;
            this.dispatchEvent(
                new CustomEvent('vl-input', { composed: true, bubbles: true, detail: { value: this.value } })
            );
        }, 0);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field-masked-next': VlInputFieldMaskedComponent;
    }
}
