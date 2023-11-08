import {css, CSSResult, html, PropertyDeclarations} from 'lit';
import {BaseLitElement, registerWebComponents, webComponent} from '@domg-wc/common-utilities';
import {vlElementsStyle} from "@domg-wc/elements";
import {InfoblockVisualization} from "../../utils/vl-qlik.types";
import {STARDUST, Qlik} from "@domg/qlik-lib";
import {renderStack} from "../../utils/common";
import {stardust} from "@nebula.js/stardust";

import {VlInfoblockComponent, VlInfoTile, VlLoaderComponent} from "@domg-wc/components";
import {VlQlikVisualComponent} from "../visual";

@webComponent('vl-qlik-infoblock')
export class VlQlikInfoblockComponent extends BaseLitElement {
    public title = '';
    private icon = '';
    public visuals: Array<Array<InfoblockVisualization>>;
    public connection?: Qlik;
    private stardust?: stardust.Embed;
    private connected: boolean;

    static {
        registerWebComponents([VlInfoblockComponent, VlInfoTile, VlQlikVisualComponent, VlLoaderComponent ]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            title: {type: String, attribute: 'title', reflect: true},
            icon: {type: String, attribute: 'icon', reflect: true},
            visuals: {type: Array},
            connection: {type: Object},
            connected: {type: Boolean, state: true}
        };
    }

    async firstUpdated() {
        if (this.connection && !this.connected) {
            this.stardust = await STARDUST(this.connection.app);
            this.connected = true;
        }
    }

    render() {
        if (!this.connected) {
            return html`<vl-loader
                    data-vl-text="Visualisatie is aan het laden"></vl-loader>`;
        }
        return html`
            <style>
                ${Array.from({length: 13}, (x, i) => i)
                .flatMap(i => Array.from({length: 13}, (y, j) => css`
                    .vl-col--${i}-${j} {
                        flex-basis: ${(i / j) * 100}%;
                        max-width: ${(i / j) * 100}%;
                        min-width: ${(i / j) * 100}%;
                    }
                `))}
            </style>
            <vl-infoblock data-vl-title="${this.title}"
                          data-vl-icon="${this.icon}">
                <slot></slot>
                ${this.__renderVisualisations()}
            </vl-infoblock>
        `;
    }

    __renderVisualisations() {
        return renderStack(...this.visuals.flatMap(
            visualRow => this.__renderVisualRow(visualRow)));
    }

    __renderVisualRow(visualRow: Array<InfoblockVisualization>) {
        return visualRow.map(v => {
            if (!Array.isArray(v)) {
                return {
                    size: v.colSize || 1,
                    maxSize: visualRow.length,
                    template: this.__renderVisual(v)
                }
            } else {
                return {
                    size: 1,
                    maxSize: visualRow.length,
                    template: renderStack(...this.__renderVisualRow(v))
                }
            }
        })
    }


    __renderVisual(v: InfoblockVisualization) {
        return html`
            <vl-info-tile data-vl-auto-open="true" ?data-vl-center="${v.align === "center"}">
                <span slot="title">${v.title}</span>
                <div slot="content">
                    ${v.icon ? html`<img class="icon" src="${v.icon}"/>`: html``}
                    <vl-qlik-visual
                            qlik-id="${v.id}"
                            type="${v.type}"
                            height="${v.height}"
                            .stardust="${this.stardust}"
                            .properties="${v.properties}"></vl-qlik-visual>
                    ${v.visuals ? renderStack(...v.visuals.flatMap(
                            visualRow => this.__renderVisualRow(visualRow))) : html``}
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
