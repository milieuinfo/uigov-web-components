import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlPopoverActionListComponent, VlPopoverComponent } from './index';
import { html, nothing } from 'lit';
import { VlPopoverActionComponent } from './vl-popover-action.component';
import { action } from '@storybook/addon-actions';

registerWebComponents([VlPopoverComponent, VlPopoverActionComponent, VlPopoverActionListComponent]);

const mountDefault = ({
    trigger,
    contentPadding,
    open,
    placement,
    hideArrow,
    hideOnClick,
    distance,
}: {
    trigger?: string;
    contentPadding?: string;
    open?: boolean;
    placement?: string;
    hideArrow?: boolean;
    hideOnClick?: boolean;
    distance?: number;
}) => {
    return cy.mount(html`
        <a is="vl-link" id="btn-acties">Acties</a>
        <vl-popover
            for="btn-acties"
            open=${open || nothing}
            placement=${placement || nothing}
            trigger=${trigger || nothing}
            hide-arrow=${hideArrow || nothing}
            hide-on-click=${hideOnClick || nothing}
            distance=${distance || nothing}
            content-padding=${contentPadding || nothing}
        >
            <vl-popover-action-list
                @click=${(event: CustomEvent) => {
                    const actionElement = event.target as VlPopoverActionComponent;
                    action('click')('vl-popover-action clicked > ' + actionElement.action);
                }}
            >
                <vl-popover-action icon="search" .action=${'search'}>Zoeken</vl-popover-action>
                <vl-popover-action icon="bell" .action=${'report'}>Rapportenoverzicht</vl-popover-action>
                <vl-popover-action icon="pin" .action=${'locate'}>Vind locatie</vl-popover-action>
            </vl-popover-action-list>
        </vl-popover>
    `);
};

const mountHover = ({
    trigger,
    contentPadding,
    open,
    placement,
    hideArrow,
    hideOnClick,
    distance,
}: {
    trigger?: string;
    contentPadding?: string;
    open?: boolean;
    placement?: string;
    hideArrow?: boolean;
    hideOnClick?: boolean;
    distance?: number;
}) => {
    cy.mount(html`
        <button id="btn-close" aria-describedby="tooltip" is="vl-button">Hover over me</button>
        <vl-popover
            for="btn-close"
            open=${open || nothing}
            placement=${placement || nothing}
            trigger=${trigger || nothing}
            hide-arrow=${hideArrow || nothing}
            hide-on-click=${hideOnClick || nothing}
            distance=${distance || nothing}
            content-padding=${contentPadding || nothing}
        >
            Een boodschap die context geeft.
        </vl-popover>
    `);
};

describe('component vl-popover - default', () => {
    it('should mount', () => {
        mountDefault({});

        cy.get('vl-popover');
    });

    it('should be accessible', () => {
        mountDefault({});

        cy.injectAxe();
        cy.get('a#btn-acties').click({ force: true });
        cy.checkA11y('vl-popover');
    });

    it('should open', () => {
        mountDefault({});

        cy.get('a#btn-acties').click();

        cy.get('vl-popover').should('have.attr', 'open');
        cy.get('a#btn-acties').click({ force: true });
        cy.get('vl-popover').should('not.have.attr', 'open');
    });

    it('should close when clicking an action', () => {
        mountDefault({ hideOnClick: true });

        cy.get('a#btn-acties').click();
        cy.get('vl-popover').should('have.attr', 'open');
        cy.get('vl-popover').find('vl-popover-action').first().click({ force: true });
        cy.get('vl-popover').should('not.have.attr', 'open');
    });

    it('should not close when clicking an action', () => {
        mountDefault({});

        cy.get('a#btn-acties').click();
        cy.get('vl-popover').should('have.attr', 'open');
        cy.get('vl-popover').find('vl-popover-action').first().click({ force: true });
        cy.get('vl-popover').should('have.attr', 'open');
    });

    it('should have default bottom placement', () => {
        mountDefault({});

        cy.get('a#btn-acties').click();
        cy.get('vl-popover').should('have.attr', 'placement', 'bottom');
    });
});

describe('story vl-popover hover', () => {
    beforeEach(() => {
        mountHover({ trigger: 'hover' });
    });

    it('should be accessible', () => {
        cy.injectAxe();
        cy.get('button#btn-close').trigger('mouseover');
        cy.checkA11y('vl-popover');
    });

    it('should open', () => {
        cy.get('button#btn-close').trigger('mouseover');
        cy.get('vl-popover').should('have.attr', 'open');
    });

    it('should have default bottom placement', () => {
        cy.get('button#btn-close').trigger('mouseover');
        cy.get('vl-popover').should('have.attr', 'placement', 'bottom');
    });
});
