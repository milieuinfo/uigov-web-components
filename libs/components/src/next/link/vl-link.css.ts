import { css, CSSResult } from 'lit';
import { mediaQuerySmall } from '@domg-wc/common-utilities/css/mixin/media-queries.mixin.css';
import { focusOutline } from '@domg-wc/common-utilities/css/mixin/outline.mixin.css';

const styles: CSSResult = css`
    a {
        /* Reset styles (gebaseerd op DV _reset.scss) */
        margin: 0;
        border: 0;
        padding: 0;

        /* Link styles (gebaseerd op DV _anchor.scss en _link.scss) */
        display: inline-block;
        word-break: break-word;
        color: var(--vl-action-color);

        &:hover {
            color: var(--vl-action-color--hover);
            text-decoration: none;
        }

        &:focus {
            ${focusOutline()}
        }

        &:focus,
        &:active {
            color: var(--vl-action-color--active);
        }

        &:visited {
            color: var(--vl-action-color--visited);
        }

        &.bold {
            font-weight: 500;
            text-decoration: none;

            &:hover,
            &:focus,
            &:active {
                text-decoration: underline;
            }
        }

        &.small {
            font-size: var(--vl-font-size--small);

            ${mediaQuerySmall(
                css`
                    font-size: calc(var(--vl-font-size--small) - 0.1rem);
                `
            )}
        }

        &.large {
            font-size: var(--vl-font-size--large);

            ${mediaQuerySmall(
                css`
                    font-size: calc(var(--vl-font-size--large) - 0.2rem);
                `
            )}
        }

        &.error {
            color: var(--vl-error-color);

            &:hover,
            &:focus,
            &:active,
            &:visited {
                color: var(--vl-error-color--hover);
            }
        }
    }
`;
export default styles;
