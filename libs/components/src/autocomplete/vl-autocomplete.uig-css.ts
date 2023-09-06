import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    label.small {
        font-size: 14px;
    }

    li.uig-autocomplete-group {
        font-weight: bold;
    }

    .js-vl-autocomplete div.vl-autocomplete__list-wrapper,
    .js-vl-autocomplete div.autocomplete__list-wrapper {
        max-height: 100vh;
    }

    .js-vl-autocomplete .ui-autocomplete__loader-with-clear {
        right: 20px;
    }

    .uig-autocomplete__clear {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 25px;
        height: 3.5rem;
        z-index: 2;
    }

    .uig-autocomplete__clear .uig-autocomplete__clear-icon::before {
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        margin-top: 4px;
        cursor: pointer;
        line-height: 1.5;
        font-size: 1.8rem;
    }
`;
export default styles;
