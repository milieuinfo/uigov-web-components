import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
`;
export default styles;
