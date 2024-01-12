import { BaseLitElement, registerWebComponents, webComponent } from '@domg-wc/common-utilities';
import { VlLinkButtonElement } from '@domg-wc/elements';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html, TemplateResult } from 'lit';
import { VlHttpErrorMessage } from './vl-http-error-message.component';

/**
 * @deprecated
 */
@webComponent('vl-http-506-message')
export class VlHttp506Message extends BaseLitElement {
    static {
        registerWebComponents([VlHttpErrorMessage, VlLinkButtonElement]);
    }

    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    protected render(): TemplateResult {
        return html`<vl-http-error-message data-vl-error-code="506"> </vl-http-error-message> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-http-506-message': VlHttp506Message;
    }
}
