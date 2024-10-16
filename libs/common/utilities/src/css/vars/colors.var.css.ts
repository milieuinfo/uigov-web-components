import { CSSResult, css, unsafeCSS } from 'lit';
import colors from '!!raw-loader!/colors.var.css';

// ! Indien je een kleur aanpast, kijk dan even na of er andere kleuren op gebaseerd zijn die een alpha waarde toevoegen.

const styles: CSSResult = css`
    ${unsafeCSS(colors)}
`;

export default styles;
