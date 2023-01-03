import '@domg-wc/elements';
import { StoryFn } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-rich-data-table.component';
import { richDataTableArgs, richDataTableArgTypes } from './vl-rich-data-table.stories-arg';

export default {
    title: 'components/rich-data-table',
    argTypes: richDataTableArgTypes,
};

const Template: StoryFn<typeof richDataTableArgs> = ({
    collapsedM,
    collapsedS,
    collapsedXS,
    filterCloseable,
    filterClosed,
}) => {
    const data =
        '{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Jan Jansens" }]}';

    const tableSorter = (table: any) => {
        const originalTableData = [...table.data.data];
        return (event: any) => {
            const { sorting } = event.detail;
            const table = event.target;
            if (sorting) {
                table.data = {
                    data: [...originalTableData].sort((firstEl, secondEl) => {
                        for (let i = 0; i < sorting.length; i++) {
                            const criteria = sorting[i];
                            const firstValue = firstEl[criteria.name];
                            const secondValue = secondEl[criteria.name];
                            const isAscending = criteria.direction === 'asc';
                            if (firstValue < secondValue) {
                                return isAscending ? -1 : 1;
                            } else if (firstValue > secondValue) {
                                return isAscending ? 1 : -1;
                            }
                        }
                        return 0;
                    }),
                    sorting,
                };
            } else {
                table.data = originalTableData;
            }
        };
    };
    customElements.whenDefined('vl-rich-data-table').then(() => {
        const table: any = document.querySelector('#rich-data-table-sorting');
        table.addEventListener('change', tableSorter(table));
    });

    return html`
        <vl-rich-data-table
            id="rich-data-table-sorting"
            data-vl-data="${data}"
            ?data-vl-collapsed-m=${collapsedM}
            ?data-vl-collapsed-s=${collapsedS}
            ?data-vl-collapsed-xs=${collapsedXS}
            ?data-vl-filter-closable=${filterCloseable}
            ?data-vl-filter-closed=${filterClosed}
        >
            <div is="vl-search-filter" slot="filter">
                <form is="vl-form" id="form">
                    <label>Hier kunnen filtervelden komen</label>
                    <input is="vl-input-field" type="text" name="filter1" />
                </form>
                <div>
                    <button is="vl-button-link" type="reset" form="form">Zoekopdracht verwijderen</button>
                </div>
            </div>
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
export const RichDataTableDefault = Template.bind({});
RichDataTableDefault.storyName = 'vl-rich-data-table - default';
RichDataTableDefault.args = richDataTableArgs;
