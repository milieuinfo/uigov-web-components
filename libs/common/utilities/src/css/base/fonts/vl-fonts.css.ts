import fontsRawCss from '!!raw-loader!./vl-fonts.raw.css';
import { css, CSSResult, unsafeCSS } from 'lit';

// Flanders fonts
const fontFamily = 'FlandersArtSans';
const serifFontFamily = 'FlandersArtSerif';
const iconFontFamily = 'vlaanderen-icon-classic';

// font locations
const rootFontLocation = 'https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2';
const flandersFontLocation = `${rootFontLocation}/flanders`;
const iconFontLocation = `${rootFontLocation}/iconfont`;

const fontFace = (
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

export const fontStyles: CSSResult = css`
    ${unsafeCSS(fontsRawCss)}

    ${fontFace(fontFamily, `${flandersFontLocation}/sans/${fontFamily}-Light`, 300, 'normal')}
    ${fontFace(fontFamily, `${flandersFontLocation}/sans/${fontFamily}-Regular`, 400, 'normal')}
    ${fontFace(fontFamily, `${flandersFontLocation}/sans/${fontFamily}-Medium`, 500, 'normal')}
    ${fontFace(fontFamily, `${flandersFontLocation}/sans/${fontFamily}-Bold`, 700, 'normal')}

    ${fontFace(fontFamily, `${flandersFontLocation}/italic/${fontFamily}-Light`, 300, 'italic')}
    ${fontFace(fontFamily, `${flandersFontLocation}/italic/${fontFamily}-Regular`, 400, 'italic')}
    ${fontFace(fontFamily, `${flandersFontLocation}/italic/${fontFamily}-Medium`, 500, 'italic')}
    ${fontFace(fontFamily, `${flandersFontLocation}/italic/${fontFamily}-Bold`, 700, 'italic')}

    ${fontFace(serifFontFamily, `${flandersFontLocation}/serif/${serifFontFamily}-Light`, 300, 'normal')}
    ${fontFace(serifFontFamily, `${flandersFontLocation}/serif/${serifFontFamily}-Regular`, 400, 'normal')}
    ${fontFace(serifFontFamily, `${flandersFontLocation}/serif/${serifFontFamily}-Medium`, 500, 'normal')}
    ${fontFace(serifFontFamily, `${flandersFontLocation}/serif/${serifFontFamily}-Bold`, 700, 'normal')}

    ${fontFace(iconFontFamily, `${iconFontLocation}/${iconFontFamily}`, 'normal', 'normal')}
`;
