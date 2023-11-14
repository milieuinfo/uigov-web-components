import { PropertyDeclarations } from 'lit';
import {
    FormControlMixin,
    maxLengthValidator,
    minLengthValidator,
    patternValidator,
    requiredValidator,
} from '@open-wc/form-control';
import { LitElement } from 'lit';
import { submit } from '@open-wc/form-helpers';
import { maxValueValidator, minValueValidator } from './validators';
import { ERROR_MESSAGE_CUSTOM_TAG } from '../error-message/vl-error-message.component';
import { BaseLitElement } from '@domg-wc/common-utilities';

export abstract class FormControl extends FormControlMixin(BaseLitElement) {
    id = '';
    protected name = '';
    protected label = '';
    protected block = false;
    protected required = false;
    protected disabled = false;
    protected error = false;
    protected isInvalid = false;

    static formControlValidators = [
        requiredValidator,
        minLengthValidator,
        maxLengthValidator,
        minValueValidator,
        maxValueValidator,
        patternValidator,
    ];

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    static get properties(): PropertyDeclarations {
        return {
            id: { type: String, reflect: true },
            name: { type: String, reflect: true },
            label: { type: String, reflect: true },
            block: { type: Boolean, reflect: true },
            required: { type: Boolean, reflect: true },
            disabled: { type: Boolean, reflect: true },
            error: { type: Boolean, reflect: true },
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

    private onKeydown = (event: KeyboardEvent): void => {
        if (event.code === 'Enter') {
            if (this.form) {
                submit(this.form);
            }
        }
    };

    private onInvalid = (event: Event): void => {
        event.preventDefault();

        this.isInvalid = true;
        this.focusFirstInvalidInput();
        this.showErrorMessage();
    };

    private focusFirstInvalidInput(): void {
        const firstInvalidInput = this.form.querySelector(':invalid');

        if (this === firstInvalidInput) {
            (firstInvalidInput as HTMLElement)?.focus();
            (firstInvalidInput as HTMLElement)?.scrollIntoView();
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
        let errorMessage = this.form.querySelector(
            `${ERROR_MESSAGE_CUSTOM_TAG}[input="${this.id}"][state="${errorState}"]`
        );

        // Als er geen error message is voor de huidige error state, zoek dan de algemene error message
        if (!errorMessage) {
            errorMessage = this.form.querySelector(`${ERROR_MESSAGE_CUSTOM_TAG}[input="${this.id}"]`);
        }

        errorMessage?.setAttribute('show', 'true');
    }

    private hideErrorMessages(): void {
        const errorMessages = this.form?.querySelectorAll(`${ERROR_MESSAGE_CUSTOM_TAG}[input="${this.id}"]`);

        errorMessages?.forEach((errorMessage) => {
            errorMessage.removeAttribute('show');
        });
    }
}
