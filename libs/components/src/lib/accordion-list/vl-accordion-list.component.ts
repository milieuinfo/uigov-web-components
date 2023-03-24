import { html, LitElement, TemplateResult, PropertyDeclarations, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { accordionStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';
import 'reflect-metadata';

@customElement('vl-accordion-list')
export class VlAccordionListComponent extends LitElement {
    private bordered = false;
    private observer: MutationObserver | null = null;

    static get properties(): PropertyDeclarations {
        return {
            bordered: {
                type: Boolean,
                attribute: 'data-vl-bordered',
                reflect: true,
            },
        };
    }

    static get styles(): CSSResult[] {
        return [resetStyle, accordionStyle];
    }

    protected firstUpdated(): void {
        this.observer = new MutationObserver(() => {
            // Re-render het component als er children worden toegevoegd of verwijderd.
            this.requestUpdate();
        });
        this.observer.observe(this, { subtree: true, childList: true });
    }

    disconnectedCallback(): void {
        this.observer?.disconnect();
    }

    protected render(): TemplateResult {
        return html`
            <ul class="vl-accordion-list ${this.bordered ? 'vl-accordion-list--bordered' : ''}">
                ${[...Array.from(this.children)].map((child, index) => {
                    const name = `item-${index}`;
                    child.setAttribute('slot', name);
                    return html`
                        <li class="vl-accordion-list__item">
                            <slot name="${name}"> </slot>
                        </li>
                    `;
                })}
            </ul>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-accordion-list': VlAccordionListComponent;
    }
}
