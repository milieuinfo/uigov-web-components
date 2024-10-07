import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common';
import { VlIconComponent } from './vl-icon.component';

registerWebComponents([VlIconComponent]);

describe('component - vl-icon-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-icon-next icon="calendar"></vl-icon-next>`);

        cy.get('vl-icon-next').shadow().find('span.vl-icon');
    });

    it('should be accessible', () => {
        cy.mount(html`<vl-icon-next icon="calendar"></vl-icon-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-icon-next');
    });

    it('should set icon', () => {
        cy.mount(html`<vl-icon-next icon="calendar"></vl-icon-next>`);

        cy.get('vl-icon-next').should('have.attr', 'icon', 'calendar');
        cy.get('vl-icon-next').shadow().find('span.vl-icon').should('have.class', 'vl-icon--calendar');
    });

    it('should set small', () => {
        cy.mount(html`<vl-icon-next icon="calendar" small></vl-icon-next>`);

        cy.get('vl-icon-next').should('have.attr', 'small', '');
        cy.get('vl-icon-next').shadow().find('span.vl-icon').should('have.class', 'vl-icon--small');
    });

    it('should set large', () => {
        cy.mount(html`<vl-icon-next icon="calendar" large></vl-icon-next>`);

        cy.get('vl-icon-next').should('have.attr', 'large', '');
        cy.get('vl-icon-next').shadow().find('span.vl-icon').should('have.class', 'vl-icon--large');
    });

    it('should set light', () => {
        cy.mount(html`<vl-icon-next icon="calendar" light></vl-icon-next>`);

        cy.get('vl-icon-next').should('have.attr', 'light', '');
        cy.get('vl-icon-next').shadow().find('span.vl-icon').should('have.class', 'vl-icon--light');
    });

    it('should set right-margin', () => {
        cy.mount(html`<vl-icon-next icon="calendar" right-margin></vl-icon-next>`);

        cy.get('vl-icon-next').should('have.attr', 'right-margin', '');
        cy.get('vl-icon-next').shadow().find('span.vl-icon').should('have.class', 'vl-icon--right-margin');
    });

    it('should set left-margin', () => {
        cy.mount(html`<vl-icon-next icon="calendar" left-margin></vl-icon-next>`);

        cy.get('vl-icon-next').should('have.attr', 'left-margin', '');
        cy.get('vl-icon-next').shadow().find('span.vl-icon').should('have.class', 'vl-icon--left-margin');
    });

    it('should set clickable', () => {
        cy.mount(html`<vl-icon-next icon="calendar" clickable></vl-icon-next>`);

        cy.get('vl-icon-next').should('have.attr', 'clickable', '');
        cy.get('vl-icon-next').shadow().find('span.vl-icon').should('have.class', 'vl-icon--clickable');
    });

    it('should display icon', () => {
        // Test dat het font correct geladen wordt, niet dat het juiste icoon getoond wordt.
        cy.mount(html`<vl-icon-next icon="calendar"></vl-icon-next>`);
        cy.viewport(1000, 1000);

        cy.get('vl-icon-next')
            .shadow()
            .find('span.vl-icon')
            .shouldHaveComputedStyle({ style: 'width', value: '18px' })
            .shouldHaveComputedStyle({ style: 'height', value: '18px' });
    });
});
