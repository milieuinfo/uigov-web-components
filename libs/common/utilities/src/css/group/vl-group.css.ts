import { css, CSSResult, unsafeCSS } from 'lit';

export const vlGroupStyles: CSSResult = css`
    .vl-group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.4rem;

        &.vl-group--column {
            flex-direction: column;
        }

        &.vl-group--row {
            flex-direction: row;
        }

        &.vl-group--space-between {
            justify-content: space-between;
        }

        &.vl-group--justify-start {
            justify-content: flex-start;
        }

        &.vl-group--justify-center {
            justify-content: center;
        }

        &.vl-group--justify-end {
            justify-content: flex-end;
        }

        &.vl-group--bordered {
            * + * {
                &::before {
                    content: '';
                    border-left: 1px solid #cbd2da;
                    padding-left: calc(1.4rem - 1px);
                    margin-top: 0.6rem;
                    margin-bottom: 0.6rem;
                }
            }
        }
    }
`;
