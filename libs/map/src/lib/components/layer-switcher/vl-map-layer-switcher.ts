import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseLitElement, awaitUntil } from '@domg-wc/common-utilities';
import mapLayerSwitcherUigStyle from './vl-map-layer-switcher.uig-css';
import { VlMapLayer } from '../layer/vl-map-layer';
import '@domg-wc/components';
import '@domg-wc/elements';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlMap } from '../../vl-map';

@customElement('vl-map-layer-switcher')
export class VlMapLayerSwitcher extends BaseLitElement {
    // Attributen
    private componentTitle = 'Kaartlagen';
    private layers: string[] | null = null;

    // Private properties
    private vlMapLayers: VlMapLayer[] = [];
    private mapElement: VlMap | null = null;
    private layerObserver: MutationObserver | null = null;

    static get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle, mapLayerSwitcherUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            // Gebruik 'componentTitle' omdat 'title' een native property is van HtmlElement.
            componentTitle: {
                type: String,
                attribute: 'data-vl-title',
                reflect: true,
            },
            layers: {
                type: Array,
                attribute: 'layers',
            },
            vlMapLayers: {
                // Voeg 'vlMapLayers' toe om de Lit lifecycle te triggeren als deze verandert.
                attribute: false,
            },
        };
    }

    async connectedCallback(): Promise<void> {
        super.connectedCallback();

        this.mapElement = this.closest('vl-map');
        await this.layersReady();
        this.vlMapLayers = this.getVlMapLayers();
        this.mapElement?.on('moveend', this.computeDisabledAttributes);

        if (!this.layers) {
            this.observeMapLayers();
        }
    }

    protected async willUpdate(changedProperties: Map<string, unknown>): Promise<void> {
        if (changedProperties.has('layers')) {
            await this.layersReady();
            this.vlMapLayers = this.getVlMapLayers();
        }
    }

    protected updated(): void {
        this.computeDisabledAttributes();
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.layerObserver?.disconnect();
        this.mapElement?.un('moveend', this.computeDisabledAttributes);
    }

    protected render(): TemplateResult {
        return html`
            <div>
                <label is="vl-form-label">${this.componentTitle}</label>
                ${this.vlMapLayers.map(
                    (layer) => html`
                        <vl-checkbox
                            data-vl-label=${layer.title}
                            data-vl-layer=${layer.title}
                            checked=${layer.visible}
                            @change=${() => (layer.visible = !layer.visible)}
                        ></vl-checkbox>
                    `
                )}
            </div>
        `;
    }

    private async layersReady(): Promise<void[]> {
        if (!this.mapElement) {
            return new Promise((_resolve, reject) => reject());
        }

        return Promise.all(this.mapElement?.nonBaseLayers.map((layer) => awaitUntil(() => layer.ready)));
    }

    private getVlMapLayers(): VlMapLayer[] {
        if (!this.layers || !Array.isArray(this.layers)) {
            return this.mapElement?.nonBaseLayers || [];
        }

        return this.mapElement?.nonBaseLayers.filter((layer) => this.layers?.includes(layer.name)) || [];
    }

    private computeDisabledAttributes = () => {
        const resolution = this.mapElement?.resolution;

        this.vlMapLayers.forEach((layer) => {
            const checkbox = this.shadowRoot?.querySelector(`vl-checkbox[data-vl-layer="${layer.title}"]`);

            if (!layer.isVisibleAtResolution(resolution)) {
                checkbox?.setAttribute('disabled', '');
            } else {
                checkbox?.removeAttribute('disabled');
            }
        });
    };

    private observeMapLayers() {
        this.layerObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement && node.hasAttribute('data-vl-is-layer')) {
                        this.vlMapLayers = [...this.vlMapLayers, node as unknown as VlMapLayer];
                    }
                });

                mutation.removedNodes.forEach((node) => {
                    if (node instanceof HTMLElement && node.hasAttribute('data-vl-is-layer')) {
                        this.vlMapLayers = this.vlMapLayers.filter(
                            (layer) => (node as unknown as VlMapLayer) !== layer
                        );
                    }
                });
            });
        });

        this.layerObserver.observe(this.mapElement as unknown as Node, { subtree: true, childList: true });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-layer-switcher': VlMapLayerSwitcher;
    }
}
