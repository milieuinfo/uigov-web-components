import { BaseLitElement, webComponent } from '@domg-wc/common-utilities';
import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import { formMessageStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';
import errorMessageUigStyle from './vl-error-message.uig-css';

export const ERROR_MESSAGE_CUSTOM_TAG = 'vl-error-message-next';

export const errorMessageDefaults = {
    show: false as boolean,
    for: null as string | null,
    state: null as keyof ValidityState | null,
} as const;

@webComponent(ERROR_MESSAGE_CUSTOM_TAG)
export class VlErrorMessageComponent extends BaseLitElement {
    // Attributes
    private show = errorMessageDefaults.show;
    private for = errorMessageDefaults.for; // Wordt enkel gebruikt in de form-control basis klasse
    private state = errorMessageDefaults.state; // Wordt enkel gebruikt in de form-control basis klasse

    static get styles(): CSSResult[] {
        return [resetStyle, formMessageStyle, errorMessageUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            show: { type: Boolean, reflect: true },
            for: { type: String },
            state: { type: String },
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
