import {CSSResult, html, PropertyDeclarations} from 'lit';
import {BaseLitElement, registerWebComponents, webComponent} from '@domg-wc/common-utilities';
import {vlElementsStyle} from "@domg-wc/elements";
import '../dashboard';
import {DashboardVisualization, Filter, Views} from "../../utils/vl-qlik.types";
import {exportCSVFile, exportExcelFile, Qlik} from "@domg/qlik-lib";
import {
    bindVlSelect,
    comparingWithFunction,
    performWithLoader,
    queryById,
    renderStack
} from "../../utils/common";
import "../dashboard/vl-qlik-dashboard.component";

import {VlAlert, VlAnnotation, VlLoaderComponent} from "@domg-wc/components";

@webComponent('vl-qlik-dashboard-page')
export class VlQlikDashboardPageComponent extends BaseLitElement {
    public title = '';
    private url = '';
    private appId = '';
    private exportId = '';
    private selectedView = '';
    public views: Views | Array<Array<DashboardVisualization>>;
    public filters: Array<Filter>;


    private connected = false;
    private initialized = false;
    private closed = false;
    private connection: Qlik;
    private refresh: string;

    static DEFAULT = {
        name: "default",
        fieldQualifier: "qText",
        field: "[]",
    };
    static REFRESH_MEASURE = {
        name: "Refresh rate",
        fieldQualifier: "qText",
        expression: "Date(ReloadTime(),'DD/MM/YYYY')",
    };

    static {
        registerWebComponents([VlAlert, VlLoaderComponent, VlAnnotation]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            title: {type: String, attribute: 'title', reflect: true},
            url: {type: String, attribute: 'url', reflect: true},
            appId: {type: String, attribute: 'app-id', reflect: true},
            exportId: {type: String, attribute: 'export-id', reflect: true},
            selectedView: {type: String, attribute: 'selected-view', reflect: true},
            views: {type: Object},
            filters: {type: Array},
            closed: {type: Boolean, state: true},
            connected: {type: Boolean, state: true},
            initialized: {type: Boolean, state: true},
            connection: {type: Qlik, state: true},
            refresh: {type: String, state: true}
        };
    }

    async firstUpdated() {
        this.connection = new Qlik(this.url, this.appId);
        await this.connection.init();
        this.connection.app.on('closed', () => this.closed = true);
        this.connected = true;

        await this.connection.addCubes({
            name: 'refresh', dimensions: [VlQlikDashboardPageComponent.DEFAULT], measures: [VlQlikDashboardPageComponent.REFRESH_MEASURE]
        });
        this.refresh = (await this.connection.getCubeValues(
            'refresh'))[0]["Refresh rate"];
        this.initialized = true;
        this.dispatchEvent(new CustomEvent("initialized"));
    }

    __bindViews() {
        const component = queryById(this)("view-selector");
        if (component) {
            bindVlSelect({
                component: component,
                choices: Object.keys(this.views).map((v) => {
                    return {label: this.views[v].label, value: v};
                }),
                selectedChoices: [this.selectedView],
                sortFilter: comparingWithFunction((x) => x.order)
            })
        }
    }

    updated() {
        if (this.initialized && this.views) {
            this.__bindViews();
        }
    }

    render() {
        if (!this.selectedView && this.views) {
            this.selectedView = Object.keys(this.views)[0];
        }
        return html`
            <div style="margin: 0px 50px">
                ${renderStack(...this.__renderPageInfo())}
            </div>
        `;
    }

    __renderPageInfo() {
        if (!this.connected || !this.initialized) {
            return [{
                size: 12, template: html`
                    <vl-loader
                            data-vl-text="Pagina is aan het laden"
                    ></vl-loader>`,
            }];
        }
        return [
            this.__renderTitle(),
            this.__renderDownloadButton(),
            this.__renderIntroduction(),
            this.__renderViewSelector(),
            this.__renderDashboard(),
        ];

    }

