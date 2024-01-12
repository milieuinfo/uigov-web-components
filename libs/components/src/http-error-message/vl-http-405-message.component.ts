import { BaseLitElement, registerWebComponents, webComponent } from '@domg-wc/common-utilities';
import { VlLinkButtonElement } from '@domg-wc/elements';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html } from 'lit';
import { VlHttpErrorMessage } from './vl-http-error-message.component';

/**
 * @deprecated
 */
@webComponent('vl-http-405-message')
export class VlHttp405Message extends BaseLitElement {
    static {
        registerWebComponents([VlHttpErrorMessage, VlLinkButtonElement]);
    }

    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`<vl-http-error-message data-vl-error-code="405"> </vl-http-error-message> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-http-405-message': VlHttp405Message;
    }
}
