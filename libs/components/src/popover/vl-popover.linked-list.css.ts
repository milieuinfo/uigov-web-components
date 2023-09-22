import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    ::slotted(.vl-link-list) {
        padding: 0;

        li,
        .vl-link-list__item {
            padding: 0.6rem 0;

            &:first-child {
                padding-top: 0;

                .vl-popover--closable & {
                    max-width: calc(100% - 4.5rem);
                }
            }

            &:last-of-type {
                padding-bottom: 0;
                margin-bottom: 0;
            }

            &.vl-popover__link-list__separator {
                height: 0.1rem;
                background: #ccc;
                padding: 0;
                margin: 0.5rem 0;
            }
        }

        &--bordered & {
            &__item {
                &:not(:last-of-type) {
                    .vl-link {
                        position: relative;
                    }
                }
            }
        }
    }
`;
export default styles;
