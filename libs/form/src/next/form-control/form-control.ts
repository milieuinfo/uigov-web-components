import {
    FormControlMixin,
    maxLengthValidator,
    minLengthValidator,
    programmaticValidator,
    requiredValidator,
} from '@open-wc/form-control';
import { LitElement, PropertyDeclarations } from 'lit';
import { submit } from '@open-wc/form-helpers';
import { ERROR_MESSAGE_CUSTOM_TAG } from '../error-message/vl-error-message.component';
import { BaseLitElement } from '@domg-wc/common-utilities';
import 'reflect-metadata';

export const FormControlDefaults = {
    id: '',
    name: '',
    label: '',
    required: false,
    disabled: false,
    error: false,
    success: false,
};

export abstract class FormControl extends FormControlMixin(BaseLitElement) {
    // Properties
    id = FormControlDefaults.id;
    protected name = FormControlDefaults.name;
    protected label = FormControlDefaults.label;
    protected required = FormControlDefaults.required;
    protected disabled = FormControlDefaults.disabled;
    protected error = FormControlDefaults.error;
    protected success = FormControlDefaults.success;

    // State
    protected isInvalid = false;

    static formControlValidators = [requiredValidator, minLengthValidator, maxLengthValidator, programmaticValidator];

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    static get properties(): PropertyDeclarations {
        return {
            id: { type: String },
            name: { type: String },
            label: { type: String },
            required: { type: Boolean },
            disabled: { type: Boolean },
            error: { type: Boolean },
            success: { type: Boolean },
            isInvalid: { type: Boolean, state: true },
        };
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.addEventListener('keydown', this.onKeydown);
        this.addEventListener('invalid', this.onInvalid);

        if (!this.label) {
            this.label = this.internals.labels[0]?.innerText || '';
        }
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.removeEventListener('keydown', this.onKeydown);
        this.removeEventListener('invalid', this.onInvalid);
    }

    updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        if (!changedProperties.has('isInvalid')) {
            this.isInvalid = false;
            this.hideErrorMessages();
        }
    }

    abstract get validationTarget(): HTMLElement | undefined | null;

    resetFormControl(): void {
        this.isInvalid = false;
        this.hideErrorMessages();
        this.dispatchEvent(new Event('reset'));
    }

    private onKeydown(event: KeyboardEvent): void {
        if (event.code === 'Enter') {
            if (this.form) {
                submit(this.form);
            }
        }
    }

    private onInvalid(event: Event): void {
        event.preventDefault();

        this.isInvalid = true;
        this.focusFirstInvalidInput();
        this.showErrorMessage();
    }

    private focusFirstInvalidInput(): void {
        const firstInvalidInput = this.form?.querySelector(':invalid');

        if (this === firstInvalidInput) {
            (firstInvalidInput as HTMLElement)?.focus();
            (firstInvalidInput as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    private showErrorMessage(): void {
        let errorState = '';

        for (const key in this.validity) {
            if (this.validity[key as keyof ValidityState]) {
                errorState = key;
                break;
            }
        }

        // Zoek de error message die bij de huidige error state hoort
        let errorMessage = this.form?.querySelector(
            `${ERROR_MESSAGE_CUSTOM_TAG}[for="${this.id}"][state="${errorState}"]`
        );

        // Als er geen error message is voor de huidige error state, zoek dan de algemene error message
        if (!errorMessage) {
            errorMessage = this.form?.querySelector(`${ERROR_MESSAGE_CUSTOM_TAG}[for="${this.id}"]`);
        }

        errorMessage?.setAttribute('show', 'true');
    }

    private hideErrorMessages(): void {
        const errorMessages = this.form?.querySelectorAll(`${ERROR_MESSAGE_CUSTOM_TAG}[for="${this.id}"]`);

        errorMessages?.forEach((errorMessage) => {
            errorMessage.removeAttribute('show');
        });
    }
}
