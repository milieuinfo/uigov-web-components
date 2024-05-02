import { css, CSSResult } from 'lit';
import { fontFace } from './mixin/typography.mixin.css';

export const fontFamily = 'Flanders Art Sans';
export const serifFontFamily = 'Flanders Art Serif';
const fontName = 'FlandersArtSans';
const serifFontName = 'FlandersArtSerif';
const baseFontLocation = 'https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2/flanders/';

const styles: CSSResult = css`
    ${fontFace(fontFamily, `${baseFontLocation}sans/${fontName}-Light`, 300, 'normal')}
    ${fontFace(fontFamily, `${baseFontLocation}sans/${fontName}-Regular`, 400, 'normal')}
    ${fontFace(fontFamily, `${baseFontLocation}sans/${fontName}-Medium`, 500, 'normal')}
    ${fontFace(fontFamily, `${baseFontLocation}sans/${fontName}-Bold`, 700, 'normal')}

    ${fontFace(fontFamily, `${baseFontLocation}italic/${fontName}-Light`, 300, 'italic')}
    ${fontFace(fontFamily, `${baseFontLocation}italic/${fontName}-Regular`, 400, 'italic')}
    ${fontFace(fontFamily, `${baseFontLocation}italic/${fontName}-Medium`, 500, 'italic')}
    ${fontFace(fontFamily, `${baseFontLocation}italic/${fontName}-Bold`, 700, 'italic')}

    ${fontFace(serifFontFamily, `${baseFontLocation}serif/${serifFontName}-Light`, 300, 'normal')}
    ${fontFace(serifFontFamily, `${baseFontLocation}serif/${serifFontName}-Regular`, 400, 'normal')}
    ${fontFace(serifFontFamily, `${baseFontLocation}serif/${serifFontName}-Medium`, 500, 'normal')}
    ${fontFace(serifFontFamily, `${baseFontLocation}serif/${serifFontName}-Bold`, 700, 'normal')}
`;

export default styles;
