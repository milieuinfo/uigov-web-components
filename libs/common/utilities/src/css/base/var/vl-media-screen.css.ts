import mediaScreenRawCss from '!!raw-loader!./vl-media-screen.raw.css';
import { css, CSSResult, unsafeCSS } from 'lit';

export const vlMediaScreenStyles: CSSResult = css`
    ${unsafeCSS(mediaScreenRawCss)}
`;
