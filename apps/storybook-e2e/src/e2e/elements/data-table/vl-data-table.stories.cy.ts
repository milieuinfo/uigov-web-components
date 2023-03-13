const dataTableDefaultUrl =
    'http://localhost:8080/iframe.html?id=elements-data-table--data-table-default&viewMode=story';
const dataTableExpandableUrl =
    'http://localhost:8080/iframe.html?id=elements-data-table--data-table-expandable&viewMode=story';
const dataTableExpandableWithCustomToggleUrl =
    'http://localhost:8080/iframe.html?args=&id=elements-data-table--data-table-expandable-custom-toggle-details-column&viewMode=story';

const shouldHaveDataTableWithHeaders = () => {
    /**
* TODO(@nrwl/cypress): Nesting Cypress commands in a should assertion now throws.
* You should use .then() to chain commands instead.
* More Info: https://docs.cypress.io/guides/references/migration-guide#-should
**/
cy.get('[is="vl-data-table"]')
        .should('have.class', 'vl-data-table')
        .find('thead > tr')
        .children()
        .each((cell, index) => {
            cy.wrap(cell).should('have.text', 'Entry Header ' + (index + 1));
        });
};
const shouldContainDataTableWithColumns = () => {
    /**
* TODO(@nrwl/cypress): Nesting Cypress commands in a should assertion now throws.
* You should use .then() to chain commands instead.
* More Info: https://docs.cypress.io/guides/references/migration-guide#-should
**/
cy.get('[is="vl-data-table"]')
        .should('have.class', 'vl-data-table')
        .find('tbody')
        .children()
        .each((row, rowIndex) => {
            if (!row.attr('data-details-id')) {
                cy.wrap(row)
                    .children()
                    .each((cell, cellIndex) => {
                        if (!cell.children('button').length) {
                            cy.wrap(cell).should('have.text', 'Entry line ' + (cellIndex + 1));
                        } else {
                            cy.wrap(cell).find('button').should('have.class', 'vl-button');
                        }
                    });
            } else {
                cy.wrap(row)
                    .find('td')
                    .should('have.text', 'Details ' + (rowIndex + 1) / 2);
            }
        });
};
describe('story elements / data-table / vl-data-table - default', () => {
    it('should contain a data table with headers', () => {
        cy.visit(`${dataTableDefaultUrl}`);
        shouldHaveDataTableWithHeaders();
    });

    it('should contain a data table with columns', () => {
        cy.visit(`${dataTableDefaultUrl}`);
        shouldContainDataTableWithColumns();
    });

    it('should contain a data table with hover styling', () => {
        cy.visit(`${dataTableDefaultUrl}&args=hover:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--hover');
    });

    it('should contain a data table with a matrix', () => {
        cy.visit(`${dataTableDefaultUrl}&args=matrix:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--matrix');
    });

    it('should contain a data table with a grid', () => {
        cy.visit(`${dataTableDefaultUrl}&args=grid:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--grid');
    });

    it('should contain a data table with a zebra grid', () => {
        cy.visit(`${dataTableDefaultUrl}&args=zebra:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--zebra');
    });

    it('should contain a data table that collapsed on the medium breakpoint', () => {
        cy.visit(`${dataTableDefaultUrl}&args=collapsedM:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-m');
    });

    it('should contain a data table that collapsed on the small breakpoint', () => {
        cy.visit(`${dataTableDefaultUrl}&args=collapsedS:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-s');
    });

    it('should contain a data table that collapsed on the extra small breakpoint', () => {
        cy.visit(`${dataTableDefaultUrl}&args=collapsedXS:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-xs');
    });
});

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
    cy.get('[is="vl-data-table"]')
        .find('tbody > tr')
        .first()
        .find('td')
        .last()
        .find('button')
        .click();
};

describe('story elements / data-table / vl-data-table - expandable', () => {
    it('should contain a data table with headers', () => {
        cy.visit(`${dataTableExpandableUrl}`);
        shouldHaveDataTableWithHeaders();
    });

    it('should contain a data table with columns', () => {
        cy.visit(`${dataTableExpandableUrl}`);
        shouldContainDataTableWithColumns();
    });

    it('should contain a data table with hover styling', () => {
        cy.visit(`${dataTableExpandableUrl}&args=hover:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--hover');
    });

    it('should contain a data table with a matrix', () => {
        cy.visit(`${dataTableExpandableUrl}&args=matrix:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--matrix');
    });

    it('should contain a data table with a grid', () => {
        cy.visit(`${dataTableExpandableUrl}&args=grid:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--grid');
    });

    it('should contain a data table with a zebra grid', () => {
        cy.visit(`${dataTableExpandableUrl}&args=zebra:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--zebra');
    });

    it('should contain a data table that collapsed on the medium breakpoint', () => {
        cy.visit(`${dataTableExpandableUrl}&args=collapsedM:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-m');
    });

    it('should contain a data table that collapsed on the small breakpoint', () => {
        cy.visit(`${dataTableExpandableUrl}&args=collapsedS:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-s');
    });

    it('should contain a data table that collapsed on the extra small breakpoint', () => {
        cy.visit(`${dataTableExpandableUrl}&args=collapsedXS:true`);
        cy.get('[is="vl-data-table"]')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-xs');
    });

    it('should toggle expanding a detail row when clicking the button', () => {
        cy.visit(`${dataTableExpandableUrl}`);

        shouldDetailsRowBeVisible(false);
        toggleDetailsButton();
        shouldDetailsRowBeVisible(true);
        toggleDetailsButton();
        shouldDetailsRowBeVisible(false);
    });
});

describe('story elements / data-table / vl-data-table - expandable with custom button', () => {
    it('should toggle expanding a detail row when clicking the button', () => {
        cy.visit(`${dataTableExpandableWithCustomToggleUrl}`);

        shouldDetailsRowBeVisible(false);
        toggleDetailsButton();
        shouldDetailsRowBeVisible(true);
        toggleDetailsButton();
        shouldDetailsRowBeVisible(false);
    });
});
