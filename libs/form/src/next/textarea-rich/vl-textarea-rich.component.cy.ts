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

    it('should dispatch both vl-input & vl-change events on input', () => {
        cy.mount(html`<vl-textarea-next></vl-textarea-next>`);
        cy.createStubForEvent('vl-textarea-next', 'vl-input');
        cy.createStubForEvent('vl-textarea-next', 'vl-change');

        cy.get('vl-textarea-next').shadow().find('textarea').type('test');
        cy.get('@vl-input').its('callCount').should('eq', 4);
        cy.get('@vl-input').its('lastCall.args.0.detail').should('deep.equal', { value: 'test' });
        // change event wordt ook gedispatched bij focus verandering, daarom 1 extra
        cy.get('@vl-change').its('callCount').should('eq', 5);
        cy.get('@vl-change').its('lastCall.args.0.detail').should('deep.equal', { value: 'test' });
    });

    it('should dispatch vl-change event on programmatic value change but no vl-input events', () => {
        cy.mount(html`<vl-textarea-next></vl-textarea-next>`);
        cy.createStubForEvent('vl-textarea-next', 'vl-change');
        cy.createStubForEvent('vl-textarea-next', 'vl-input');

        cy.get('vl-textarea-next').invoke('attr', 'value', 'test');
        cy.get('@vl-change').its('callCount').should('eq', 1);
        cy.get('@vl-change').its('lastCall.args.0.detail').should('deep.equal', { value: 'test' });
        cy.get('@vl-input').its('callCount').should('eq', 0);
    });
});
