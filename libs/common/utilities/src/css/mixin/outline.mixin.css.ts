import { CSSResult, css } from 'lit';

export const focusOutline = (): CSSResult => {
    return css`
        box-shadow: none;
        outline: var(--vl-focus-outline);
        outline-offset: 2px;
    `;
};
