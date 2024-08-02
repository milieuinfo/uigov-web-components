import { css, CSSResult } from 'lit';

// vl-typography.css.js - 297 to 359

const styles: CSSResult = css`
    .vl-typography-next blockquote {
        position: relative;
        padding-left: 9rem;
        font-size: 3.4rem;
        font-family: 'Flanders Art Sans', sans-serif;
        font-weight: 400;
        margin-bottom: 2rem;
        line-height: 1.5;
    }

    @media screen and (max-width: 767px) {
        .vl-typography-next blockquote {
            padding-left: 5rem;
        }
    }

    .vl-typography-next blockquote::before {
        position: absolute;
        content: '“';
        font-size: 9rem;
        left: 0;
        top: 0;
        padding-top: 1rem;
        padding-left: 1rem;
        width: 7rem;
        height: 6rem;
        line-height: 1;
        color: var(--vl-theme-fg-color);
        background: linear-gradient(-110deg, transparent 20px, var(--vl-theme-primary-color) 20px);
    }

    @media screen and (max-width: 767px) {
        .vl-typography-next blockquote::before {
            width: 4.6rem;
            font-size: 6rem;
            height: 3.6rem;
            padding-right: 1.5rem;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
            margin-right: 0rem;
        }
    }

    .vl-typography-next pre:not([class*='language']) {
        padding: 1.5rem;
        background-color: #333332;
        color: #fff;
        display: block;
        white-space: pre;
        overflow-x: scroll;
        tab-size: 2;
        word-break: normal;
        hyphens: none;
    }

    .vl-typography-next pre:not([class*='language']) code,
    .vl-typography-next pre:not([class*='language']) kdb,
    .vl-typography-next pre:not([class*='language']) samp {
        background-color: transparent;
        padding: 0;
    }

    .vl-typography-next code,
    .vl-typography-next kdb,
    .vl-typography-next samp {
        font-family: monospace; /* TODO check for var */
        background: #e8ebee;
        padding: 0.2rem;
    }

    .vl-typography-next hr {
        display: block;
        margin: 0.5rem auto;
        border: 0;
        border-top: 1px solid #cbd2da;
    }
`;
export default styles;
