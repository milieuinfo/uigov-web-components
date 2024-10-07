import { BaseLitElement, registerWebComponents, webComponent } from '@domg-wc/common';
import { VlLinkButtonElement } from '@domg-wc/elements';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';
import { VlHttpErrorMessage } from './vl-http-error-message.component';

/**
 * @deprecated
 */
@webComponent('vl-http-400-message')
export class VlHttp400Message extends BaseLitElement {
    static {
        registerWebComponents([VlHttpErrorMessage, VlLinkButtonElement]);
    }

    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`<vl-http-error-message data-vl-error-code="400"> </vl-http-error-message> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-http-400-message': VlHttp400Message;
    }
}
