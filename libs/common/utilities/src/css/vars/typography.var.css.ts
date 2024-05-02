import { CSSResult, css, unsafeCSS } from 'lit';
import { fontFamily, serifFontFamily } from '../fonts.css';

const styles: CSSResult = css`
    :root {
        --vl-font: ${unsafeCSS(fontFamily)}, sans-serif;
        --vl-accent-font: ${unsafeCSS(serifFontFamily)}, serif;

        --vl-font-size: 1.8rem;
        --vl-font-size--mobile: 1.6rem;
        --vl-font-size--small: 1.6rem;
        --vl-font-size--large: 2rem;

        --vl-line-height: 1.5;
        --vl-line-height--mobile: 1.33;
    }
`;

export default styles;
