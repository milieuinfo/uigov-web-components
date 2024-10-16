import { css, CSSResult } from 'lit';

/* @formatter:off */
export const gridLargeStyles = (): CSSResult => css`
    /* in order for this to work, all elements must have a defined width and height */
    &.vl-grid-next--l-justify-items-start {
        justify-items: start;
    }
    &.vl-grid-next--l-justify-items-end {
        justify-items: end;
    }
    &.vl-grid-next--l-justify-items-center {
        justify-items: center;
    }
    &.vl-grid-next--l-justify-items-stretch {
        justify-items: stretch;
    }

    /* in order for this to work, all elements must have a defined width and height */
    &.vl-grid-next--l-align-items-start {
        align-items: start;
    }
    &.vl-grid-next--l-align-items-end {
        align-items: end;
    }
    &.vl-grid-next--l-align-items-center {
        align-items: center;
    }
    &.vl-grid-next--l-align-items-stretch {
        align-items: stretch;
    }
`;
/* @formatter:on */
