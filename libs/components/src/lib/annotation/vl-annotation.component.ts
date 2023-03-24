import { annotationStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('vl-annotation')
export class VlAnnotation extends LitElement {
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
