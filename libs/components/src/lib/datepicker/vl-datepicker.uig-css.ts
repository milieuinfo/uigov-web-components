import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    #wrapper {
        position: relative;
    }

    .flatpickr-calendar {
        left: auto !important;
        right: 0 !important;
        display: none;
    }

    button {
        cursor: pointer;
    }
`;
export default styles;
