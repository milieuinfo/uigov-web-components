import { css, CSSResult, unsafeCSS } from 'lit';

export const vlGroupStyles: CSSResult = css`
    .vl-group {
        display: flex;
        align-items: center;
        gap: 1.4rem;

        &.vl-group--column {
            flex-direction: column;

            * {
                width: 100%;
            }
        }

        &.vl-group--space-between {
            justify-content: space-between;
        }

        &.vl-group--justify-center {
            justify-content: center;
        }

        &.vl-group--justify-end {
            justify-content: flex-end;
        }

        &.vl-group--separator-row {
            > * + * {
                &::before {
                    content: '';
                    border-left: 1px solid #cbd2da;
                    padding-left: calc(1.4rem - 1px);
                    margin-top: 0.6rem;
                    margin-bottom: 0.6rem;
                }
            }
        }

        &.vl-group--separator-column {
            > * {
                padding-top: 1.5rem;
                border-top: 1px solid #cbd2da;
            }

            > :last-child {
                padding-bottom: 1.5rem;
                border-bottom: 1px solid #cbd2da;
            }
        }
    }
`;
