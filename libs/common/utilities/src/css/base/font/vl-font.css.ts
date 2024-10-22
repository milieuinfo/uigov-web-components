import fontsRawCss from '!!raw-loader!./vl-font.raw.css';
import { css, CSSResult, unsafeCSS } from 'lit';

// Flanders fonts
const fontFamily = 'vl-flanders-art-sans';
const serifFontFamily = 'vl-flanders-art-serif';
const iconFontFamily = 'vl-flanders-icon-classic';

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

    ${fontFace(fontFamily, `${flandersFontLocation}/sans/FlandersArtSans-Light`, 300, 'normal')}
    ${fontFace(fontFamily, `${flandersFontLocation}/sans/FlandersArtSans-Regular`, 400, 'normal')}
    ${fontFace(fontFamily, `${flandersFontLocation}/sans/FlandersArtSans-Medium`, 500, 'normal')}
    ${fontFace(fontFamily, `${flandersFontLocation}/sans/FlandersArtSans-Bold`, 700, 'normal')}

    ${fontFace(fontFamily, `${flandersFontLocation}/italic/FlandersArtSans-Light`, 300, 'italic')}
    ${fontFace(fontFamily, `${flandersFontLocation}/italic/FlandersArtSans-Regular`, 400, 'italic')}
    ${fontFace(fontFamily, `${flandersFontLocation}/italic/FlandersArtSans-Medium`, 500, 'italic')}
    ${fontFace(fontFamily, `${flandersFontLocation}/italic/FlandersArtSans-Bold`, 700, 'italic')}

    ${fontFace(serifFontFamily, `${flandersFontLocation}/serif/FlandersArtSerif-Light`, 300, 'normal')}
    ${fontFace(serifFontFamily, `${flandersFontLocation}/serif/FlandersArtSerif-Regular`, 400, 'normal')}
    ${fontFace(serifFontFamily, `${flandersFontLocation}/serif/FlandersArtSerif-Medium`, 500, 'normal')}
    ${fontFace(serifFontFamily, `${flandersFontLocation}/serif/FlandersArtSerif-Bold`, 700, 'normal')}

    ${fontFace(iconFontFamily, `${iconFontLocation}/vlaanderen-icon-classic`, 'normal', 'normal')}
`;
