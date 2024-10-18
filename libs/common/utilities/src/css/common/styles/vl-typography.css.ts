import { CSSResult, css, unsafeCSS } from 'lit';
// @ts-ignore: negeer error 'Could not find a declaration file for module' veroorzaakt door het importeren van een .js bestand
import { fontFamily, serifFontFamily, iconFontFamily } from '../fonts/vl-fonts.js';

export const typographyStyles: CSSResult = css`
    :root {
        /* Flanders font */
        --vl-font: ${unsafeCSS(fontFamily)}, sans-serif;
        --vl-accent-font: ${unsafeCSS(serifFontFamily)}, serif;

        --vl-font-size--xxlarge: 2.8rem; /* DV: $vl-base-font-size--xxlarge */
        --vl-font-size--xlarge: 2.2rem; /* DV: $vl-base-font-size--xlarge */
        --vl-font-size--large: 2rem; /* DV: $vl-base-font-size--large */
        --vl-font-size: 1.8rem; /* DV: $vl-base-font-size */
        --vl-font-size--mobile: 1.6rem; /* DV: $vl-base-mobile-font-size */
        --vl-font-size--small: 1.6rem; /* DV: $vl-base-font-size--small */
        --vl-font-size--xsmall: 1.4rem; /* DV: $vl-base-font-size--xsmall */
        --vl-font-size--xxsmall: 1.2rem; /* DV: $vl-base-font-size--xxsmall */

        --vl-line-height: 1.5; /* DV: $vl-base-line-height */
        --vl-line-height--mobile: 1.33; /* DV: $vl-base-mobile-line-height */

        /* Icon font */
        --vl-icon-font: ${unsafeCSS(iconFontFamily)};
    }
`;
