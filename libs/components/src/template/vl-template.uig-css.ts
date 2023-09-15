import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    :host {
        position: relative;
    }

    :host([data-vl-v-center]) > div {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    :host([data-vl-v-center]) > div .vl-page {
        top: 50%;
        transform: translate(0, -50%);
    }

    :host([data-vl-v-stretch]) > div {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    :host([data-vl-v-stretch]) > div .vl-page {
        height: 100%;
    }
    :host([data-vl-v-stretch]) > div .vl-page .vl-main-content {
        height: 100%;
    }
    :host([data-vl-v-stretch]) > div .vl-page .vl-main-content ::slotted(*) {
        height: 100%;
    }
`;
export default styles;