    __renderDownloadButton() {
        if (!this.exportId) {
            return {};
        }
        return {
            size: 3,
            template: html`
                <div is="vl-action-group" style="float:right;margin-top: 3rem">
                    <select id="format-select" is="vl-select"
                            style="margin-right: 1.4rem">
                        <option value="xlsx">Excel</option>
                        <option value="csv">CSV</option>
                    </select>
                    <button id="export-dashboard"
                            is="vl-button"
                            @click="${(e) => performWithLoader(e.target,
                                    this.export.bind(this))}">
                        <span is="vl-icon" data-vl-icon="file-download"
                              data-vl-before></span>
                        Download
                    </button>
                </div>`
        };
    }

    __renderIdleTime() {
        return html`
            <vl-alert
                    data-vl-icon="warning"
                    data-vl-title="Connectie met de visualisaties afgesloten."
                    data-vl-type="error">
                <p>Uw connectie is afgesloten door inactiviteit op de pagina. Vernieuw
                    de pagina om een nieuwe connectie te maken. </p>
                <button onClick="window.location.reload();" slot="actions"
                        is="vl-button">Vernieuw de pagina
                </button>
            </vl-alert>`;
    }

    __renderIntroduction() {
        return {
            size: 12,
            template: html`
                <slot name="introduction"></slot>
            `
        };
    }

    __renderViewSelector() {
        let template = html``;
        if (!Array.isArray(this.views)) {
            template = html`
                <h6 is="vl-h6" data-vl-no-space-bottom>
                    Kies hier de gewenste dimensie, en de grafieken geven de
                    overeenkomstige waarden weer
                </h6>
                <form is="vl-form">
                    <select
                            is="vl-select"
                            id="view-selector"
                            data-vl-select
                            data-vl-select-search-no-result-limit
                            @change="${this.__changeView}"
                    ></select>
                </form>
            `;
        }

        return {
            size: 12, template: template
        }
    }

    __renderTitle() {
        return {
            size: this.exportId ? 9 : 12,
            template: html`
                <h1 is="vl-h1" data-vl-no-space-bottom style="padding-top: 3rem">
                    ${this.title}</h1>
                <p is="vl-icon-wrapper">
                    <vl-annotation>
                        <span>Laatste wijziging:</span>
                    </vl-annotation>
                    <span is="vl-icon" data-vl-icon="calendar" data-vl-before
                          data-vl-after
                          data-vl-light></span>
                    <vl-annotation>
                        <span>${this.refresh}</span>
                    </vl-annotation>
                </p>`
        };
    }

    __renderDashboard() {
        if (this.closed) {
            return {
                size: 12,
                template: this.__renderIdleTime()
            };
        }
        if (Array.isArray(this.views)) {
            return {
                size: 12,
                template: html`
                    <vl-qlik-dashboard
                            id="${this.id}"
                            .visuals="${this.views}"
                            .filters="${this.filters}"
                            .connection="${this.connection}">
                    </vl-qlik-dashboard>`
            };
        }
        return {
            size: 12,
            template: html`
                <vl-qlik-dashboard
                        id="${this.id}"
                        .visuals="${this.views[this.selectedView].visualisations}"
                        .filters="${this.filters}"
                        .connection="${this.connection}">
                </vl-qlik-dashboard>`
        };
    }

    async export() {
        if (queryById(this)("format-select").value === "csv") {
            await exportCSVFile(
                this.exportId, this.title.toLowerCase().replaceAll(" ", "_"),
                this.connection);
        } else {
            await exportExcelFile(
                this.exportId, this.title.toLowerCase().replaceAll(" ", "_"),
                this.connection);
        }
    }

    async __changeView(e) {
        this.selectedView = e.detail.value;
    }

    async disconnectedCallback() {
        await this.connection.end();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-qlik-dashboard-page': VlQlikDashboardPageComponent;
    }
}
