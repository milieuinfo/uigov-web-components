import { css, CSSResult, unsafeCSS } from 'lit';

export const vlGroupStyles: CSSResult = css`
    .vl-group {
        display: flex;
    }

    .vl-group--column {
        flex-direction: column;
    }

    .vl-group--row {
        flex-direction: row;
    }

    .vl-group--space-between {
        justify-content: space-between;
    }

    .vl-group--align-start {
        align-content: flex-start;
    }

    .vl-group--align-center {
        align-content: center;
    }

    .vl-group--align-end {
        align-content: flex-end;
    }
`;
