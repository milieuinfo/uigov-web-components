import mediaScreenRawCss from '!!raw-loader!./vl-media-screen.raw.css';
import { css, CSSResult, unsafeCSS } from 'lit';

export const mediaScreenStyles: CSSResult = css`
    ${unsafeCSS(mediaScreenRawCss)}
`;
