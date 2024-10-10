import { css, CSSResult, unsafeCSS } from 'lit';

export const vlFlexStyles: CSSResult = css`
    .vl-flex {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.4rem;

        &.vl-flex--column {
            flex-direction: column;
        }

        &.vl-flex--row {
            flex-direction: row;
        }

        &.vl-flex--space-between {
            justify-content: space-between;
        }

        &.vl-flex--justify-start {
            justify-content: flex-start;
        }

        &.vl-flex--justify-center {
            justify-content: center;
        }

        &.vl-flex--justify-end {
            justify-content: flex-end;
        }

        &.vl-flex--bordered {
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
