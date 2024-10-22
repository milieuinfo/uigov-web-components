import { css, CSSResult, unsafeCSS } from 'lit';
import { focusOutline } from '../base/mixin/vl-outlines.css';
import iconMapping from './vl-icon-mapping.css';

export const iconStyles: CSSResult = css`
    ${unsafeCSS(iconMapping)}

    :host {
        display: inline-flex;
    }

    /* Icon styles - gebaseerd op DV _icon.scss */
    .vl-icon {
        font-family: var(--vl-icon-font);
        font-size: 1em;
        line-height: 1;
        display: inline;
        color: inherit;

        &.vl-icon--small {
            font-size: 0.8em;
        }

        &.vl-icon--large {
            font-size: 1.2em;
        }

        &.vl-icon--light {
            color: var(--vl-light-text-color);
        }

        &.vl-icon--right-margin {
            margin-right: 0.5em;
        }

        &.vl-icon--left-margin {
            margin-left: 0.5em;
        }

        &.vl-icon--clickable {
            cursor: pointer;
            color: var(--vl-action-color);

            &:hover {
                color: var(--vl-action-color--hover);
            }

            &:focus {
                ${focusOutline()}
            }

            &:focus,
            &:active {
                color: var(--vl-action-color--active);
            }
        }
    }
`;
