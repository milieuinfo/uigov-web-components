import { CSSResult, css } from 'lit';

export const mediaQuerySmall = (content: CSSResult): CSSResult => css`
    @media screen and (max-width: 767px) {
        ${content}
    }
`;

export const mediaQueryMedium = (content: CSSResult): CSSResult => css`
    @media screen and (max-width: 1023px) {
        ${content}
    }
`;
