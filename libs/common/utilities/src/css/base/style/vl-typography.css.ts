import typographyRawCss from '!!raw-loader!./vl-typography.raw.css';
import { css, CSSResult, unsafeCSS } from 'lit';

export const typographyStyles: CSSResult = css`
    ${unsafeCSS(typographyRawCss)}
`;
