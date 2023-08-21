import { css, CSSResult } from 'lit';

// deze css is gegenereerd uit de oude custom scss
const styles: CSSResult = css`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    .vl-tab__link {
        cursor: pointer;
    }

    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }
    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    .vl-tab__link {
        text-decoration: none;
    }

    .vl-tab.vl-tab--active > .vl-tab__link {
        color: var(--vl-theme-fg-color);
    }

    .vl-tab__pane[role='tabpanel']:focus {
        outline: none;
    }

    /* Functional header styles */

    :host(.vl-tabs--within-functional-header) .vl-tabs {
        margin: 0 0 -1.5rem 0;
        border: 0;
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tabs {
            left: 0;
            width: 100%;
        }
    }
    :host(.vl-tabs--within-functional-header) .vl-tab {
        top: 0;
        margin: 0 2rem 0 0;
    }
    :host(.vl-tabs--within-functional-header) .vl-tab .vl-tab__link {
        border: 0;
        border-top: 5px solid transparent;
        text-decoration: none;
    }
    :host(.vl-tabs--within-functional-header) .vl-tab .vl-tab__link:visited,
    :host(.vl-tabs--within-functional-header) .vl-tab .vl-tab__link .vl-link__icon {
        color: #05c;
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tab .vl-tab__link {
            padding: 0.7rem 1rem;
            border: 0 !important;
        }
    }
    :host(.vl-tabs--within-functional-header) .vl-tab--active .vl-tab__link {
        color: #333332;
    }
    :host(.vl-tabs--within-functional-header) .vl-tab--active .vl-tab__link:visited {
        color: #333332;
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tab--active {
            border: 0;
        }
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tab {
            padding: 1.4rem 1.5rem !important;
        }
    }
    :host(.vl-tabs--within-functional-header) .vl-tabs__toggle {
        border-top: 0px;
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tabs__toggle {
            left: 0;
            width: 100%;
            margin: 0;
            border-bottom: 1px #cbd2da solid;
        }
    }
    :host(.vl-tabs--within-functional-header) .vl-tabs__toggle[data-vl-close='true'] {
        right: 0;
        left: auto;
        width: 4.2rem;
        border: 0;
        border-bottom: none;
    }
`;
export default styles;
