import { CSSResult, css, unsafeCSS } from 'lit';

export const fontFace = (
    fontFamily: string,
    fontLocation: string,
    fontWeight: number | string,
    fontStyle: string
): CSSResult => css`
    @font-face {
        font-family: ${unsafeCSS(fontFamily)};
        src: url(${unsafeCSS(`${fontLocation}.woff2`)}) format('woff2'),
            url(${unsafeCSS(`${fontLocation}.woff`)}) format('woff');
        font-weight: ${unsafeCSS(fontWeight)};
        font-style: ${unsafeCSS(fontStyle)};
    }
`;
