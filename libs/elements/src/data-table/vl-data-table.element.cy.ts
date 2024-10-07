import { registerWebComponents } from '@domg-wc/common';
import { html } from 'lit';
import { dataTableDefaults } from '../data-table/vl-data-table.defaults';
import { VlDataTable } from '../data-table/vl-data-table.element';

registerWebComponents([VlDataTable]);

const mountDefault = ({
    hover,
    matrix,
    grid,
    zebra,
    uigZebra,
    collapsedM,
    collapsedS,
    collapsedXS,
}: Partial<typeof dataTableDefaults>) =>
    cy.mount(html`
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
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td data-title="Entry Header 4">Entry line 4</td>
                </tr>
            </tbody>
        </table>
    `);

describe('story elements / data-table / vl-data-table - default', () => {
    it('should mount', () => {
        mountDefault({});

        cy.get('[is="vl-data-table"]').should('have.class', 'vl-data-table');
        expect(customElements.get('vl-data-table')).to.not.be.undefined;
    });

    it('should be accessible', () => {
        mountDefault({});
        cy.injectAxe();

        cy.checkA11y('[is="vl-data-table"]');
    });

    it('should contain a data table with headers', () => {
        mountDefault({});

        cy.get('[is="vl-data-table"]').should('have.class', 'vl-data-table');
        cy.get('[is="vl-data-table"]')
            .find('thead > tr')
            .children()
            .each((cell, index) => {
                cy.wrap(cell).should('have.text', 'Entry Header ' + (index + 1));
            });
    });

    it('should contain a data table with columns', () => {
        mountDefault({});

        cy.get('[is="vl-data-table"]').should('have.class', 'vl-data-table');
        cy.get('[is="vl-data-table"]')
            .find('tbody')
            .children()
            .each((row) => {
                if (!row.attr('data-details-id')) {
                    cy.wrap(row)
                        .children()
                        .each((cell, cellIndex) => {
                            if (!cell.children('button').length) {
                                cy.wrap(cell).should('contain.text', 'Entry line ' + (cellIndex + 1));
                            }
                        });
                }
            });
    });

    it('should contain a data table with hover styling', () => {
        mountDefault({ hover: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--hover');
    });

    it('should contain a data table with a matrix', () => {
        mountDefault({ matrix: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--matrix');
    });

    it('should contain a data table with a grid', () => {
        mountDefault({ grid: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--grid');
    });

    it('should contain a data table with a zebra grid', () => {
        mountDefault({ zebra: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--zebra');
    });

    it('should contain a data table that collapsed on the medium breakpoint', () => {
        mountDefault({ collapsedM: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-m');
    });

    it('should contain a data table that collapsed on the small breakpoint', () => {
        mountDefault({ collapsedS: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-s');
    });

    it('should contain a data table that collapsed on the extra small breakpoint', () => {
        mountDefault({ collapsedXS: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-xs');
    });
});

const mountExpandable = ({
    hover,
    matrix,
    grid,
    zebra,
    uigZebra,
    collapsedM,
    collapsedS,
    collapsedXS,
}: Partial<typeof dataTableDefaults>) =>
    cy.mount(html`
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
                </tr>
                <tr data-details-id="details-row1">
                    <td data-title="details-title 1">Title 1: generic details</td>
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                </tr>
                <tr data-details-id="details-row2">
                    <td data-title="details-title 2">Title 2: generic details</td>
                </tr>
                <tr id="multiple-cells">
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td data-title="Entry Header 4">Entry line 4</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td data-title="details-title 3">Title 3: Zij die ter kaperen varen:</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td data-title="naam">Jan</td>
                    <td data-title="familienaam">familienaam</td>
                    <td data-title="telefoon">telefoon</td>
                    <td data-title="adres">adres</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td data-title="naam">Piet</td>
                    <td data-title="familienaam">familienaam</td>
                    <td data-title="telefoon">telefoon</td>
                    <td data-title="adres">adres</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td data-title="naam">Joris</td>
                    <td data-title="familienaam">familienaam</td>
                    <td data-title="telefoon">telefoon</td>
                    <td data-title="adres">adres</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td data-title="naam">Korneel</td>
                    <td data-title="familienaam">familienaam</td>
                    <td data-title="telefoon">telefoon</td>
                    <td data-title="adres">adres</td>
                </tr>
            </tbody>
        </table>
    `);

const shouldDetailsRowBeVisible = (isVisible: boolean, detailRowIndex = 0) => {
    const haveStyle = !isVisible ? 'have.css' : 'not.have.css';
    cy.get('[is="vl-data-table"]')
        .should('have.class', 'vl-data-table')
        .find('tbody')
        .find('[data-details-id]')
        .eq(detailRowIndex)
        .should(haveStyle, 'display', 'none');
};
const toggleDetailsButton = () => {
    cy.get('[is="vl-data-table"]').find('tbody > tr').first().find('td').last().find('button').click();
};

describe('story elements / data-table / vl-data-table - expandable', () => {
    it('should mount', () => {
        mountExpandable({});

        cy.get('[is="vl-data-table"]').should('have.class', 'vl-data-table');
        expect(customElements.get('vl-data-table')).to.not.be.undefined;
    });

    it('should be accessible', () => {
        mountExpandable({});
        cy.injectAxe();

        cy.checkA11y('[is="vl-data-table"]');
    });

    it('should contain a data table with headers', () => {
        mountExpandable({});

        cy.get('[is="vl-data-table"]').should('have.class', 'vl-data-table');
        cy.get('[is="vl-data-table"]')
            .find('thead > tr')
            .children()
            .each((cell, index) => {
                cy.wrap(cell).should('have.text', 'Entry Header ' + (index + 1));
            });
    });

    it('should contain a data table with columns', () => {
        mountExpandable({});

        cy.get('[is="vl-data-table"]').should('have.class', 'vl-data-table');
        cy.get('[is="vl-data-table"]')
            .find('tbody > tr:not([data-details-id])')
            .each((row, rowIndex) => {
                cy.wrap(row)
                    .children()
                    .each((cell, cellIndex) => {
                        if (!cell.children('button').length) {
                            cy.wrap(cell).should('contain.text', 'Entry line ' + (cellIndex + 1));
                        } else {
                            cy.wrap(cell).find('button').should('have.class', 'vl-button');
                        }
                    });
                cy.wrap(row)
                    .next()
                    .find('td')
                    .should('contain.text', 'Title ' + (rowIndex + 1));
            });
    });

    it('should contain a data table with hover styling', () => {
        mountExpandable({ hover: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--hover');
    });

    it('should contain a data table with a matrix', () => {
        mountExpandable({ matrix: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--matrix');
    });

    it('should contain a data table with a grid', () => {
        mountExpandable({ grid: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--grid');
    });

    it('should contain a data table with a zebra grid', () => {
        mountExpandable({ zebra: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--zebra');
    });

    it('should set colspan for expandable row with one cell', () => {
        mountExpandable({});

        cy.get('[is="vl-data-table"]').find('tbody > tr').first().find('td').last().find('button').click();
        cy.get('[is="vl-data-table"]').find('tbody > tr').first().next().find('td').should('have.attr', 'colspan', '5');
    });

    it('should not set colspan for expandable row with multiple cells', () => {
        mountExpandable({});

        cy.get('[is="vl-data-table"]')
            .find('tbody > tr#multiple-cells')
            .first()
            .find('td')
            .last()
            .find('button')
            .click();
        cy.get('[is="vl-data-table"]')
            .find('tbody > tr#multiple-cells')
            .first()
            .next()
            .find('td')
            .should('not.have.attr', 'colspan');
    });

    it('should expand all relevant detail rows when clicking the expand button', () => {
        mountExpandable({});

        cy.get('[is="vl-data-table"]')
            .find('tbody > tr[data-details-id="details-row3"]')
            .should('have.css', 'display', 'none');
        cy.get('[is="vl-data-table"]')
            .find('tbody > tr#multiple-cells')
            .first()
            .find('td')
            .last()
            .find('button')
            .click();
        cy.get('[is="vl-data-table"]')
            .find('tbody > tr[data-details-id="details-row3"]')
            .should('not.have.css', 'display', 'none');
    });

    it('should contain a data table that collapsed on the medium breakpoint', () => {
        mountExpandable({ collapsedM: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-m');
    });

    it('should contain a data table that collapsed on the small breakpoint', () => {
        mountExpandable({ collapsedS: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-s');
    });

    it('should contain a data table that collapsed on the extra small breakpoint', () => {
        mountExpandable({ collapsedXS: true });

        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-xs');
    });

    it('should toggle expanding a detail row when clicking the button', () => {
        mountExpandable({});

        shouldDetailsRowBeVisible(false);
        toggleDetailsButton();
        shouldDetailsRowBeVisible(true);
        toggleDetailsButton();
        shouldDetailsRowBeVisible(false);
    });
});

const mountExpandableCustom = ({
    hover,
    matrix,
    grid,
    zebra,
    uigZebra,
    collapsedM,
    collapsedS,
    collapsedXS,
}: Partial<typeof dataTableDefaults>) =>
    cy.mount(html`
        <table
            is="vl-data-table"
            id="vl-data-table-with-custom-expandable-details"
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
                    <th data-title="Entry Header 2" colspan="2">Entry line 2</th>
                    <th>Entry Header 3</th>
                    <th>Entry Header 4</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tbody>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td data-title="Entry Header 4">Entry line 4</td>
                    <td with-expand-details>
                        <button
                            is="vl-button"
                            @click=${() => {
                                const table = document.querySelector<VlDataTable & Element>(
                                    '#vl-data-table-with-custom-expandable-details'
                                );
                                table?.toggleDetails('details-row1');
                            }}
                        >
                            click to toggle details
                        </button>
                    </td>
                </tr>
                <tr data-details-id="details-row1">
                    <td data-title="details-title 1" colspan="5">
                        <div>
                            <ul>
                                <li>Extra Details 1</li>
                                <li>Extra Details 1</li>
                                <li>Extra Details 1</li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                </tr>
                <tr data-details-id="details-row2">
                    <td data-title="details-title 2" colspan="1">
                        <div>
                            <ul>
                                <li>Extra Details 2</li>
                                <li>Extra Details 2</li>
                                <li>Extra Details 2</li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td data-title="Entry Header 4">Entry line 4</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td data-title="naam">Jan</td>
                    <td data-title="familienaam">familienaam</td>
                    <td data-title="telefoon">telefoon</td>
                    <td data-title="adres">adres</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td data-title="naam">Piet</td>
                    <td data-title="familienaam">familienaam</td>
                    <td data-title="telefoon">telefoon</td>
                    <td data-title="adres">adres</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td data-title="naam">Joris</td>
                    <td data-title="familienaam">familienaam</td>
                    <td data-title="telefoon">telefoon</td>
                    <td data-title="adres">adres</td>
                </tr>
                <tr data-details-id="details-row3">
                    <td data-title="naam">Korneel</td>
                    <td data-title="familienaam">familienaam</td>
                    <td data-title="telefoon">telefoon</td>
                    <td data-title="adres">adres</td>
                </tr>
            </tbody>
        </table>
    `);
describe('story elements / data-table / vl-data-table - expandable with custom button', () => {
    it('should mount', () => {
        mountExpandableCustom({});

        cy.get('[is="vl-data-table"]').should('have.class', 'vl-data-table');
        expect(customElements.get('vl-data-table')).to.not.be.undefined;
    });

    it('should be accessible', () => {
        mountExpandableCustom({});
        cy.injectAxe();

        cy.checkA11y('[is="vl-data-table"]');
    });

    it('should toggle expanding a detail row when clicking the button', () => {
        mountExpandableCustom({});

        shouldDetailsRowBeVisible(false);
        toggleDetailsButton();
        shouldDetailsRowBeVisible(true);
        toggleDetailsButton();
        shouldDetailsRowBeVisible(false);
    });
});
