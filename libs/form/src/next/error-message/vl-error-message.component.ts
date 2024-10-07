import { BaseLitElement, webComponent } from '@domg-wc/common';
import { resetStyle } from '@domg/govflanders-style/common';
import { formMessageStyle } from '@domg/govflanders-style/component';
import { CSSResult, html, PropertyDeclarations, TemplateResult } from 'lit';
import { errorMessageDefaults } from './vl-error-message.defaults';
import errorMessageUigStyle from './vl-error-message.uig-css';

export const ERROR_MESSAGE_CUSTOM_TAG = 'vl-error-message-next';

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
        return html`
            <p class="vl-form__error" ?hidden=${!this.show}>
                <slot></slot>
            </p>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        ERROR_MESSAGE_CUSTOM_TAG: VlErrorMessageComponent;
    }
}
