import { CSSResult, html, PropertyDeclarations } from 'lit';
import { BaseLitElement, registerWebComponents, webComponent } from '@domg-wc/common';
import { stardust } from '@nebula.js/stardust/types';
import { Qlik, STARDUST } from '@domg/qlik-lib';
import { bindVlSelect, debounce, queryById, queryBySelectorAll, renderStack } from '../utils/qlik-render-utils';
import { DashboardVisualization, Filter } from '../utils/vl-qlik.model';
import { vlElementsStyle, VlFormElement, VlFormLabel, VlMultiSelect, VlSearchFilterElement } from '@domg-wc/elements';
import dashboardUigStyle from './vl-qlik-dashboard.uig-css';
import { VlQlikVisualComponent } from '../visual';
import { VlLoaderComponent, VlPillComponent } from '@domg-wc/components';

@webComponent('vl-qlik-dashboard')
export class VlQlikDashboardComponent extends BaseLitElement {
    visuals: DashboardVisualization[][];
    filters: Filter[] = [];
    connection?: Qlik;
    private connected = false;
    private initialized = false;
    private filtersLoading = true;
    private stardust?: stardust.Embed;
    private selected = {};

    static {
        registerWebComponents([
            VlQlikVisualComponent,
            VlLoaderComponent,
            VlPillComponent,
            VlSearchFilterElement,
            VlFormElement,
            VlFormLabel,
            VlMultiSelect,
        ]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle, dashboardUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            visuals: { type: Array },
            filters: { type: Array },
            connection: { type: Object },
            connected: { type: Boolean, state: true },
            initialized: { type: Boolean, state: true },
            filtersLoading: { type: Boolean, state: true },
            selected: { type: Object, state: true },
        };
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (this.connection && !this.connected) {
            this.stardust = await STARDUST(this.connection.app);
            this.connected = true;
            this.dispatchEvent(new CustomEvent('connected'));
        }
        if (this.connected && this.filters && this.filters.length > 0) {
            try {
                await Promise.all(this.filters.map((f) => this.connection.addFilters(f.filter)));
            } catch (e) {
                // do nothing
            }
        }
        this.initialized = true;
        this.dispatchEvent(new CustomEvent('initialized'));
        this.search();
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (this.initialized && this.filters && this.filters.length > 0) {
            this.bindFilters();
        }
    }

    render() {
        if (!this.initialized || !this.connected) {
            return renderStack({
                size: 12,
                template: html` <vl-loader data-vl-text="Dashboard is aan het laden"></vl-loader>`,
            });
        }
        return html` ${renderStack(this.renderFilters(), this.renderVisualisations())} `;
    }

