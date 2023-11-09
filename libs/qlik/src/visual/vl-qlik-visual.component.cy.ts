import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlQlikVisualComponent } from './vl-qlik-visual.component';
import { VlLayoutElement, VlRegionElement } from '@domg-wc/elements';
import { Qlik, STARDUST } from '@domg/qlik-lib';
import { until } from 'lit/directives/until.js';

registerWebComponents([VlRegionElement, VlLayoutElement, VlQlikVisualComponent]);

async function render() {
    const connection = new Qlik('omgevingsloketrapport.omgeving.vlaanderen.be', '594c04b6-f319-4cb9-962c-24b0f7aa6f5e');
    await connection.init();
    const stardust = await STARDUST(connection.app);

    return html` <section is="vl-region">
        <div is="vl-layout">
            <vl-qlik-visual type="kpi" qlik-id="RXjdD" height="200px" width="200px" .stardust="${stardust}">
            </vl-qlik-visual>
        </div>
    </section>`;
}

describe('qlik visual', () => {
    beforeEach(() => {
        cy.viewport(960, 1440);

        cy.mount(html` ${until(render(), html` <vl-loader data-vl-text>Visualisatie aan het laden</vl-loader>`)}`);
    });

    it('non empty div', () => {
        cy.get('vl-qlik-visual').shadow().find('#visual-RXjdD').children().should('not.be.empty');
    });
});
