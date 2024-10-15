import { CSSResult, css } from 'lit';

export const mediaQueryExtraSmall = (content: CSSResult): CSSResult => css`
    @media screen and (max-width: 500px) {
        ${content}
    }
`;

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

export const mediaQueryLarge = (content: CSSResult): CSSResult => css`
    @media screen and (min-width: 1023px) {
        ${content}
    }
`;
