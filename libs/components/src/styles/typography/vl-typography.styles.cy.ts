import { html } from 'lit';
import typographyStyles from './vl-typography.css';
import { globalStyles } from '@domg-wc/common-utilities/css/global-styles-decorator';
import { extractCSSVariables } from '@domg-wc/common-utilities';

describe('style - vl-typography-next', () => {
    let cssVars: { [key: string]: { value: string; computedValue: string; referencedValue?: string } };

    before(() => {
        cy.loadCSSResult(...globalStyles, ...typographyStyles).then(() => {
            cssVars = extractCSSVariables();
        });
    });

    it('should have responsive font size', () => {
        cy.mount(html`
            <p class="vl-typography-next">
                Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed
                posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus.
            </p>
        `);

        cy.viewport(1920, 1080);
        cy.get('.vl-typography-next').shouldHaveComputedStyle({ style: 'font-size', value: '22px' });

        cy.viewport(800, 600);
        cy.get('.vl-typography-next').shouldHaveComputedStyle({ style: 'font-size', value: '20px' });

        cy.viewport(500, 500);
        cy.get('.vl-typography-next').shouldHaveComputedStyle({ style: 'font-size', value: '18px' });
    });

    it('should have correct h1 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h1>Heading 1</h1>
            </div>
        `);

        cy.get('.vl-typography-next h1')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '44px' })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '56px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '60px' });
    });

    it('should have correct h2 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h2>Heading 2</h2>
            </div>
        `);

        cy.get('.vl-typography-next h2')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '32px' })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '40px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '30px' });
    });

    it('should have correct h3 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h3>Heading 3</h3>
            </div>
        `);

        cy.get('.vl-typography-next h3')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '26px' })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '36px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '30px' });
    });

    it('should have correct h4 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h4>Heading 4</h4>
            </div>
        `);

        cy.get('.vl-typography-next h4')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '22px' })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '33px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '30px' });
    });

    it('should have correct h5 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h5>Heading 5</h5>
            </div>
        `);

        cy.get('.vl-typography-next h5')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '18px' })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '27px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '30px' });
    });

    it('should have correct h6 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h6>Heading 6</h6>
            </div>
        `);

        cy.get('.vl-typography-next h6')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '16px' })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '24px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '30px' });
    });

    it('should have correct paragraph styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <p>This is a paragraph.</p>
            </div>
        `);

        cy.get('.vl-typography-next p')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '18px' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '27px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '18px' });
    });

    it('should have correct unordered list styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                </ul>
            </div>
        `);

        cy.get('.vl-typography-next ul')
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '18px' })
            .shouldHaveComputedStyle({ style: 'padding-left', value: '40px' });

        cy.get('.vl-typography-next ul li')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '18px' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '27px' });
    });

    it('should have correct ordered list styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <ol>
                    <li>List item 1</li>
                    <li>List item 2</li>
                </ol>
            </div>
        `);

        cy.get('.vl-typography-next ol')
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '18px' })
            .shouldHaveComputedStyle({ style: 'padding-left', value: '40px' });

        cy.get('.vl-typography-next ol li')
            .shouldHaveComputedStyle({ style: 'color', value: cssVars['--vl-text-alt-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '18px' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '27px' });
    });

    it('should have correct blockquote styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <blockquote>This is a blockquote.</blockquote>
            </div>
        `);

        cy.get('.vl-typography-next blockquote')
            .shouldHaveComputedStyle({
                style: 'border-left',
                value: '5px solid ' + cssVars['--vl-border-color'].computedValue,
            })
            .shouldHaveComputedStyle({ style: 'padding-left', value: '25px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '20px' })
            .shouldHaveComputedStyle({ style: 'font-style', value: 'italic' });
    });

    it('should have correct code styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <code>This is code.</code>
            </div>
        `);

        cy.get('.vl-typography-next code')
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font-mono'].computedValue })
            .shouldHaveComputedStyle({ style: 'background-color', value: cssVars['--vl-code-bg-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'padding', value: '2px 5px' })
            .shouldHaveComputedStyle({ style: 'border-radius', value: '3px' });
    });

    it('should have correct pre styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <pre>This is preformatted text.</pre>
            </div>
        `);

        cy.get('.vl-typography-next pre')
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font-mono'].computedValue })
            .shouldHaveComputedStyle({ style: 'background-color', value: cssVars['--vl-code-bg-color'].computedValue })
            .shouldHaveComputedStyle({ style: 'padding', value: '20px' })
            .shouldHaveComputedStyle({ style: 'border-radius', value: '3px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '20px' });
    });

    it('should have correct small text styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <small>This is small text.</small>
            </div>
        `);

        cy.get('.vl-typography-next small')
            .shouldHaveComputedStyle({ style: 'font-size', value: '14px' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '21px' });
    });

    it('should have correct text modifiers', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <p class="vl-text-next--bold">Bold text</p>
                <p class="vl-text-next--italic">Italic text</p>
                <p class="vl-text-next--underline">Underlined text</p>
                <p class="vl-text-next--uppercase">Uppercase text</p>
                <p class="vl-text-next--lowercase">Lowercase text</p>
                <p class="vl-text-next--capitalize">Capitalized text</p>
                <p class="vl-text-next--muted">Muted text</p>
                <p class="vl-text-next--error">Error text</p>
                <p class="vl-text-next--success">Success text</p>
                <p class="vl-text-next--warning">Warning text</p>
            </div>
        `);

        cy.get('.vl-typography-next .vl-text-next--bold').shouldHaveComputedStyle({
            style: 'font-weight',
            value: '700',
        });

        cy.get('.vl-typography-next .vl-text-next--italic').shouldHaveComputedStyle({
            style: 'font-style',
            value: 'italic',
        });

        cy.get('.vl-typography-next .vl-text-next--underline').shouldHaveComputedStyle({
            style: 'text-decoration',
            value: 'underline solid rgb(51, 51, 51)',
        });

        cy.get('.vl-typography-next .vl-text-next--uppercase').shouldHaveComputedStyle({
            style: 'text-transform',
            value: 'uppercase',
        });

        cy.get('.vl-typography-next .vl-text-next--lowercase').shouldHaveComputedStyle({
            style: 'text-transform',
            value: 'lowercase',
        });

        cy.get('.vl-typography-next .vl-text-next--capitalize').shouldHaveComputedStyle({
            style: 'text-transform',
            value: 'capitalize',
        });

        cy.get('.vl-typography-next .vl-text-next--muted').shouldHaveComputedStyle({
            style: 'color',
            value: cssVars['--vl-text-muted-color'].computedValue,
        });

        cy.get('.vl-typography-next .vl-text-next--error').shouldHaveComputedStyle({
            style: 'color',
            value: cssVars['--vl-text-error-color'].computedValue,
        });

        cy.get('.vl-typography-next .vl-text-next--success').shouldHaveComputedStyle({
            style: 'color',
            value: cssVars['--vl-text-success-color'].computedValue,
        });

        cy.get('.vl-typography-next .vl-text-next--warning').shouldHaveComputedStyle({
            style: 'color',
            value: cssVars['--vl-text-warning-color'].computedValue,
        });
    });
});
