import { CSSResult, css, unsafeCSS } from 'lit';
// @ts-ignore: negeer error 'Could not find a declaration file for module' veroorzaakt door het importeren van een .js bestand
import { fontFamily, serifFontFamily, iconFontFamily } from '../font/fonts.js';

const styles: CSSResult = css`
    :root {
        /* Flanders font */
        --vl-font: ${unsafeCSS(fontFamily)}, sans-serif;
        --vl-accent-font: ${unsafeCSS(serifFontFamily)}, serif;

        --vl-font-size: 1.8rem;
        --vl-font-size--mobile: 1.6rem;
        --vl-font-size--small: 1.6rem;
        --vl-font-size--large: 2rem;

        --vl-line-height: 1.5; // DV: $vl-base-line-height
        --vl-line-height--mobile: 1.33;

        /* Icon font */
        --vl-icon-font: ${unsafeCSS(iconFontFamily)};
    }
`;

export default styles;
