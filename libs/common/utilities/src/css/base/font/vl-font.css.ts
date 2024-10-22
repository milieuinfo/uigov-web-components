import fontsRawCss from '!!raw-loader!./vl-font.raw.css';
import { css, CSSResult, unsafeCSS } from 'lit';

const sansFontFamily = 'vl-flanders-art-sans';
const serifFontFamily = 'vl-flanders-art-serif';
const iconFontFamily = 'vl-flanders-icon-classic';
const fontLocation = 'https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2';

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

    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Light`, 300, 'normal')}
    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Regular`, 400, 'normal')}
    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Medium`, 500, 'normal')}
    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Bold`, 700, 'normal')}

    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Light`, 300, 'italic')}
    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Regular`, 400, 'italic')}
    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Medium`, 500, 'italic')}
    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Bold`, 700, 'italic')}

    ${fontFace(serifFontFamily, `${fontLocation}/flanders/serif/FlandersArtSerif-Light`, 300, 'normal')}
    ${fontFace(serifFontFamily, `${fontLocation}/flanders/serif/FlandersArtSerif-Regular`, 400, 'normal')}
    ${fontFace(serifFontFamily, `${fontLocation}/flanders/serif/FlandersArtSerif-Medium`, 500, 'normal')}
    ${fontFace(serifFontFamily, `${fontLocation}/flanders/serif/FlandersArtSerif-Bold`, 700, 'normal')}

    ${fontFace(iconFontFamily, `${fontLocation}/iconfont/vlaanderen-icon-classic`, 'normal', 'normal')}
`;
