import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    :host([data-vl-allow-overflow]) dialog,
    :host([data-vl-allow-overflow]) dialog .vl-modal-dialog__wrapper {
        overflow: visible;
    }

    .vl-modal-dialog__close {
        cursor: pointer;
    }

    ::slotted(button) {
        margin-right: 1.4rem;
    }
`;
export default styles;
