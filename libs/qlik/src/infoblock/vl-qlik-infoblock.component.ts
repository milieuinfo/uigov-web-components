import { CSSResult, html, PropertyDeclarations } from 'lit';
import { BaseLitElement, registerWebComponents, webComponent } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import { InfoblockVisualization } from '../utils/vl-qlik.model';
import { Qlik, STARDUST } from '@domg/qlik-lib';
import { renderStack } from '../utils/qlik-render-utils';
import { stardust } from '@nebula.js/stardust';
import { VlInfoblockComponent, VlInfoTile, VlLoaderComponent } from '@domg-wc/components';
import { VlQlikVisualComponent } from '../visual';
import infoblockUigStyle from './vl-qlik-infoblock.uig-css';

@webComponent('vl-qlik-infoblock')
export class VlQlikInfoblockComponent extends BaseLitElement {
    title = '';
    visuals: InfoblockVisualization[][];
    connection?: Qlik;
    private icon = '';
    private stardust?: stardust.Embed;
    private connected: boolean;

    static {
        registerWebComponents([VlInfoblockComponent, VlInfoTile, VlQlikVisualComponent, VlLoaderComponent]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle, infoblockUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            title: { type: String, attribute: 'title', reflect: true },
            icon: { type: String, attribute: 'icon', reflect: true },
            visuals: { type: Array },
            connection: { type: Object },
            connected: { type: Boolean, state: true },
        };
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (this.connection && !this.connected) {
            this.stardust = await STARDUST(this.connection.app);
            this.connected = true;
        }
    }

    render() {
        if (!this.connected) {
            return html` <vl-loader data-vl-text="Visualisatie is aan het laden"></vl-loader>`;
        }
        return html`
            <vl-infoblock data-vl-title="${this.title}" data-vl-icon="${this.icon}">
                <slot></slot>
                ${this.renderVisualisations()}
            </vl-infoblock>
        `;
    }

    private renderVisualisations() {
        return renderStack(...this.visuals.flatMap((visualRow) => this.renderVisualRow(visualRow)));
    }

    private renderVisualRow(visualRow: InfoblockVisualization[]) {
        return visualRow.map((v) => {
            if (!Array.isArray(v)) {
                return {
                    size: v.colSize || 1,
                    maxSize: visualRow.length,
                    template: this.renderVisual(v),
                };
            } else {
                return {
                    size: 1,
                    maxSize: visualRow.length,
                    template: renderStack(...this.renderVisualRow(v)),
                };
            }
        });
    }

    private renderVisual(v: InfoblockVisualization) {
        return html`
            <vl-info-tile data-vl-auto-open="true" ?data-vl-center="${v.align === 'center'}">
                <span slot="title">${v.title}</span>
                <div slot="content">
                    ${v.icon ? html`<img class="icon" src="${v.icon}" />` : html``}
                    <vl-qlik-visual
                        qlik-id="${v.id}"
                        type="${v.type}"
                        height="${v.height}"
                        .stardust="${this.stardust}"
                        .properties="${v.properties}"
                    ></vl-qlik-visual>
                    ${v.visuals
                        ? renderStack(...v.visuals.flatMap((visualRow) => this.renderVisualRow(visualRow)))
                        : html``}
                </div>
            </vl-info-tile>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-qlik-infoblock': VlQlikInfoblockComponent;
    }
}
