import { css, CSSResult } from 'lit';
import { fontFace } from '../mixin/typography.mixin.css';
// @ts-ignore: negeer error 'Could not find a declaration file for module' veroorzaakt door het importeren van een .js bestand
import { fontFamily, serifFontFamily, baseFontLocation, iconFontFamily, iconFontLocation } from './fonts.js';

const styles: CSSResult = css`
    /* Flanders font */
    ${fontFace(fontFamily, `${baseFontLocation}/flanders/sans/${fontFamily}-Light`, 300, 'normal')}
    ${fontFace(fontFamily, `${baseFontLocation}/flanders/sans/${fontFamily}-Regular`, 400, 'normal')}
    ${fontFace(fontFamily, `${baseFontLocation}/flanders/sans/${fontFamily}-Medium`, 500, 'normal')}
    ${fontFace(fontFamily, `${baseFontLocation}/flanders/sans/${fontFamily}-Bold`, 700, 'normal')}

    ${fontFace(fontFamily, `${baseFontLocation}/flanders/italic/${fontFamily}-Light`, 300, 'italic')}
    ${fontFace(fontFamily, `${baseFontLocation}/flanders/italic/${fontFamily}-Regular`, 400, 'italic')}
    ${fontFace(fontFamily, `${baseFontLocation}/flanders/italic/${fontFamily}-Medium`, 500, 'italic')}
    ${fontFace(fontFamily, `${baseFontLocation}/flanders/italic/${fontFamily}-Bold`, 700, 'italic')}

    ${fontFace(serifFontFamily, `${baseFontLocation}/flanders/serif/${serifFontFamily}-Light`, 300, 'normal')}
    ${fontFace(serifFontFamily, `${baseFontLocation}/flanders/serif/${serifFontFamily}-Regular`, 400, 'normal')}
    ${fontFace(serifFontFamily, `${baseFontLocation}/flanders/serif/${serifFontFamily}-Medium`, 500, 'normal')}
    ${fontFace(serifFontFamily, `${baseFontLocation}/flanders/serif/${serifFontFamily}-Bold`, 700, 'normal')}

    /* Icon font */
    ${fontFace(iconFontFamily, iconFontLocation, 'normal', 'normal')}
`;

export default styles;
