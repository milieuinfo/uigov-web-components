import {css, CSSResult, html, PropertyDeclarations, unsafeCSS} from 'lit';
import {BaseLitElement, webComponent} from '@domg-wc/common-utilities';
import {stardust} from "@nebula.js/stardust/types";
import {STARDUST, Qlik} from "@domg/qlik-lib";
import {
  bindVlSelect,
  debounce,
  queryById,
  queryBySelectorAll,
  renderStack
} from "../../utils/common";
import {Filter, DashboardVisualization} from "../../utils/vl-qlik.types";

import '../visual';
import {vlElementsStyle} from "@domg-wc/elements";

@webComponent('vl-qlik-dashboard')
export class VlQlikDashboardComponent extends BaseLitElement {
  private connected = false;
  private initialized = false;
  private filtersLoading = true;
  public visuals: Array<Array<DashboardVisualization>>;
  public filters: Array<Filter> = [];
  public connection?: Qlik;
  private stardust?: stardust.Embed;
  private selected = {};

  static get styles(): (CSSResult | CSSResult[])[] {
    return [vlElementsStyle];
  }

  static get properties(): PropertyDeclarations {
    return {
      visuals: {type: Array},
      filters: {type: Array},
      connection: {type: Object},
      connected: {type: Boolean, state: true},
      initialized: {type: Boolean, state: true},
      filtersLoading: {type: Boolean, state: true},
      selected: {type: Object, state: true}
    };
  }

  async firstUpdated() {
    if (this.connection && !this.connected) {
      this.stardust = await STARDUST(this.connection.app);
      this.connected = true;
      this.dispatchEvent(new CustomEvent("connected"));
    }
    if (this.connected && this.filters && this.filters.length > 0) {
      try {
        await Promise.all(
            this.filters.map(f => this.connection.addFilters(f.filter)));
      } catch (e) {
        // do nothing
      }
    }
    this.initialized = true;
    this.dispatchEvent(new CustomEvent("initialized"));
    this.search();
  }

  async updated() {
    if (this.initialized && this.filters && this.filters.length > 0) {
      this.__bindFilters();
    }
  }

  render() {
    if (!this.initialized || !this.connected) {
      return renderStack({
        size: 12,
        template: html`
          <vl-loader
              data-vl-text="Dashboard is aan het laden"
          ></vl-loader>`,
      });
    }
    return html`
      <style>
        .js-vl-select[data-type*=multiple] .vl-pill__close::before {
          content: "\\f15f";
        }

        .olr-select-alternate {
          background-color: #f3f5f6 !important
        }

        ${Array.from({length: 101}, (x, i) => i).map(i => css`
          .visual-label-${i}-center {
            width: ${i}%;
            text-align: center;
            display: flex;
            justify-content: center;
            vertical-align: middle;
            font-weight: bold;
          }

          .visual-${i}-center {
            width: ${i}%;
            text-align: center;
            display: flex;
            justify-content: center;
            vertical-align: middle;
          }

          .visual-label-${i}-left {
            width: ${i}%;
            text-align: left;
            display: flex;
            justify-content: left;
            vertical-align: middle;
            font-weight: bold;
          }

          .visual-${i}-left {
            width: ${i}%;
            text-align: left;
            display: flex;
            justify-content: left;
            vertical-align: middle;
          }
        `)}
        ${Array.from({length: 13}, (x, i) => i)
    .flatMap(i => Array.from({length: 13}, (y, j) => css`
          .vl-col--${i}-${j} {
            flex-basis: ${(i / j) * 100}%;
            max-width: ${(i / j) * 100}%;
            min-width: ${(i / j) * 100}%;
          }
        `))}
      </style>
      ${renderStack(
        this.__renderFilters(), this.__renderVisualisations()
    )}
    `;
  }

  __renderFilters() {
    if (!this.hasFilters()) {
      return {};
    }
    return {
      size: 2,
      template: html`
        <div is="vl-search-filter">
          <form is="vl-form">
            <section>
              <h2>Filters</h2>
              ${renderStack(
                  ...this.__renderPills(),
                  ...this.filters.map((f) => {
                    return {
                      size: 12,
                      id: f.id,
                      template: this.__renderFilter(f),
                    };
                  }))}
            </section>
          </form>
        </div>
      `
    };
  }

  hasFilters() {
    return this.filters && this.filters.length !== 0;
  }

  __renderPills() {
    if (!this.selected || Object.keys(this.selected).length === 0) {
      return [];
    }
    if (this.filtersLoading) {
      return [{
        size: 12,
        template: html`
          <vl-loader
              data-vl-text="Filters zijn aan het laden"
          ></vl-loader>
        `
      }];
    }
    return Object.keys(this.selected)
    .filter(k => !this.filters.some(f => this.__fieldValue(f) === k))
    .flatMap(k => {
      const s = this.selected[k];
      return [{
        size: 12,
        template: html`
          <label
              is="vl-form-message"
              for="filter-${k}"
          >${k}</label>
          <div id="filter-${k}">

            ${s.selections.map(sel => html`
              <vl-pill data-vl-closable
                       @close="${() => this.__deselect(k, sel)}">
                ${sel}
              </vl-pill>`)}
            ${s.count > 6 ? html`<span> en nog ${s.count - 6} anderen</span>`
            : html``}
          </div>
        `
      },]
    });
  }

