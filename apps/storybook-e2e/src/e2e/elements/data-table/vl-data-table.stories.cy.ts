const dataTableDefaultUrl =
    'http://localhost:8080/iframe.html?id=elements-data-table--data-table-default&viewMode=story';

describe('story elements / data-table / vl-data-table - default', () => {
    it('should contain a data table', () => {
        cy.visit(`${dataTableDefaultUrl}`);
        cy.getDataCy('data-table').should('have.class', 'vl-data-table');
    });

    it('should contain a data table with headers', () => {
        cy.visit(`${dataTableDefaultUrl}`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .getDataCy('data-table-header-1')
            .contains('Entry Header 1')
            .getDataCy('data-table-header-2')
            .contains('Entry Header 2')
            .getDataCy('data-table-header-3')
            .contains('Entry Header 3')
            .getDataCy('data-table-header-4')
            .contains('Entry Header 4');
    });

    it('should contain a data table with columns', () => {
        cy.visit(`${dataTableDefaultUrl}`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .getDataCy('data-table-body-row-1')
            .children()
            .each(($el, index) => {
                cy.wrap($el)
                    .invoke('text')
                    .then((el) => {
                        expect(el).contains('Entry line ' + (index + 1));
                    });
            })
            .getDataCy('data-table-body-row-2')
            .children()
            .each(($el, index) => {
                cy.wrap($el)
                    .invoke('text')
                    .then((el) => {
                        expect(el).contains('Entry line ' + (index + 1));
                    });
            })
            .getDataCy('data-table-body-row-3')
            .children()
            .each(($el, index) => {
                cy.wrap($el)
                    .invoke('text')
                    .then((el) => {
                        expect(el).contains('Entry line ' + (index + 1));
                    });
            });
    });

    it('should contain a data table with hover styling', () => {
        cy.visit(`${dataTableDefaultUrl}&args=hover:true`);
        cy.getDataCy('data-table').should('have.class', 'vl-data-table').should('have.class', 'vl-data-table--hover');
    });

    it('should contain a data table with a matrix', () => {
        cy.visit(`${dataTableDefaultUrl}&args=matrix:true`);
        cy.getDataCy('data-table').should('have.class', 'vl-data-table').should('have.class', 'vl-data-table--matrix');
    });

    it('should contain a data table with a grid', () => {
        cy.visit(`${dataTableDefaultUrl}&args=grid:true`);
        cy.getDataCy('data-table').should('have.class', 'vl-data-table').should('have.class', 'vl-data-table--grid');
    });

    it('should contain a data table with a zebra grid', () => {
        cy.visit(`${dataTableDefaultUrl}&args=zebra:true`);
        cy.getDataCy('data-table').should('have.class', 'vl-data-table').should('have.class', 'vl-data-table--zebra');
    });

    it('should contain a data table that collapsed on the medium breakpoint', () => {
        cy.visit(`${dataTableDefaultUrl}&args=collapsedM:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-m');
    });

    it('should contain a data table that collapsed on the small breakpoint', () => {
        cy.visit(`${dataTableDefaultUrl}&args=collapsedS:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-s');
    });

    it('should contain a data table that collapsed on the extra small breakpoint', () => {
        cy.visit(`${dataTableDefaultUrl}&args=collapsedXS:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-xs');
    });
});
