import { CSSResult, css } from 'lit';

export const focusOutline = (): CSSResult => css`
    box-shadow: none;
    outline: 3px solid var(--vl-focus-color);
    outline-offset: 2px;
`;
