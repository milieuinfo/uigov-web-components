import {html} from 'lit';
import {registerWebComponents} from '@domg-wc/common-utilities';
import {VlQlikInfoblockComponent} from "./vl-qlik-infoblock.component";
import {VlLayoutElement, VlRegionElement} from "@domg-wc/elements";

import {Qlik} from '@domg/qlik-lib';
import {until} from "lit/directives/until.js";
import viz_without_views from "./stories/visuals.json"


registerWebComponents([
    VlRegionElement,
    VlLayoutElement,
    VlQlikInfoblockComponent,
]);

async function render() {
    const connection = new Qlik("omgevingsloketrapport.omgeving.vlaanderen.be", "594c04b6-f319-4cb9-962c-24b0f7aa6f5e");
    await connection.init();
    return html`
        <vl-qlik-infoblock title="TEST" icon="calendar" .connection="${connection}" .visuals="${viz_without_views}">
            <span>Do something</span>
        </vl-qlik-infoblock>`;
}

describe('qlik infoblock', () => {
    beforeEach(() => {
        cy.viewport(960, 1440);

        cy.mount(html`
            ${until(render(), html`
                <vl-loader data-vl-text>Visualisatie aan het laden</vl-loader>`)}`);
    });

    it('child components rendered', () => {
        // info block content
        cy.get('vl-qlik-infoblock')
        .shadow()
        .find('vl-infoblock')
        .should('exist')

        cy.get('vl-qlik-infoblock')
        .shadow()
        .find('vl-infoblock')
        .should('have.attr', 'data-vl-title', 'TEST')
        .should('have.attr', 'data-vl-icon', 'calendar')

        cy.get('vl-qlik-infoblock')
        .shadow()
        .find('vl-infoblock')
        .find('slot')
        .then(($el) => $el.get()[0].assignedNodes()[1])
        .should('contain.text', 'Do something')

        // info tile content

        cy.get('vl-qlik-infoblock')
        .shadow()
        .find('vl-infoblock')
        .find('vl-info-tile')
        .should('exist')

        cy.get('vl-qlik-infoblock')
        .shadow()
        .find('vl-infoblock')
        .find('vl-info-tile')
        .find('[slot="title"]')
        .should('contain.text', 'Aantal toezichthouders')

        cy.get('vl-qlik-infoblock')
        .shadow()
        .find('vl-infoblock')
        .find('vl-info-tile')
        .find('[slot="content"]')
        .find('img')
        .should('exist')

        cy.get('vl-qlik-infoblock')
        .shadow()
        .find('vl-infoblock')
        .find('vl-info-tile')
        .find('[slot="content"]')
        .find('vl-qlik-visual[qlik-id="RXjdD"]')
        .should('exist')

        cy.get('vl-qlik-infoblock')
        .shadow()
        .find('vl-infoblock')
        .find('vl-info-tile')
        .find('[slot="content"]')
        .find('vl-qlik-visual[qlik-id="RXjdD"]')
        .should('have.attr', 'type', 'kpi')
        .should('have.attr', 'height', '50px')
    });
});
