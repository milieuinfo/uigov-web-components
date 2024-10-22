import { CSSResult, css, unsafeCSS } from 'lit';
import colorsRawCss from '!!raw-loader!./vl-color.raw.css';

export const colorStyles: CSSResult = css`
    ${unsafeCSS(colorsRawCss)}
`;
