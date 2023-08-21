import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    #title-label:not([hidden]) {
        display: inline-block;
        margin-left: 3rem;
    }

    .vl-step--accordion.js-vl-accordion--open .vl-step__content-wrapper {
        overflow: inherit;
    }
`;
export default styles;
