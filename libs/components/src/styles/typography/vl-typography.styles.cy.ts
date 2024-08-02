import { html } from 'lit';
import typographyStyles from './vl-typography.css';
import { globalStyles } from '@domg-wc/common-utilities/css/global-styles-decorator';
import { resetStyle } from '@domg/govflanders-style/common';
import { calculateComputedLineHeight, extractCSSVariables } from '@domg-wc/common-utilities';

describe('style - vl-typography-next', () => {
    let cssVars: { [key: string]: { value: string; computedValue: string; referencedValue?: string } };

    before(() => {
        cy.loadCSSResult(...[resetStyle, ...globalStyles], ...typographyStyles).then(() => {
            cssVars = extractCSSVariables();
        });
    });

    it('should have correct h1 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h1>Heading 1</h1>
            </div>
        `);

        const computedLineHeight = calculateComputedLineHeight('44px', '1.18');

        cy.get('.vl-typography-next h1')
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: '44px' })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: computedLineHeight })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '60px' });
    });

    it('should have correct h2 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h2>Heading 2</h2>
            </div>
        `);
        const fontSize = '32px';
        const computedLineHeight = calculateComputedLineHeight(fontSize, '1.24');

        cy.get('.vl-typography-next h2')
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: fontSize })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: computedLineHeight })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '20px' });
    });

    it('should have correct h3 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h3>Heading 3</h3>
            </div>
        `);
        const fontSize = '26px';
        const computedLineHeight = calculateComputedLineHeight(fontSize, '1.3');

        cy.get('.vl-typography-next h3')
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: fontSize })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: '33.8px' }) // computedLineHeight })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '20px' });
    });

    it('should have correct h4 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h4>Heading 4</h4>
            </div>
        `);

        const fontSize = '22px';
        const computedLineHeight = calculateComputedLineHeight(fontSize, '1.36');

        cy.get('.vl-typography-next h4')
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: fontSize })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: computedLineHeight })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '18px' });
    });

    it('should have correct h5 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h5>Heading 5</h5>
            </div>
        `);

        const fontSize = '20px';
        const computedLineHeight = calculateComputedLineHeight(fontSize, '1.4');

        cy.get('.vl-typography-next h5')
            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: fontSize })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: computedLineHeight })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '16px' });
    });

    it('should have correct h6 styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <h6>Heading 6</h6>
            </div>
        `);

        const fontSize = '18px';
        const computedLineHeight = calculateComputedLineHeight(fontSize, '1.44');

        cy.get('.vl-typography-next h6')

            .shouldHaveComputedStyle({ style: 'font-family', value: cssVars['--vl-font'].computedValue })
            .shouldHaveComputedStyle({ style: 'font-size', value: fontSize })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '500' })
            .shouldHaveComputedStyle({ style: 'line-height', value: computedLineHeight })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '14px' });
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
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '0px' })
            .shouldHaveComputedStyle({ style: 'padding-left', value: '20px' });

        cy.get('.vl-typography-next ul li')

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
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '0px' })
            .shouldHaveComputedStyle({ style: 'padding-left', value: '20px' });

        cy.get('.vl-typography-next ol li')

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
            .shouldHaveComputedStyle({ style: 'padding-left', value: '90px' })
            .shouldHaveComputedStyle({ style: 'margin-bottom', value: '20px' })
            .shouldHaveComputedStyle({ style: 'font-size', value: '34px' })
            .shouldHaveComputedStyle({ style: 'font-weight', value: '400' })
            .shouldHaveComputedStyle({ style: 'line-height', value: calculateComputedLineHeight('34px', '1.5') });
    });

    it('should have correct code styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <code>This is code.</code>
            </div>
        `);

        cy.get('.vl-typography-next code')
            .shouldHaveComputedStyle({ style: 'font-family', value: 'monospace' }) // cssVars['--vl-font-mono'].computedValue })
            .shouldHaveComputedStyle({ style: 'background-color', value: 'rgb(232, 235, 238)' }) // TODO get from var
            .shouldHaveComputedStyle({ style: 'padding', value: '2px' });
    });

    it('should have correct pre styles', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <pre>This is preformatted text.</pre>
            </div>
        `);

        cy.get('.vl-typography-next pre')
            .shouldHaveComputedStyle({ style: 'background-color', value: 'rgb(51, 51, 50)' }) // TODO get from var
            .shouldHaveComputedStyle({ style: 'white-space', value: 'pre' })
            .shouldHaveComputedStyle({ style: 'color', value: 'rgb(255, 255, 255)' })
            .shouldHaveComputedStyle({ style: 'display', value: 'block' })
            .shouldHaveComputedStyle({ style: 'hyphens', value: 'none' })
            .shouldHaveComputedStyle({ style: 'word-break', value: 'normal' });
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
            <div>
                <p class="vl-u-text--bold">Bold text</p>
                <p class="vl-u-text--italic">Italic text</p>
                <p class="vl-u-text--underline">Underline text</p>
                <p class="vl-u-text--strike">Strike through text</p>
                <p class="vl-u-text--uppercase">Uppercase text</p>
                <p class="vl-u-text--lowercase">Lowercase text</p>
                <p class="vl-u-text--capitalize">Capitalized text</p>
                <p class="vl-u-text--error">Error text</p>
                <p class="vl-u-text--success">Success text</p>
                <p class="vl-u-text--warning">Warning text</p>
            </div>
        `);

        cy.get('.vl-u-text--bold').shouldHaveComputedStyle({
            style: 'font-weight',
            value: '500',
        });

        cy.get('.vl-u-text--italic').shouldHaveComputedStyle({
            style: 'font-style',
            value: 'italic',
        });

        cy.get('.vl-u-text--underline').shouldHaveComputedStyle({
            style: 'text-decoration-line',
            value: 'underline',
        });

        cy.get('.vl-u-text--strike').shouldHaveComputedStyle({
            style: 'text-decoration-line',
            value: 'line-through',
        });

        cy.get('.vl-u-text--uppercase').shouldHaveComputedStyle({
            style: 'text-transform',
            value: 'uppercase',
        });

        cy.get('.vl-u-text--lowercase').shouldHaveComputedStyle({
            style: 'text-transform',
            value: 'lowercase',
        });

        cy.get('.vl-u-text--capitalize').shouldHaveComputedStyle({
            pseudo: '::first-letter',
            style: 'text-transform',
            value: 'uppercase',
        });

        cy.get('.vl-u-text--capitalize').shouldHaveComputedStyle({
            style: 'text-transform',
            value: 'lowercase',
        });

        cy.get('.vl-u-text--success').shouldHaveComputedStyle({
            style: 'color',
            value: cssVars['--vl-success-text-color'].computedValue,
        });

        cy.get('.vl-u-text--warning').shouldHaveComputedStyle({
            style: 'color',
            value: cssVars['--vl-warning-text-color'].computedValue,
        });

        cy.get('.vl-u-text--error').shouldHaveComputedStyle({
            style: 'color',
            value: cssVars['--vl-error-text-color'].computedValue,
        });
    });

    it('should have correct styling on text elements', () => {
        cy.viewport(1920, 1080);

        cy.mount(html`
            <div class="vl-typography-next">
                <strong>strong-tag</strong>
                <i>i-tag</i>
                <em>em-tag</em>
                <ins>ins-tag</ins>
                <del>del-tag</del>
                <s>s-tag</s>
                <b>b-tag</b>
            </div>
        `);

        cy.get('strong').shouldHaveComputedStyle({
            style: 'font-weight',
            value: '500',
        });

        cy.get('i').shouldHaveComputedStyle({
            style: 'font-style',
            value: 'italic',
        });

        cy.get('em').shouldHaveComputedStyle({
            style: 'font-style',
            value: 'italic',
        });

        cy.get('ins').shouldHaveComputedStyle({
            style: 'text-decoration-line',
            value: 'underline',
        });

        cy.get('s').shouldHaveComputedStyle({
            style: 'text-decoration-line',
            value: 'line-through',
        });

        cy.get('del').shouldHaveComputedStyle({
            style: 'text-decoration-line',
            value: 'line-through',
        });
    });
});
