import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    :host(.vl-accordion--bold) .vl-accordion__title,
    :host(.vl-accordion--bold) .vl-accordion__icon::before {
        font-weight: 700;
    }

    :host(.vl-accordion--disabled) .vl-toggle {
        cursor: not-allowed;
        text-decoration: none;
    }
    :host(.vl-accordion--disabled) .vl-accordion__title,
    :host(.vl-accordion--disabled) .vl-accordion__icon::before {
        color: #687483;
    }

    .vl-accordion:not(.js-vl-accordion--open) .vl-accordion__content {
        display: none;
    }
`;
export default styles;
