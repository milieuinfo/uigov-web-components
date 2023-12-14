import { html, PropertyDeclarations, TemplateResult, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseLitElement } from '@domg-wc/common-utilities';
import legendStyles from '../legend/vl-map-legend.uig-css';

@customElement('vl-map-legend-item')
export class VlMapLegendItem extends BaseLitElement {
    icon = null;
    label = '';
    layer = '';

    static get styles(): (CSSResult | CSSResult[])[] {
        return legendStyles;
    }

    static get properties(): PropertyDeclarations {
        return {
            layer: { type: String, attribute: 'data-vl-layer', reflect: true },
        };
    }

    protected render(): TemplateResult {
        return html`
            <div id="legend-item" class="uig-map-legend-item">
                <div class="uig-map-legend-icon-container">
                    ${this.icon}
                    <slot name="icon"></slot>
                </div>
                <span id="label" class="uig-map-legend-text">
                    ${this.label}
                    <slot name="label"></slot>
                </span>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-legend-item': VlMapLegendItem;
    }
}
