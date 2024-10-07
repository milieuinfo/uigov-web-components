import { css, CSSResult } from 'lit';
import { mediaQuerySmall } from './mixin/media-queries.mixin.css';

const styles: CSSResult = css`
    html {
        font-family: var(--vl-font);
        /* 62.5% Font Size Trick  */
        font-size: 62.5%;
    }

    body {
        font-size: var(--vl-font-size);
        line-height: var(--vl-line-height);
        color: var(--vl-text-color);

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: none;

        ${mediaQuerySmall(
            css`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `
        )}
    }
`;

export default styles;
