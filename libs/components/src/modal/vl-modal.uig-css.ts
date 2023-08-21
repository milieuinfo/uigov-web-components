import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    :host([data-vl-allow-overflow]) dialog {
        overflow: visible;
    }
`;
export default styles;
