import { css, CSSResult } from 'lit';

// deze css is gegenereerd uit de oude custom scss
const styles: CSSResult = css`
    .uig-functional-header__content {
        display: flex;
        flex-flow: column;
    }

    .uig-functional-header__row {
        display: flex;
        flex-direction: row;
    }

    #back-link {
        display: flex;
    }

    @media (max-width: 767px) {
        .uig-functional-header__row {
            flex-direction: column;
        }
        .uig-functional-header__top-right {
            padding: 0.5rem 1rem 0 1rem;
        }
    }
    :host(.vl-functional-header--full-width) .vl-layout {
        max-width: 100%;
    }
`;
export default styles;
