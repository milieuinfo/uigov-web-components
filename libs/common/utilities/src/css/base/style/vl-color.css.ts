import { CSSResult, css, unsafeCSS } from 'lit';
import colorsRawCss from '!!raw-loader!./vl-color.raw.css';

export const vlColorStyles: CSSResult = css`
    ${unsafeCSS(colorsRawCss)}
`;
