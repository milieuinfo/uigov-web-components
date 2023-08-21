import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    :host {
        display: block;
    }

    :host label {
        display: block;
    }

    :host [data-vl-layer] {
        display: block;
    }
`;
export default styles;
