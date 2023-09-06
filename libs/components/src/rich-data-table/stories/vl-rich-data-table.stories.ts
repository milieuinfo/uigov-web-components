// deze imports van alle elements werkt IN de monorepo
// -> buiten de monorepo werkt dat niet omdat sideEffects disabled worden voor de root-barrel file in de artifacts
import '@domg-wc/elements';
import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-rich-data-table.component';
import { richDataTableArgs, richDataTableArgTypes } from './vl-rich-data-table.stories-arg';
import richDataTableDoc from './vl-rich-data-table.stories-doc.mdx';
import { sortingRichTableImplementation } from './vl-rich-data-table-sorting.stories-util';
import { filterRichTableImplementation } from './vl-rich-data-table-filter.stories-util';
import { paginationRichTableImplementation } from './vl-rich-data-table-pagination.stories-util';
import richDataFilterPagerData from './vl-rich-data-table-pagination.stories-mock';
import { storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'Components/rich-data-table',
    args: storyArgs(richDataTableArgs),
    argTypes: storyArgTypes(richDataTableArgTypes),
    parameters: {
        docs: {
            page: richDataTableDoc,
        },
        layout: 'fullscreen',
    },
} as Meta<typeof richDataTableArgs>;

const TemplateBase: StoryFn<typeof richDataTableArgs> = ({ collapsedM, collapsedS, collapsedXS }) => {
    const data =
        '{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Marie Vermeersch" }]}';

    return html`
        <vl-rich-data-table
            data-vl-data="${data}"
            ?data-vl-collapsed-m=${collapsedM}
            ?data-vl-collapsed-s=${collapsedS}
            ?data-vl-collapsed-xs=${collapsedXS}
        >
            <vl-rich-data-field data-vl-name="id" data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>
            <vl-rich-data-field data-vl-name="name" data-vl-label="Naam" data-vl-selector="name"></vl-rich-data-field>
            <vl-rich-data-field data-vl-name="owner" data-vl-selector="owner">
                <template slot="label">
                    <span>Eigenaar</span>
                </template>
            </vl-rich-data-field>
        </vl-rich-data-table>
    `;
};
export const RichDataTableDefault = TemplateBase.bind({});
RichDataTableDefault.storyName = 'vl-rich-data-table - default';
RichDataTableDefault.args = {
    collapsedM: false,
    collapsedS: false,
    collapsedXS: false,
};

const TemplateSorting: StoryFn<typeof richDataTableArgs> = ({ collapsedM, collapsedS, collapsedXS }) => {
    const data =
        '{"data": [{ "id" : 0, "name" : "Water" , "owner" : "Kevin Jansens" }, { "id" : 1, "name" : "Vuur" , "owner" : "Anton Vanherrewege" }, { "id" : 2, "name" : "Aarde" , "owner" : "Hedwig Jansens" }]}';
    sortingRichTableImplementation();
    return html`
        <vl-rich-data-table
            id="rich-data-table-sorting"
            data-vl-data="${data}"
            ?data-vl-collapsed-m=${collapsedM}
            ?data-vl-collapsed-s=${collapsedS}
            ?data-vl-collapsed-xs=${collapsedXS}
        >
            <vl-rich-data-field
                data-vl-name="id"
                data-vl-label="ID"
                data-vl-selector="id"
                data-vl-sortable=""
                data-vl-sorting-direction="asc"
            ></vl-rich-data-field>
            <vl-rich-data-field
                data-vl-name="name"
                data-vl-label="Naam"
                data-vl-selector="name"
                data-vl-sortable=""
            ></vl-rich-data-field>
            <vl-rich-data-field data-vl-name="owner" data-vl-selector="owner" data-vl-sortable="">
                <template slot="label">
                    <span>Eigenaar</span>
                </template>
            </vl-rich-data-field>
        </vl-rich-data-table>
    `;
};
export const RichDataTableSorting = TemplateSorting.bind({});
RichDataTableSorting.storyName = 'vl-rich-data-table - sorting';
RichDataTableSorting.args = {
    collapsedM: false,
    collapsedS: false,
    collapsedXS: false,
};

