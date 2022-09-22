import { html } from 'lit-html';
import '../vl-data-table.element';
import { dataTableArgs, dataTableArgTypes } from './vl-data-table.stories-arg';

export default {
    title: 'Elements/data-table',
    args: dataTableArgs,
    argTypes: dataTableArgTypes,
};

export const dataTableDefault = ({
    hover,
    matrix,
    grid,
    zebra,
    uigZebra,
    collapsedM,
    collapsedS,
    collapsedXS,
}: typeof dataTableArgs) => html`
    <table
        is="vl-data-table"
        ?data-vl-hover=${hover}
        ?data-vl-matrix=${matrix}
        ?data-vl-grid=${grid}
        ?data-vl-zebra=${zebra}
        ?data-vl-uig-zebra=${uigZebra}
        ?data-vl-collapsed-m=${collapsedM}
        ?data-vl-collapsed-s=${collapsedS}
        ?data-vl-collapsed-xs=${collapsedXS}
        data-cy="data-table"
    >
        <caption>
            Data table
        </caption>
        <thead>
            <tr>
                <th data-cy="data-table-header-1">Entry Header 1</th>
                <th data-cy="data-table-header-2">Entry Header 2</th>
                <th data-cy="data-table-header-3">Entry Header 3</th>
                <th data-cy="data-table-header-4">Entry Header 4</th>
            </tr>
        </thead>
        <tbody>
            <tr data-cy="data-table-body-row-1">
                <td data-title="Entry Header 1">Entry line 1</td>
                <td data-title="Entry Header 2">Entry line 2</td>
                <td data-title="Entry Header 3">Entry line 3</td>
                <td data-title="Entry Header 4">Entry line 4</td>
            </tr>
            <tr data-cy="data-table-body-row-2">
                <td data-title="Entry Header 1">Entry line 1</td>
                <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                <td data-title="Entry Header 3">Entry line 3</td>
            </tr>
            <tr data-cy="data-table-body-row-3">
                <td data-title="Entry Header 1">Entry line 1</td>
                <td data-title="Entry Header 2">Entry line 2</td>
                <td data-title="Entry Header 3">Entry line 3</td>
                <td data-title="Entry Header 4">Entry line 4</td>
            </tr>
        </tbody>
    </table>
`;
dataTableDefault.storyName = 'vl-data-table - default';

export const dataTableJoinedRowTitles = ({
    hover,
    matrix,
    grid,
    zebra,
    uigZebra,
    collapsedM,
    collapsedS,
    collapsedXS,
}: typeof dataTableArgs) => html`
    <table
        is="vl-data-table"
        ?data-vl-hover=${hover}
        ?data-vl-matrix=${matrix}
        ?data-vl-grid=${grid}
        ?data-vl-zebra=${zebra}
        ?data-vl-uig-zebra=${uigZebra}
        ?data-vl-collapsed-m=${collapsedM}
        ?data-vl-collapsed-s=${collapsedS}
        ?data-vl-collapsed-xs=${collapsedXS}
        data-cy="data-table-joined-row-titles"
    >
        <caption>
            Data table Matrix - Joined row titles
        </caption>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th rowspan="3" scope="rowgroup">Entry line 1</th>
                <td>Entry line 2</td>
                <td>Entry line 3</td>
                <td>Entry line 4</td>
            </tr>
            <tr>
                <td>Entry line 1</td>
                <td colspan="2">Entry line 2</td>
            </tr>
            <tr>
                <td>Entry line 2</td>
                <td>Entry line 3</td>
                <td>Entry line 4</td>
            </tr>
            <tr>
                <th rowspan="3" scope="rowgroup">Entry line 2</th>
                <td>Entry line 2</td>
                <td>Entry line 3</td>
                <td>Entry line 4</td>
            </tr>
            <tr>
                <td>Entry line 1</td>
                <td colspan="2">Entry line 2</td>
            </tr>
            <tr>
                <td>Entry line 2</td>
                <td>Entry line 3</td>
                <td>Entry line 4</td>
            </tr>
        </tbody>
    </table>
`;
dataTableJoinedRowTitles.storyName = 'vl-data-table - joined row titles';

