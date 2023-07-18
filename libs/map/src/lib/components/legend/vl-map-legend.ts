import { css, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { VlMapLayerCircleStyle } from '../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import { VlMapVectorLayer } from '../layer/vector-layer/vl-map-vector-layer';
import styles from './vl-map-legend.uig-css';
import { BaseLitElement } from '@domg-wc/common-utilities';

export const LEGEND_PLACEMENT = {
    TOP_LEFT: 'top_left',
    TOP_RIGHT: 'top_right',
    BOTTOM_LEFT: 'bottom_left',
    BOTTOM_RIGHT: 'bottom_right',
};

export interface Position {
    top: string;
    left: string;
    right: string;
    bottom: string;
}

@customElement('vl-map-legend')
export class VlMapLegend extends BaseLitElement {
    top: string;
    left: string;
    right: string;
    bottom: string;
    private placement: string;
    private _mapElement: any;
    private items: any[];
    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    constructor() {
        super();
        this.placement = LEGEND_PLACEMENT.BOTTOM_RIGHT;
    }

    static get properties() {
        // TODO: Aligneer deze attributen (missen data-vl- prefix)
        return {
            left: { type: String, reflect: true },
            top: { type: String, reflect: true },
            right: { type: String, reflect: true },
            bottom: { type: String, reflect: true },
            placement: {
                type: String,
                attribute: 'data-vl-placement',
                reflect: true,
            },
        };
    }

    __getPosition() {
        const position: Position = <Position>{};

        switch (this.placement) {
            case LEGEND_PLACEMENT.TOP_LEFT:
                position.top = '10px';
                position.left = '10px';
                position.right = undefined;
                position.bottom = undefined;
                break;
            case LEGEND_PLACEMENT.TOP_RIGHT:
                position.top = '10px';
                position.left = undefined;
                position.right = '10px';
                position.bottom = undefined;
                break;
            case LEGEND_PLACEMENT.BOTTOM_LEFT:
                position.top = undefined;
                position.left = '8px';
                position.right = undefined;
                position.bottom = '40px';
                break;
            case LEGEND_PLACEMENT.BOTTOM_RIGHT:
                position.top = undefined;
                position.left = undefined;
                position.right = '58px';
                position.bottom = '10px';
                break;
            default:
                break;
        }

        if (this.top) {
            position.top = this.top;
        }
        if (this.left) {
            position.left = this.left;
        }
        if (this.right) {
            position.right = this.right;
        }
        if (this.bottom) {
            position.bottom = this.bottom;
        }

        return position;
    }

    connectedCallback() {
        super.connectedCallback();
        this._mapElement = this.closest('vl-map');

        const layers = [].concat(this._mapElement.featuresLayers, this._mapElement.wfsLayers);

        layers.forEach((layer) => {
            layer.addEventListener(VlMapVectorLayer.EVENTS.styleChanged, () => {
                this._updateLegendItems(layers);
            });
        });
    }

    _updateLegendItems(layers) {
        this.items = [];
        layers.forEach((layer) => {
            if (layer._styles.length === 1) {
                const style = layer._styles[0];

                if (!style.name) {
                    if (layer.name !== undefined && layer.name != null) {
                        this.items.push(this.__createItem(style, layer.name));
                    }
                } else {
                    this.items.push(this.__createItem(style, style.name));
                }
            } else {
                this.items = layer._styles
                    .filter((style) => style.name)
                    .map((style) => this.__createItem(style, style.name));
            }
        });
        this.requestUpdate();
    }

    __createItem(style, name) {
        return { style, name };
    }

    render() {
        if (!this.items) {
            return null;
        }

        return html` <div class="uig-map-legend" style="${this.__generateItemStyle()}">
            <div>
                <span class="uig-map-legend-text uig-map-legend-title">Legende: </span>
            </div>
            ${this.items.map(
                (item) => html` <div class="uig-map-legend-item">
                    <div class="uig-map-legend-icon" style="${this.__generateIconStyle(item.style)}"></div>
                    <span class="uig-map-legend-text">${item.name}</span>
                </div>`
            )}
        </div>`;
    }

    __generateItemStyle() {
        const position = this.__getPosition();
        return (
            (position.left ? `;left:${position.left}` : '') +
            (position.top ? `;top:${position.top}` : '') +
            (position.right ? `;right:${position.right}` : '') +
            (position.bottom ? `;bottom:${position.bottom}` : '')
        );
    }

    __generateIconStyle(item) {
        let borderRadius = ``;
        if (item instanceof VlMapLayerCircleStyle) {
            borderRadius = 'border-radius: 50%;';
        }

        return `border: ${item.borderSize}px solid ${item.borderColor}; background-color:${item.color};${borderRadius}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-legend': VlMapLegend;
    }
}
