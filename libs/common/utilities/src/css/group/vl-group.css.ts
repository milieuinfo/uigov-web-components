import { css, CSSResult } from 'lit';
import { ScreenWidth } from '../base/styles/vl-screen-width.const';

export const vlGroupStyles: CSSResult = css`
    .vl-group-next {
        display: flex;
        align-items: center;
        gap: 1.4rem;

        &.vl-group-next--column {
            flex-direction: column;

            * {
                width: 100%;
            }
        }

        &.vl-group-next--space-between {
            justify-content: space-between;
        }

        &.vl-group-next--justify-center {
            justify-content: center;
        }

        &.vl-group-next--justify-end {
            justify-content: flex-end;
        }

        &.vl-group-next--separator-row {
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

        &.vl-group-next--separator-column {
            > * {
                padding-top: 1.5rem;
                border-top: 1px solid #cbd2da;
            }

            > :last-child {
                padding-bottom: 1.5rem;
                border-bottom: 1px solid #cbd2da;
            }
        }

        @media screen and (min-width: ${ScreenWidth.MEDIUM}px) {
            &.vl-group-next--collapse-l {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media screen and (max-width: ${ScreenWidth.MEDIUM}px) {
            &.vl-group-next--collapse-m {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media screen and (max-width: ${ScreenWidth.SMALL}px) {
            &.vl-group-next--collapse-s {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media screen and (max-width: ${ScreenWidth.EXTRA_SMALL}px) {
            &.vl-group-next--collapse-xs {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
`;
