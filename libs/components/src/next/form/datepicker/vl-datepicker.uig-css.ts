import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    :host {
        --vl-error-color: rgb(210, 55, 60);
        --vl-success-color: rgb(0, 158, 71);
    }
    button {
        cursor: pointer;
    }
    .vl-input-field {
        border-radius: 0.3rem 0px 0px 0.3rem;
        border-right-width: 0px;
    }
    .vl-input-addon--success {
        border-color: var(--vl-success-color);
    }
    .vl-input-addon--success .vl-vi {
        color: var(--vl-success-color) !important;
    }
    .vl-input-addon--error {
        border-color: var(--vl-error-color);
    }
    .vl-input-addon--error .vl-vi {
        color: var(--vl-error-color) !important;
    }

    .flatpickr-wrapper--block {
        width: 100%;
    }

    .flatpickr-calendar--push-top {
        margin-top: 14px;
    }
`;
export default styles;
