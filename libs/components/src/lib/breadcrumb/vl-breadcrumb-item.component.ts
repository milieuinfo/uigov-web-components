import { breadcrumbStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('vl-breadcrumb-item')
export class VlBreadcrumbItemComponent extends LitElement {
    private href = '';

    static get properties() {
        return {
            href: { type: String, attribute: 'data-vl-href', reflect: true },
        };
    }

    static get styles() {
        return [resetStyle, breadcrumbStyle];
    }

    render() {
        return html`
            <a href=${this.href} class="vl-breadcrumb__list__item__cta">
                <slot></slot>
            </a>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-breadcrumb-item': VlBreadcrumbItemComponent;
    }
}
