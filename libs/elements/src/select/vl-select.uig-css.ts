import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    .js-vl-select,
    .vl-select__list--dropdown {
        z-index: 100;
    }

    .js-vl-select.is-open,
    .vl-select__list--dropdown.is-active {
        z-index: 101;
    }

    .js-vl-select.vl-search__input > .vl-select__inner {
        border: none;
    }
    .js-vl-select.vl-search__input > .vl-select__inner:hover {
        box-shadow: none;
    }
`;
export default styles;
