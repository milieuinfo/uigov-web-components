import { CSSResult, css, unsafeCSS } from 'lit';
import colors from '!!raw-loader!./colors.raw.css';

// ! Indien je een kleur aanpast, kijk dan even na of er andere kleuren op gebaseerd zijn die een alpha waarde toevoegen.

export const colorStyles: CSSResult = css`
    ${unsafeCSS(colors)}
`;
