import { css, CSSResult } from 'lit';

/**
 *     background-color: rgb(255, 255, 255);
 *     border: 0.1rem solid rgb(210, 55, 60);
 */

const styles: CSSResult = css`
    :host {
        --vl-checkbox--switch__error-color: rgb(210, 55, 60);
    }

    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__error-color) !important;
    }

    .vl-checkbox--error .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        color: var(--vl-checkbox--switch__error-color);
        background: #fff;
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--error .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__error-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }
`;
export default styles;
