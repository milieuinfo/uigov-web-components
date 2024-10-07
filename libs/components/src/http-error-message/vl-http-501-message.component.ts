import { BaseLitElement, registerWebComponents, webComponent } from '@domg-wc/common';
import { VlLinkButtonElement } from '@domg-wc/elements';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';
import { VlHttpErrorMessage } from './vl-http-error-message.component';

/**
 * @deprecated
 */
@webComponent('vl-http-501-message')
export class VlHttp501Message extends BaseLitElement {
    static {
        registerWebComponents([VlHttpErrorMessage, VlLinkButtonElement]);
    }

    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`<vl-http-error-message data-vl-error-code="501"> </vl-http-error-message> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-http-501-message': VlHttp501Message;
    }
}
