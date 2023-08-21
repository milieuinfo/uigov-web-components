import { annotationStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseLitElement } from '@domg-wc/common-utilities';

@customElement('vl-annotation')
export class VlAnnotation extends BaseLitElement {
    static get styles() {
        return [resetStyle, annotationStyle];
    }

    private small = false;

    static get properties() {
        return {
            small: {
                type: Boolean,
                attribute: 'data-vl-small',
                reflect: true,
            },
        };
    }

    render() {
        return html`<span class="vl-annotation ${this.small ? 'vl-annotation--small' : ''}"><slot></slot></span>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-annotation': VlAnnotation;
    }
}
