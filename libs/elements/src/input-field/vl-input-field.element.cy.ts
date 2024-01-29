import { debounce, registerWebComponents } from '@domg-wc/common-utilities';
import { html } from 'lit';
import { VlInputFieldElement } from './vl-input-field.element';

registerWebComponents([VlInputFieldElement]);

const mountDefault = ({ block = false, disabled = false, error = false, success = false, small = false }) => {
    return cy.mount(html` <label for="input-field">Ingave:</label>
        <input
            id="input-field"
            is="vl-input-field"
            ?data-vl-block=${block}
            ?data-vl-disabled=${disabled}
            ?data-vl-error=${error}
            ?data-vl-success=${success}
            ?data-vl-small=${small}
            data-cy="input-field"
        />`);
};

describe('vl-input-field - component', () => {
    beforeEach(() => {
        mountDefault({});
    });

    it('should mount', () => {
        cy.get('input[is="vl-input-field"]').should('have.class', 'vl-input-field');
    });

    it('should be accessible', () => {
        cy.injectAxe();
        cy.checkA11y('input[is="vl-input-field"]');
    });
});

describe('vl-input-field - properties reflect ', () => {
    it('should reflect the <block> attribute', () => {
        mountDefault({ block: true });

        cy.get('input[is="vl-input-field"]').should('have.attr', 'data-vl-block');
    });

    it('should reflect the <disabled> attribute', () => {
        mountDefault({ disabled: true });

        cy.get('input[is="vl-input-field"]').should('have.attr', 'data-vl-disabled');
    });

    it('should reflect the <error> attribute', () => {
        mountDefault({ error: true });

        cy.get('input[is="vl-input-field"]').should('have.attr', 'data-vl-error');
    });

    it('should reflect the <success> attribute', () => {
        mountDefault({ success: true });

        cy.get('input[is="vl-input-field"]').should('have.attr', 'data-vl-success');
    });

    it('should reflect the <small> attribute', () => {
        mountDefault({ small: true });

        cy.get('input[is="vl-input-field"]').should('have.attr', 'data-vl-small');
    });
});

describe('vl-input-field - functionality', () => {
    it('should allow me to type in the input field', () => {
        mountDefault({});

        cy.get('input[is="vl-input-field"]').type('Hello World');

        cy.get('input[is="vl-input-field"]').should('have.value', 'Hello World');
    });
});

describe('vl-input-field - with debounce ', () => {
    const mountWithDebounce = (debounceDelay: number) => {
        const debounceSpy = cy.spy().as('debounceSpy');
        const debouncedFunction = debounce(debounceSpy, debounceDelay);

        return cy.mount(html`
            <label for="input-field">Ingave:</label>
            <input id="input-field" is="vl-input-field" data-cy="input-field" @input=${debouncedFunction} />
        `);
    };

    it('should debounce when the <debounce> helper function is passed', () => {
        mountWithDebounce(300);

        cy.get('input[is="vl-input-field"]').type('Hello World', { delay: 50 });
        cy.wait(500); // wacht langer dan de debounceDelay

        cy.get('@debounceSpy').should('have.been.calledOnce');
        cy.get('@debounceSpy').its('callCount').should('be.lessThan', 'Hello World'.length);
    });
});
