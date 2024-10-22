import generalRawCss from '!!raw-loader!./vl-general.raw.css';
import { css, CSSResult, unsafeCSS } from 'lit';

export const generalStyles: CSSResult = css`
    ${unsafeCSS(generalRawCss)}
`;