const TemplateFilter: StoryFn<typeof richDataTableArgs> = ({
    collapsedM,
    collapsedS,
    collapsedXS,
    filterCloseable,
    filterClosed,
}) => {
    filterRichTableImplementation();
    return html`
        <vl-rich-data-table
            id="rich-data-table-filter"
            ?data-vl-collapsed-m=${collapsedM}
            ?data-vl-collapsed-s=${collapsedS}
            ?data-vl-collapsed-xs=${collapsedXS}
            ?data-vl-filter-closable=${filterCloseable}
            ?data-vl-filter-closed=${filterClosed}
        >
            <vl-rich-data-field data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>
            <vl-rich-data-field data-vl-label="Naam Project" data-vl-selector="name"></vl-rich-data-field>
            <vl-rich-data-field data-vl-label="Naam Manager" data-vl-selector="manager.lastName"></vl-rich-data-field>
            <vl-rich-data-field
                data-vl-label="Eerste medewerker"
                data-vl-selector="medewerkers.0.lastName"
            ></vl-rich-data-field>
            <div is="vl-search-filter" slot="filter" data-vl-alt="">
                <form is="vl-form" id="rich-data-table-filter-form">
                    <section>
                        <h2>Doorzoek projecten</h2>
                        <div>
                            <label is="vl-form-label" for="filterOpId">Project id</label>
                            <input
                                is="vl-input-field"
                                id="filterOpId"
                                type="text"
                                name="id"
                                value=""
                                data-vl-block=""
                            />
                        </div>
                    </section>
                    <section>
                        <h2>Project details</h2>
                        <div>
                            <label is="vl-form-label" for="filterOpNaamProject">Project naam</label>
                            <input
                                is="vl-input-field"
                                id="filterOpNaamProject"
                                type="text"
                                name="name"
                                value=""
                                data-vl-block=""
                            />
                        </div>
                        <div>
                            <label is="vl-form-label" for="filterOpNaamManager">Manager familienaam</label>
                            <input
                                is="vl-input-field"
                                id="filterOpNaamManager"
                                type="text"
                                name="manager.lastName"
                                value=""
                                data-vl-block=""
                            />
                        </div>
                    </section>
                    <div>
                        <button is="vl-button" type="submit">Zoeken</button>
                    </div>
                </form>
                <div>
                    <button is="vl-button-link" type="reset" form="rich-data-table-filter-form">
                        Zoekopdracht verwijderen
                    </button>
                </div>
            </div>
            <vl-pager
                id="rich-data-table-filter"
                slot="pager"
                data-vl-total-items="6"
                data-vl-items-per-page="10"
                data-vl-current-page="1"
                data-vl-align-center=""
            ></vl-pager>
        </vl-rich-data-table>
    `;
};
export const RichDataTableFilter = TemplateFilter.bind({});
RichDataTableFilter.storyName = 'vl-rich-data-table - filter';
RichDataTableFilter.args = {
    filterCloseable: true,
};

const TemplateFilterPaging: StoryFn<typeof richDataTableArgs> = ({
    collapsedM,
    collapsedS,
    collapsedXS,
    filterCloseable,
    filterClosed,
}) => {
    paginationRichTableImplementation();
    return html`
        <vl-rich-data-table
            id="rich-data-table-pagination"
            ?data-vl-collapsed-m=${collapsedM}
            ?data-vl-collapsed-s=${collapsedS}
            ?data-vl-collapsed-xs=${collapsedXS}
            ?data-vl-filter-closable=${filterCloseable}
            ?data-vl-filter-closed=${filterClosed}
        >
            <vl-rich-data-field data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>
            <vl-rich-data-field data-vl-label="Naam Project" data-vl-selector="name"></vl-rich-data-field>
            <vl-rich-data-field data-vl-label="Naam Manager" data-vl-selector="manager.lastName"></vl-rich-data-field>
            <vl-rich-data-field
                data-vl-label="Eerste medewerker"
                data-vl-selector="medewerkers.0.lastName"
            ></vl-rich-data-field>
            <div is="vl-search-filter" slot="filter" data-vl-alt="">
                <form is="vl-form" id="rich-data-table-filter-form">
                    <section>
                        <h2>Doorzoek projecten</h2>
                        <div>
                            <label is="vl-form-label" for="filterOpId">Project id</label>
                            <input
                                is="vl-input-field"
                                id="filterOpId"
                                type="text"
                                name="id"
                                value=""
                                data-vl-block=""
                            />
                        </div>
                    </section>
                    <section>
                        <h2>Project details</h2>
                        <div>
                            <label is="vl-form-label" for="filterOpNaamProject">Project naam</label>
                            <input
                                is="vl-input-field"
                                id="filterOpNaamProject"
                                type="text"
                                name="name"
                                value=""
                                data-vl-block=""
                            />
                        </div>
                        <div>
                            <label is="vl-form-label" for="filterOpNaamManager">Manager familienaam</label>
                            <input
                                is="vl-input-field"
                                id="filterOpNaamManager"
                                type="text"
                                name="manager.lastName"
                                value=""
                                data-vl-block=""
                            />
                        </div>
                    </section>
                    <div>
                        <button is="vl-button" type="submit">Zoeken</button>
                    </div>
                </form>
                <div>
                    <button is="vl-button-link" type="reset" form="rich-data-table-filter-form">
                        Zoekopdracht verwijderen
                    </button>
                </div>
            </div>
            <vl-pager
                id="pager-for-rich-data-table"
                slot="pager"
                data-vl-total-items=${richDataFilterPagerData.data.length}
                data-vl-items-per-page="10"
                data-vl-current-page="1"
            ></vl-pager>
        </vl-rich-data-table>
    `;
};
export const RichDataTableFilterAndPagination = TemplateFilterPaging.bind({});
RichDataTableFilterAndPagination.storyName = 'vl-rich-data-table - filter and pagination';
RichDataTableFilterAndPagination.args = {
    filterCloseable: true,
    filterClosed: true,
};
