import {
  bindVlSelect,
  comparingWithFunction,
  define,
  html,
  LitElement,
  performWithLoader,
  queryById,
  renderStack
} from "../common/commons.js";

import "../qlik/dashboard.js";
import {DEFAULT, REFRESH_MEASURE} from "../config/qlik_resources.js";
import {exportCSVFile, exportExcelFile, Qlik} from "@domg/qlik-lib";

import "@domg-wc/components/loader";
import "@domg-wc/components/annotation";
import {vlElementsStyle} from "@domg-wc/elements";

class DashboardPage extends LitElement {

  static get styles() {
    return [
      vlElementsStyle
    ]
  }

  static get properties() {
    return {
      title: {type: String},
      url: {type: String},
      appId: {type: String},
      exportId: {type: String},
      connected: {type: Boolean},
      initialized: {type: Boolean},
      views: {type: Object},
      selectedView: {type: String},
      closed: {type: Boolean},
      filters: {type: Array}
    }
  }

  constructor() {
    super();
    this.connected = false;
    this.initialized = false;
    this.closed = false;
  }

  async connectedCallback() {
    this.connection = new Qlik(
        this.url,
        this.appId);
    await this.connection.init();
    this.connection.app.on('closed', () => this.closed = true);
    this.connected = true;

    await this.connection.addCubes({
      name: 'refresh', dimensions: [DEFAULT], measures: [REFRESH_MEASURE]
    });
    this.refresh = (await this.connection.getCubeValues(
        'refresh'))[0]["Refresh rate"];
    this.initialized = true;
    this.dispatchEvent(new CustomEvent("initialized"))
    super.connectedCallback();
  }

  async __bindViews() {
    let component = queryById(this)("view-selector");
    if (component) {
      await bindVlSelect({
        component: component,
        choices: Object.keys(this.views).map((v) => {
          return {label: this.views[v].label, value: v};
        }),
        selectedChoices: [this.selectedView],
        sortFilter: comparingWithFunction((x) => x.order)
      })
    }
  }

  async updated(_changedProperties) {
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
    let pageInfo = []
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
          <button is="vl-button"
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
          <qlik-dashboard
              id="${this.id}"
              .visuals="${this.views}"
              .filters="${this.filters}"
              .connection="${this.connection}">
          </qlik-dashboard>`
      };
    }
    return {
      size: 12,
      template: html`
        <qlik-dashboard
            id="${this.id}"
            .visuals="${this.views[this.selectedView].visualisations}"
            .filters="${this.filters}"
            .connection="${this.connection}">
        </qlik-dashboard>`
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

Promise
.all([window.customElements.whenDefined("vl-multiselect"),
  window.customElements.whenDefined("vl-select")])
.then(() => {
  define('dashboard-page', DashboardPage);
});
