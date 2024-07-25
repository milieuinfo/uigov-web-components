import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    .vl-typography-next ul {
        list-style-type: disc;
    }

    .vl-typography-next ol {
        list-style-type: decimal;
    }
    .vl-typography-next ol ol,
    .vl-typography-next ol .ol {
        list-style-type: lower-latin;
    }

    .vl-typography-next ol,
    .vl-typography-next ul {
        display: block;
        margin: 1.8rem 0 2rem 1rem;
        padding-left: 2rem;
    }
    .vl-typography-next ol:first-child,
    .ol:first-child,
    .vl-typography-next ul:first-child,
    .ul:first-child {
        margin-top: 0;
    }
    .vl-typography-next ol:last-child,
    .vl-typography-next ul:last-child {
        margin-bottom: 0;
    }
    .vl-typography-next ol li,
    .vl-typography-next ul li {
        display: list-item;
        margin-bottom: 0.5em;
    }
    .vl-typography-next ol li:last-child,
    .vl-typography-next ul li:last-child {
        margin-bottom: 0;
    }
    .vl-typography-next ol ul,
    .vl-typography-next ul ul {
        list-style-type: circle;
    }
    .vl-typography-next ol ul,
    .vl-typography-next ol ol,
    .vl-typography-next ul ul,
    .vl-typography-next ul ol {
        margin: 0.5em 0 0.5rem 1.5em;
    }
    .vl-typography-next ol ul:first-child,
    .vl-typography-next ol ol:first-child,
    .vl-typography-next ul ul:first-child,
    .vl-typography-next ul ol:first-child {
        margin-top: 0;
    }
    .vl-typography-next ol ul:last-child,
    .vl-typography-next ol ol:last-child,
    .vl-typography-next ul ul:last-child,
    .vl-typography-next ul ol:last-child {
        margin-bottom: 0;
    }
`;
export default styles;
