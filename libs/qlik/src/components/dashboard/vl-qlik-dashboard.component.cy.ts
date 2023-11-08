import {html} from 'lit';
import {registerWebComponents} from '@domg-wc/common-utilities';
import {VlQlikDashboardComponent} from "./vl-qlik-dashboard.component";
import {VlLayoutElement, VlRegionElement} from "@domg-wc/elements";

import {Qlik} from '@domg/qlik-lib';
import {until} from "lit/directives/until.js";
import viz_without_views from "../../utils/stories/visuals-without-views.json";
import filters from "../../utils/stories/filters";


registerWebComponents([
    VlRegionElement,
    VlLayoutElement,
    VlQlikDashboardComponent,
]);

async function render(withoutFilters: boolean) {

    const connection = new Qlik("omgevingsloketrapport.omgeving.vlaanderen.be", "594c04b6-f319-4cb9-962c-24b0f7aa6f5e");
    await connection.init();
    if (withoutFilters) {
        return html`
            <section is="vl-region">
                <div is="vl-layout">
                    <vl-qlik-dashboard .connection="${connection}"
                                       .visuals="${viz_without_views}"></vl-qlik-dashboard>
                </div>
            </section>`;
    }
    return html`
        <section is="vl-region">
            <div is="vl-layout">
                <vl-qlik-dashboard .connection="${connection}" .visuals="${viz_without_views}"
                                   .filters="${filters}"></vl-qlik-dashboard>
            </div>
        </section>`;
}

describe('qlik visual without filters', () => {
    beforeEach(() => {
        cy.viewport(960, 1440);

        cy.mount(html`
            ${until(render(true), html`
                <vl-loader data-vl-text>Visualisatie aan het laden</vl-loader>`)}`);
    });

    it('empty filters', () => {
        cy.get('vl-qlik-dashboard')
        .shadow()
        .find('div[is="vl-search-filter"]')
        .should('not.exist')
    });

    it('non empty visuals', () => {
        viz_without_views.flatMap(vis => vis.map(v => v.id)).forEach(vId => {
            cy.get('vl-qlik-dashboard')
            .shadow()
            .find(`vl-qlik-visual[qlik-id="${vId}"]`)
            .shadow()
            .find(`div[id="visual-${vId}"]`)
            .children()
            .should('not.be.empty');
        })
    });

});

describe('qlik visual with filters', () => {
    beforeEach(() => {
        cy.viewport(960, 1440);

        cy.mount(html`
            ${until(render(false), html`
                <vl-loader data-vl-text>Visualisatie aan het laden</vl-loader>`)}`);
    });

    it('non empty filters', () => {
        cy.get('vl-qlik-dashboard')
        .shadow()
        .find('div[is="vl-search-filter"]')
        .should('exist')

        filters.map(f => f.filter.name).forEach(fName => {
            cy.get('vl-qlik-dashboard')
            .shadow()
            .find('div[is="vl-search-filter"]')
            .find('label[is="vl-form-message"]')
            .contains(fName)
            .should('exist');
        })
        filters.map(f => f.id).forEach(fId => {
            cy.get('vl-qlik-dashboard')
            .shadow()
            .find('div[is="vl-search-filter"]')
            .find(`select[is="vl-multiselect"][id="${fId}"]`)
            .should('exist');
        })
    });

    it('non empty visuals', () => {
        viz_without_views.flatMap(vis => vis.map(v => v.id)).forEach(vId => {
            cy.get('vl-qlik-dashboard')
            .shadow()
            .find(`vl-qlik-visual[qlik-id="${vId}"]`)
            .shadow()
            .find(`div[id="visual-${vId}"]`)
            .children()
            .should('not.be.empty');
        })
    });

    // TODO: multiselect wordt gepopuleerd na rendering, geen manier gevonden om dit op te vangen.
    // it('change filter', () => {
    //     cy.get('vl-qlik-dashboard')
    //     .shadow()
    //     .find('div[is="vl-search-filter"]')
    //     .find('select[is="vl-multiselect"][id="acteur"]', {timeout: 5000})
    //     .siblings('input')
    //     .should('be.visible')
    //
    //     cy.get('vl-qlik-dashboard')
    //     .shadow()
    //     .find('div[is="vl-search-filter"]')
    //     .find('select[is="vl-multiselect"][id="acteur"]', {timeout: 5000})
    //     .then(async ($el) => {
    //         $el.get().values = ['Alyssa Milano'];
    //         return $el;
    //     })
    // })

});
