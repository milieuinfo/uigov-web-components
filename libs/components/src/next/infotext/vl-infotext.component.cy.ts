import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlInfotextComponent } from './vl-infotext.component';

registerWebComponents([VlInfotextComponent]);

describe('component - vl-infotext-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-infotext-next></vl-infotext-next>`);

        cy.get('vl-infotext-next').shadow();
    });

    it('should be accessible', () => {
        cy.mount(html`
            <vl-infotext-next>
                <span slot="value">32</span>
                <span slot="text">Bezoekers per dag</span>
            </vl-infotext-next>
        `);
        cy.injectAxe();

        cy.checkA11y('vl-infotext-next');
    });

    it('should set value', () => {
        cy.mount(html`
            <vl-infotext-next>
                <span slot="value">32</span>
                <span slot="text">Bezoekers per dag</span>
            </vl-infotext-next>
        `);

        cy.get('vl-infotext-next').find('span[slot="value"]').contains('32');
        cy.get('vl-infotext-next').shadow().find('.vl-infotext__value').contains('32');
    });

    it('should set text', () => {
        cy.mount(html`
            <vl-infotext-next>
                <span slot="value">32</span>
                <span slot="text">Bezoekers per dag</span>
            </vl-infotext-next>
        `);

        cy.get('vl-infotext-next').find('span[slot="text"]').contains('Bezoekers per dag');
        cy.get('vl-infotext-next').shadow().find('.vl-infotext__text').find('slot[name="text"]');
    });

    it('should set href', () => {
        cy.mount(html`
            <vl-infotext-next href="https://www.vlaanderen.be">
                <span slot="value">32</span>
                <span slot="text">Bezoekers per dag</span>
            </vl-infotext-next>
        `);

        cy.get('vl-infotext-next').should('have.attr', 'href', 'https://www.vlaanderen.be');
        cy.get('vl-infotext-next').shadow().find('a[href="https://www.vlaanderen.be"]');
    });

    it('should set external', () => {
        cy.mount(html`
            <vl-infotext-next href="https://www.vlaanderen.be" external>
                <span slot="value">32</span>
                <span slot="text">Bezoekers per dag</span>
            </vl-infotext-next>
        `);

        cy.get('vl-infotext-next').should('have.attr', 'external', '');
        cy.get('vl-infotext-next').shadow().find('a[target="_blank"]');
    });

    it('should format value', () => {
        cy.mount(html`
            <vl-infotext-next>
                <span slot="value">3200</span>
                <span slot="text">Bezoekers per dag</span>
            </vl-infotext-next>
        `);

        cy.get('vl-infotext-next').find('span[slot="value"]').contains('3200');
        cy.get('vl-infotext-next').shadow().find('.vl-infotext__value').contains('3.200');
    });

    it('should alter font-size based on value length', () => {
        cy.mount(html`
            <vl-infotext-next>
                <span slot="value">32</span>
                <span slot="text">Bezoekers per dag</span>
            </vl-infotext-next>
        `);

        cy.get('vl-infotext-next')
            .shadow()
            .find('.vl-infotext__value')
            .shouldHaveComputedStyle({ style: 'font-size', value: '24px' });
        cy.get('vl-infotext-next').find('span[slot="value"]').invoke('text', '320000');
        cy.get('vl-infotext-next')
            .shadow()
            .find('.vl-infotext__value')
            .shouldHaveComputedStyle({ style: 'font-size', value: '24px', not: true });
    });
});
