import { breadcrumbStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('vl-breadcrumb')
export class VlBreadcrumbComponent extends LitElement {
    static get styles() {
        return [resetStyle, breadcrumbStyle];
    }

    firstUpdated() {
        const observer = new MutationObserver(() => {
            this.requestUpdate();
        });
        observer.observe(this, { subtree: true, childList: true });
    }

    render() {
        return html`
            <nav aria-label="U bent hier: " class="vl-breadcrumb">
                <ol class="vl-breadcrumb__list">
                    ${[...Array.from(this.children)].map((child, index) => {
                        const name = `item-${index}`;
                        child.setAttribute('slot', name);
                        return html`
                            <li class="vl-breadcrumb__list__item">
                                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                                <slot name=${name}></slot>
                            </li>
                        `;
                    })}
                </ol>
            </nav>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-breadcrumb': VlBreadcrumbComponent;
    }
}