    private renderFilters() {
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
                                ...this.renderPills(),
                                ...this.filters.map((f) => {
                                    return {
                                        size: 12,
                                        id: f.id,
                                        template: this.renderFilter(f),
                                    };
                                })
                            )}
                        </section>
                    </form>
                </div>
            `,
        };
    }

    private hasFilters() {
        return this.filters && this.filters.length !== 0;
    }

    private renderPills() {
        if (!this.selected || Object.keys(this.selected).length === 0) {
            return [];
        }
        if (this.filtersLoading) {
            return [
                {
                    size: 12,
                    template: html` <vl-loader data-vl-text="Filters zijn aan het laden"></vl-loader> `,
                },
            ];
        }
        return Object.keys(this.selected)
            .filter((k) => !this.filters.some((f) => this.fieldValue(f) === k))
            .flatMap((k) => {
                const s = this.selected[k];
                return [
                    {
                        size: 12,
                        template: html`
                            <label is="vl-form-label" for="filter-${k}">${k}</label>
                            <div id="filter-${k}">
                                ${s.selections.map(
                                    (sel) => html` <vl-pill data-vl-closable @close="${() => this.deselect(k, sel)}">
                                        ${sel}
                                    </vl-pill>`
                                )}
                                ${s.count > 6 ? html` <span> en nog ${s.count - 6} anderen</span>` : html``}
                            </div>
                        `,
                    },
                ];
            });
    }

    private renderFilter(filter) {
        return html`<label is="vl-form-label" for="${filter.id}">${filter.filter.name}</label> ${this.renderSelect(
                filter
            )}`;
    }

    private renderSelect(filter) {
        return html` <div class="${!this.filtersLoading ? 'vl-u-visually-hidden' : ''}">
                <vl-loader data-vl-text="Filter is aan het laden"></vl-loader>
            </div>
            <div class="${this.filtersLoading ? 'vl-u-visually-hidden' : ''}">
                <select is="vl-multiselect" id="${filter.id}" @change="${this.changeFilter}"></select>
            </div>`;
    }

    private renderVisualisations() {
        return {
            size: this.hasFilters() ? 10 : 12,
            template: renderStack(...this.visuals.flatMap((visualRow) => this.renderVisualRow(visualRow))),
        };
    }

    private renderVisualRow(visualRow: DashboardVisualization[]) {
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

    private renderVisual(v: DashboardVisualization) {
        return html`
            <label is="vl-form-label" for="visual-${v.id}" class="visual-label-100-${v['align-label'] || 'left'}"
                >${v.label}</label
            >
            <div style="min-height: ${v.height}">
                <vl-qlik-visual
                    class="visual-100-${v['align-visual'] || 'left'}"
                    qlik-id="${v.id}"
                    type="${v.type}"
                    height="${v.height}"
                    width="${v.width}"
                    .stardust="${this.stardust}"
                    .properties="${v.properties}"
                    .options="${v.options}"
                    @visual-changed="${this.visualChanged}"
                    additional-style="position: absolute; width:95%; bottom:0"
                ></vl-qlik-visual>
            </div>
        `;
    }

    private async bindFilters() {
        const filterVs = (
            await Promise.all(
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
                        selectedChoices: this.selected[this.fieldValue(filter)]
                            ? this.selected[this.fieldValue(filter)].selections
                            : [],
                    });
                    return {
                        filtername: filter.filter.name,
                        values: filterValues,
                        filterid: filter.id,
                    };
                })
            )
        ).reduce((result, item) => {
            result[item.filtername] = item;
            return result;
        }, {});

        Object.keys(filterVs).forEach((f) => {
            queryBySelectorAll(this)(`div[id^="choices-${filterVs[f].filterid}-item"]`).forEach((c: HTMLElement) => {
                const value = c.innerText.trim();
                const state = filterVs[f].values.find((v) => v.label === value).state;
                c.classList.remove(
                    'olr-select-optional',
                    'olr-select-alternate',
                    'olr-select-excluded',
                    'olr-select-selected'
                );
                c.classList.add(`olr-select-${state}`);
            });
        });
    }

    private async changeFilter(e) {
        const element = queryById(this)(e.target.id);
        await this.connection.selectFilters(this.filters.find((f) => f.id === e.target.id).filter.name, element.values);
        element.focus();
    }

    private fieldValue(f) {
        return f.filter.field.replaceAll(/\[|\]/g, '');
    }

    private async deselect(field, value) {
        await this.connection.app.mSelectInField(field, [value], true);
    }

    private async visualChanged() {
        this.filtersLoading = true;
        this.search();
    }

    private search() {
        debounce({
            func: async () => {
                const selections = await this.connection.app.mSelectionsAll();
                this.selected = selections.qSelections
                    .map((qs) => {
                        const filter = this.filters.find((f) => this.fieldValue(f) === qs.qField);
                        if (filter) {
                            const newValues = [
                                ...queryById(this)(filter.id).values,
                                ...qs.qSelectedFieldSelectionInfo.map((sel) => sel.qName),
                            ];
                            queryById(this)(filter.id).values = newValues.filter((v, i) => newValues.indexOf(v) === i);
                        }
                        return {
                            label: qs.qReadableName ? qs.qReadableName : qs.qField,
                            selections: qs.qSelectedFieldSelectionInfo.map((sel) => sel.qName),
                            count: qs.qSelectedCount,
                        };
                    })
                    .reduce((result, item) => {
                        result[item.label] = {};
                        result[item.label].selections = item.selections;
                        result[item.label].count = item.count;
                        return result;
                    }, {});
                this.filtersLoading = false;
            },
            delay: 1000,
            context: this,
        })();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-qlik-dashboard': VlQlikDashboardComponent;
    }
}