export const dataTableExpandable = ({
    hover,
    matrix,
    grid,
    zebra,
    uigZebra,
    collapsedM,
    collapsedS,
    collapsedXS,
}: typeof dataTableArgs) => {
    let table;
    customElements.whenDefined('vl-data-table').then(() => {
        table = document.querySelector('#vl-data-table-with-expandable-details');
    });

    return html`
        <table
            is="vl-data-table"
            id="vl-data-table-with-expandable-details"
            ?data-vl-hover=${hover}
            ?data-vl-matrix=${matrix}
            ?data-vl-grid=${grid}
            ?data-vl-zebra=${zebra}
            ?data-vl-uig-zebra=${uigZebra}
            ?data-vl-collapsed-m=${collapsedM}
            ?data-vl-collapsed-s=${collapsedS}
            ?data-vl-collapsed-xs=${collapsedXS}
        >
            <caption>
                Data table
            </caption>
            <thead>
                <tr>
                    <th>Entry Header 1</th>
                    <th>Entry Header 2</th>
                    <th>Entry Header 3</th>
                    <th>Entry Header 4</th>
                </tr>
            </thead>
            <tbody>
                <tr class="vl-data-table__element--disabled">
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td data-title="Entry Header 4">Entry line 4</td>
                </tr>
                <tr class="vl-data-table__element--disabled" data-details-id="details-row1">
                    <td>Details 1</td>
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                </tr>
                <tr data-details-id="details-row2">
                    <td>Details 2</td>
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td data-title="Entry Header 4">Entry line 4</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td>Details 3</td>
                </tr>
            </tbody>
        </table>
    `;
};
dataTableExpandable.storyName = 'vl-data-table - expandable';

export const dataTableExpandableCustomToggleDetailsColumn = ({
    hover,
    matrix,
    grid,
    zebra,
    uigZebra,
    collapsedM,
    collapsedS,
    collapsedXS,
}: typeof dataTableArgs) => {
    let table;
    customElements.whenDefined('vl-data-table').then(() => {
        table = document.querySelector('#vl-data-table-with-expandable-details');
    });

    return html`
        <table
            is="vl-data-table"
            id="vl-data-table-with-expandable-details"
            ?data-vl-hover=${hover}
            ?data-vl-matrix=${matrix}
            ?data-vl-grid=${grid}
            ?data-vl-zebra=${zebra}
            ?data-vl-uig-zebra=${uigZebra}
            ?data-vl-collapsed-m=${collapsedM}
            ?data-vl-collapsed-s=${collapsedS}
            ?data-vl-collapsed-xs=${collapsedXS}
        >
            <caption>
                Data table
            </caption>
            <thead>
                <tr>
                    <th>Entry Header 1</th>
                    <th>Entry Header 2</th>
                    <th>Entry Header 3</th>
                    <th>Entry Header 4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td data-title="Entry Header 4">Entry line 4</td>
                    <td with-expand-details>
                        <span
                            @click=${() => {
                                table.toggleDetails('details-row1');
                            }}
                            >click to toggle details</span
                        >
                    </td>
                </tr>
                <tr data-details-id="details-row1">
                    <td>Details 1</td>
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td with-expand-details>
                        <span
                            @click=${() => {
                                table.toggleDetails('details-row2');
                            }}
                            >click to toggle details</span
                        >
                    </td>
                </tr>
                <tr data-details-id="details-row2">
                    <td>Details 2</td>
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td data-title="Entry Header 4">Entry line 4</td>
                    <td with-expand-details>
                        <span
                            @click=${() => {
                                table.toggleDetails('details-row3');
                            }}
                            >click to toggle details</span
                        >
                    </td>
                </tr>
                <tr data-details-id="details-row3">
                    <td>Details 3</td>
                </tr>
            </tbody>
        </table>
    `;
};
dataTableExpandableCustomToggleDetailsColumn.storyName = 'vl-data-table - expandable custom toggle details column';
