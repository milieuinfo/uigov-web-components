import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlTextareaRichComponent } from './vl-textarea-rich.component';

registerWebComponents([VlTextareaRichComponent]);

describe('component - vl-textarea-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-textarea-rich-next></vl-textarea-rich-next>`);

        cy.get('vl-textarea-rich-next').shadow().find('textarea');
    });

    it('should be accessible', () => {
        cy.mount(html`<vl-textarea-rich-next label="test-label"></vl-textarea-rich-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-textarea-rich-next', {
            // aria-prohibited-attr rule bewust uitgezet: fout in TinyMCE
            rules: {
                'aria-prohibited-attr': { enabled: false },
            },
        });
    });

    it('should set toolbar', () => {
        cy.mount(html`<vl-textarea-rich-next toolbar="h1 h2 h3"></vl-textarea-rich-next>`);

        cy.get('vl-textarea-rich-next')
            .shadow()
            .find('.tox-editor-header')
            .find('.tox-tbtn.tox-tbtn--select')
            .find('.tox-tbtn__select-label')
            .contains('H1');

        cy.get('vl-textarea-rich-next')
            .shadow()
            .find('.tox-editor-header')
            .find('.tox-tbtn.tox-tbtn--select')
            .find('.tox-tbtn__select-label')
            .contains('H2');

        cy.get('vl-textarea-rich-next')
            .shadow()
            .find('.tox-editor-header')
            .find('.tox-tbtn.tox-tbtn--select')
            .find('.tox-tbtn__select-label')
            .contains('H3');
    });

    it('should set plugins', () => {
        cy.mount(
            html`<vl-textarea-rich-next toolbar="link numlist bullist" plugins="link lists"></vl-textarea-rich-next>`
        );

        cy.get('vl-textarea-rich-next')
            .shadow()
            .find('.tox-editor-header')
            .find('.tox-tbtn')
            .first()
            .should('have.attr', 'title', 'Link invoegen/bewerken');

        cy.get('vl-textarea-rich-next')
            .shadow()
            .find('.tox-editor-header')
            .find('.tox-tbtn')
            .first()
            .next()
            .should('have.attr', 'title', 'Geordende lijst');

        cy.get('vl-textarea-rich-next')
            .shadow()
            .find('.tox-editor-header')
            .find('.tox-tbtn')
            .first()
            .next()
            .next()
            .should('have.attr', 'title', 'Ongeordende lijst');
    });

    it('should set preview', () => {
        cy.mount(html`<vl-textarea-rich-next preview></vl-textarea-rich-next>`);

        cy.get('vl-textarea-rich-next').shadow().find('.tox-editor-header').should('not.be.visible');
    });

    it('should dispatch vl-input event on input', () => {
        cy.mount(html`<vl-textarea-rich-next></vl-textarea-rich-next>`);
        cy.createStubForEvent('vl-textarea-rich-next', 'vl-input');

        cy.get('vl-textarea-rich-next').invoke('attr', 'value', 'test');
        cy.get('@vl-input').its('callCount').should('eq', 1);
        cy.get('@vl-input').its('firstCall.args.0.detail').should('deep.equal', { value: 'test' });
    });
});
