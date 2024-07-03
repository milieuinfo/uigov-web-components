import { CSSResult, css } from 'lit';
import { mediaQuerySmall, mediaQueryMedium } from '@domg-wc/common-utilities/css/mixin/media-queries.mixin.css';

const styles: CSSResult = css`
    .vl-introduction-next {
        font-family: inherit;
        font-size: 2.2rem;
        color: var(--vl-text-alt-color);
        line-height: var(--vl-line-height);
        ${mediaQueryMedium(
            css`
                font-size: 2rem;
            `
        )}
        ${mediaQuerySmall(
            css`
                font-size: 1.8rem;
            `
        )}
    }

    .vl-introduction-next--bold {
        font-weight: 500;
    }
`;
export default styles;
