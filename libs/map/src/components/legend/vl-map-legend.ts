import { css, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { VlMap } from '../../vl-map';
import { VlMapWmsLayer } from '../layer/wms-layer/vl-map-wms-layer';
import { VlMapVectorLayer } from '../layer/vector-layer/vl-map-vector-layer';
import { VlMapWfsLayer } from '../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import { VlMapLayerCircleStyle } from '../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import styles from './vl-map-legend.uig-css';
import { BaseLitElement } from '@domg-wc/common-utilities';
import { VlMapLayer } from '../layer/vl-map-layer';
import { VlMapLayerStyle } from '../layer-style/vl-map-layer-style';
import { VlMapFeaturesLayer } from '../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';

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

export interface StyledItem {
    name: string;
    style: VlMapLayerStyle;
    url?: never;
}

export interface UrlItem {
    name: string;
    style?: never;
    url: URL;
}

export type Item = StyledItem | UrlItem;

export type GeometryLayer = VlMapWfsLayer | VlMapFeaturesLayer;

@customElement('vl-map-legend')
export class VlMapLegend extends BaseLitElement {
    top: string;
    left: string;
    right: string;
    bottom: string;
    private placement: string;
    private mapElement: VlMap;
    private items: Item[] = [];
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

    private getPosition(): Position {
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

        return {
            top: this.top ?? position.top,
            left: this.left ?? position.left,
            right: this.right ?? position.right,
            bottom: this.bottom ?? position.bottom,
        };
    }

    connectedCallback() {
        super.connectedCallback();
        this.mapElement = this.closest('vl-map') as VlMap;

        const imageLayers: VlMapWmsLayer[] = [].concat(this.mapElement.wmsLayers);
        const geometryLayers: GeometryLayer[] = [].concat(this.mapElement.featuresLayers, this.mapElement.wfsLayers);

        imageLayers.forEach((wmsLayer) => {
            wmsLayer &&
                this.items.push({
                    url: this.legendUrl(wmsLayer),
                    name: wmsLayer.dataset.vlName,
                });
        });

        geometryLayers.forEach((layer) => {
            layer.addEventListener(VlMapVectorLayer.EVENTS.styleChanged, () => {
                this.updateLegendGeometryItems(geometryLayers);
            });
        });
    }

    private legendUrl(wmsLayer: VlMapWmsLayer) {
        const layerUrl = new URL(wmsLayer.dataset.vlUrl);
        const legendSearchParams = new URLSearchParams({
            service: 'WMS',
            request: 'GetLegendGraphic',
            format: 'image/png',
            layer: wmsLayer.dataset.vlLayers,
            legend_options: 'layout:horizontal',
        });
        return new URL(`?${legendSearchParams}`, layerUrl);
    }

    private updateLegendGeometryItems(layers: VlMapLayer[]) {
        layers.forEach((layer) => {
            if (layer._styles.length === 1) {
                const style = layer._styles[0];

                if (!style.name) {
                    if (layer.name !== undefined && layer.name != null) {
                        this.items.push({ style: style, name: layer.name });
                    }
                } else {
                    this.items.push({ style: style, name: layer.name });
                }
            } else {
                const styleItems: Item[] =
                    layer._styles
                        ?.filter((style) => style.name)
                        ?.map((style) => ({ style: style, name: style.name })) || [];

                const imageItems = this.items.filter((item) => item.url);

                this.items = [...styleItems, ...imageItems];
            }
        });
        this.requestUpdate();
    }

    render() {
        if (!this.items) {
            return null;
        }

        return html` <div class="uig-map-legend" style="${this.generateItemStyle()}">
            <div>
                <span class="uig-map-legend-text uig-map-legend-title">Legende: </span>
            </div>
            ${this.items.map((item) => {
                if (item.style) {
                    return html` <div class="uig-map-legend-item">
                        <div class="uig-map-legend-icon" style="${this.generateIconStyle(item.style)}"></div>
                        <span class="uig-map-legend-text">${item.name}</span>
                    </div>`;
                } else {
                    return html`<div class="uig-map-legend-item uig-map-legend-image">
                        <img alt="map legend image" class="uig-map-legend-icon" src="${item.url}" />
                    </div>`;
                }
            })}
        </div>`;
    }

    private generateItemStyle() {
        const position = this.getPosition();
        return (
            (position.left ? `;left:${position.left}` : '') +
            (position.top ? `;top:${position.top}` : '') +
            (position.right ? `;right:${position.right}` : '') +
            (position.bottom ? `;bottom:${position.bottom}` : '')
        );
    }

    private generateIconStyle(item) {
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
