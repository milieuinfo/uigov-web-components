import { customElement } from 'lit/decorators.js';
import { BaseLitElement } from '@domg-wc/common-utilities';
import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import { formMessageStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';

export const ERROR_MESSAGE_CUSTOM_TAG = 'vl-error-message-next';

@customElement(ERROR_MESSAGE_CUSTOM_TAG)
export class VlErrorMessageComponent extends BaseLitElement {
    inputId = '';
    state = '';
    show = false;

    static get styles(): CSSResult[] {
        return [resetStyle, formMessageStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            inputId: { type: String, attribute: 'input-id', reflect: true },
            state: { type: String, reflect: true },
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
