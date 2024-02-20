import { customElement, property } from 'lit/decorators.js';
import { BaseLitElement } from '@domg-wc/common-utilities';
import { CSSResult, TemplateResult, html } from 'lit';
import { formMessageStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';

export const ERROR_MESSAGE_CUSTOM_TAG = 'vl-error-message-next';

export const errorMessageDefaults = {
    for: '' as string,
    state: null as keyof ValidityState | null,
    show: false as boolean,
} as const;

@customElement(ERROR_MESSAGE_CUSTOM_TAG)
export class VlErrorMessageComponent extends BaseLitElement {
    // Properties
    @property({ type: String })
    accessor for = errorMessageDefaults.for;

    @property({ type: String })
    accessor state = errorMessageDefaults.state;

    @property({ type: Boolean, reflect: true })
    accessor show = errorMessageDefaults.show;

    static get styles(): CSSResult[] {
        return [resetStyle, formMessageStyle];
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