  __renderFilter(filter) {
    return html`<label
        is="vl-form-message"
        for="${filter.id}">${filter.filter.name}</label>
    ${this.__renderSelect(filter)}`;
  }

  __renderSelect(filter) {
    return html`
      <div
          class="${!this.filtersLoading ? 'vl-u-visually-hidden' : ''}">
        <vl-loader
            data-vl-text="Filter is aan het laden"
        ></vl-loader>
      </div>
      <div
          class="${this.filtersLoading ? 'vl-u-visually-hidden' : ''}">
        <select
            is="vl-multiselect"
            id="${filter.id}"
            multiple
            data-vl-multiselect
            data-vl-select-search
            data-vl-select-search-no-result-limit
            @change="${this.__changeFilter}"
        ></select>
      </div>`;
  }

  __renderVisualisations() {
    return {
      size: this.hasFilters() ? 10 : 12,
      template: renderStack(...this.visuals.flatMap(
          visualRow => this.__renderVisualRow(visualRow)))
    }
  }

  __renderVisualRow(visualRow: Array<DashboardVisualization>) {
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

  __renderVisual(v: DashboardVisualization) {
    return html`
        <label
                is="vl-form-message"
                for="visual-${v.id}"
                class="visual-label-100-${v["align-label"] || 'left'}"
        >${v.label}</label>
        <div style="min-height: ${v.height}">
            <vl-qlik-visual
                    class="visual-100-${v["align-visual"] || 'left'}"
                    qlik-id="${v.id}"
                    type="${v.type}"
                    height="${v.height}"
                    width="${v.width}"
                    .stardust="${this.stardust}"
                    .properties="${v.properties}"
                    .options="${v.options}"
                    @visual-changed="${this.__visualChanged}"
                    additional-style="position: absolute; width:95%; bottom:0"></vl-qlik-visual>
        </div>
    `;
  }

  async __bindFilters() {
    const filterVs = (await Promise.all(
        this.filters.map(async (filter) => {
              const filterValues = await this.connection.getFilterValues(filter.filter.name, true);
              bindVlSelect({
                component: queryById(this)(filter.id),
                choices: filterValues.map((filterValue) => {
                  return {
                    label: filterValue.label,
                    value: filterValue.label,
                    disabled: filterValue.state === 'excluded',
                  };
                }),
                selectedChoices: this.selected[this.__fieldValue(filter)]
                    ? this.selected[this.__fieldValue(filter)].selections : []
              });
              return {filtername: filter.filter.name, values: filterValues, filterid: filter.id};
            }
        )
    )).reduce((result, item) => {
      result[item.filtername] = item;
      return result;
    }, {});

    Object.keys(filterVs).forEach(f => {
      queryBySelectorAll(this)(
          `div[id^="choices-${filterVs[f].filterid}-item"]`).forEach(c => {
        const value = c.innerText.trim();
        const state = filterVs[f].values.find(v => v.label === value).state
        c.classList.remove('olr-select-optional', 'olr-select-alternate',
            'olr-select-excluded', 'olr-select-selected')
        c.classList.add(`olr-select-${state}`);
      });
    })
  }

  async __changeFilter(e) {
    await this.connection.selectFilters(
        this.filters.find(f => f.id === e.target.id).filter.name,
        queryById(this)(e.target.id).values)
  }

  __fieldValue(f) {
    return f.filter.field.replaceAll(/\[|\]/g, '');
  }

  async __deselect(field, value) {
    await this.connection.app.mSelectInField(field, [value], true);
  }

  async __visualChanged() {
    this.filtersLoading = true;
    this.search();
  }

  search() {
    debounce({
      func: (async () => {
        const selections = await this.connection.app.mSelectionsAll();
        this.selected = selections.qSelections.map(qs => {
          const filter = this.filters.find(
              f => this.__fieldValue(f) === qs.qField);
          if (filter) {
            const newValues = [...queryById(this)(filter.id).values,
              ...qs.qSelectedFieldSelectionInfo.map(sel => sel.qName)];
            queryById(this)(filter.id).values = newValues.filter(
                (v, i) => newValues.indexOf(v) === i);
          }
          return {
            label: qs.qReadableName ? qs.qReadableName : qs.qField,
            selections: qs.qSelectedFieldSelectionInfo.map(sel => sel.qName),
            count: qs.qSelectedCount
          }
        })
        .reduce((result, item) => {
          result[item.label] = {};
          result[item.label].selections = item.selections;
          result[item.label].count = item.count;
          return result;
        }, {});
        this.filtersLoading = false;
      }),
      delay: 1000,
      context: this
    })();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'vl-qlik-dashboard': VlQlikDashboardComponent;
  }
}
