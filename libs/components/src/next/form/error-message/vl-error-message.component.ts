import { customElement } from 'lit/decorators.js';
import { BaseLitElement } from '@domg-wc/common-utilities';
import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import { formMessageStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';

export const ERROR_MESSAGE_CUSTOM_TAG = 'vl-error-message-next';

export const ErrorMessageDefaults = {
    input: '',
    state: null,
    show: false,
};

@customElement(ERROR_MESSAGE_CUSTOM_TAG)
export class VlErrorMessageComponent extends BaseLitElement {
    input = ErrorMessageDefaults.input;
    state: keyof ValidityState | null = ErrorMessageDefaults.state;
    show = ErrorMessageDefaults.show;

    static get styles(): CSSResult[] {
        return [resetStyle, formMessageStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            input: { type: String, reflect: false },
            state: { type: String, reflect: false },
            show: { type: Boolean, reflect: true },
        };
    }

    render(): TemplateResult {
        return html` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        ERROR_MESSAGE_CUSTOM_TAG: VlErrorMessageComponent;
    }
}
