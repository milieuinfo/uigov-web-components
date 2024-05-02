import { CSSResult, css } from 'lit';

export const mediaQuerySmall = (content: CSSResult): CSSResult => {
    return css`
        @media screen and (max-width: 767px) {
            ${content}
        }
    `;
};
