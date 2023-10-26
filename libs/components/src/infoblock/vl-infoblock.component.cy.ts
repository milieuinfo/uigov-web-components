import { html } from 'lit-html';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlInfoblockComponent } from './index';

registerWebComponents([VlInfoblockComponent]);

const mountDefault = ({ title, content, type, icon }: { title: string; content: string; type: string; icon: string }) =>
    cy.mount(html`
        <vl-infoblock slot="info" data-vl-title=${title} data-vl-type=${type} data-vl-icon=${icon}
            >${content}
        </vl-infoblock>
    `);

export const mountWithSlotElements = ({
    title,
    content,
    type,
}: {
    title: string;
    content: string;
    type: string;
    icon: string;
}) =>
    cy.mount(html`
        <vl-infoblock data-vl-type=${type}>
            <h2 is="vl-h2" slot="title">${title}</h2>
            ${content}
        </vl-infoblock>
    `);

describe('story vl-infoblock - default', () => {
    const title = 'Contactenlijst';
    const content = 'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.';
    const type = 'contact';
    const icon = 'calendar';

    beforeEach(() => {
        mountDefault({ title, content, type, icon });
    });

    it('should mount', () => {
        cy.get('vl-infoblock');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-infoblock');
    });

    it('should contain a title', () => {
        cy.get('vl-infoblock').shadow().find('h2').contains('Contactenlijst');
    });

    it('should contain content', () => {
        cy.get('vl-infoblock').contains(
            'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.'
        );
    });

    it('should contain an infoblock with a custom icon', () => {
        cy.get('vl-infoblock')
            .shadow()
            .find('#infoblock_icon')
            .should('have.class', 'vl-infoblock__header__icon')
            .should('have.attr', 'data-vl-icon', 'calendar');
    });
});

describe('story vl-infoblock - types', () => {
    const title = 'Contactenlijst';
    const content = 'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.';
    const icon = 'calendar';

    const types = ['contact', 'publications', 'faq', 'news', 'timeline'];

    types.forEach((type) => {
        it(`should contain contact type ${type}`, () => {
            mountDefault({ title, content, icon, type });

            cy.get('vl-infoblock')
                .shadow()
                .find('#infoblock-element')
                .should('have.class', 'vl-infoblock')
                .should('have.class', `vl-infoblock--${type}`);
        });
    });
});

describe('story vl-infoblock with slots', () => {
    const title = 'Contactenlijst';
    const content = 'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.';
    const icon = 'calendar';

    beforeEach(() => {
        mountWithSlotElements({ title, content, type: 'contact', icon });
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-infoblock');
    });

    it('should contain an infoblock with a title set through a slot', () => {
        cy.get('vl-infoblock').shadow().find('.vl-infoblock__title');
    });
});
