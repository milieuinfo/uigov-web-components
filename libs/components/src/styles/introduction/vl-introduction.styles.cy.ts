import { html } from 'lit';
import introductionStyle from './vl-introduction.css';
import { globalStyles } from '@domg-wc/common-utilities/css/global-styles-decorator';
import { extractCSSVariables } from '@domg-wc/common-utilities';

describe('style - vl-introduction-next', () => {
    let cssVars: { [key: string]: { value: string; computedValue: string; referencedValue?: string } };

    before(() => {
        cy.loadCSSResult(...globalStyles, introductionStyle).then(() => {
            cssVars = extractCSSVariables();
        });
    });

    it('should have default style', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <p class="vl-introduction-next">
                Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed
                posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus.
            </p>
        `);

        cy.get('.vl-introduction-next')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ not: true, style: 'font-weight;', value: '500' })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '22px' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '33px' });
    });

    it('should have bold style', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <p class="vl-introduction-next vl-introduction-next--bold">
                Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed
                posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus.
            </p>
        `);

        cy.get('.vl-introduction-next')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ not: true, style: 'font-weight;', value: '500' })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '22px' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '33px' });
    });

    it('should have responsive font size', () => {
        cy.mount(html`
            <p class="vl-introduction-next">
                Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed
                posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus.
            </p>
        `);

        cy.viewport(1920, 1080);
        cy.get('.vl-introduction-next').shouldHaveComputedStyle({ style: 'font-size', value: '22px' });

        cy.viewport(800, 600);
        cy.get('.vl-introduction-next').shouldHaveComputedStyle({ style: 'font-size', value: '20px' });

        cy.viewport(500, 500);
        cy.get('.vl-introduction-next').shouldHaveComputedStyle({ style: 'font-size', value: '18px' });
    });
});
