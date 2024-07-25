import { CSSResult, css } from 'lit';
import { mediaQuerySmall, mediaQueryMedium } from '@domg-wc/common-utilities/css/mixin/media-queries.mixin.css';

const styles: CSSResult = css`
    .vl-text-next--bold {
        font-weight: 500;
    }

    .vl-u-text--ellipse {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .vl-u-text--uppercase {
        text-transform: uppercase;
    }

    .vl-u-text--lowercase {
        text-transform: lowercase;
    }

    .vl-u-text--capitalize {
        display: inline-block;
        text-transform: lowercase;
    }
    .vl-u-text--capitalize::first-letter {
        text-transform: uppercase;
    }

    .vl-u-text--success {
        color: #007a37;
    }

    .vl-u-text--warning {
        color: #9f5804;
    }

    .vl-u-text--error {
        color: #d2373c;
    }

    .vl-u-text--bold {
        font-weight: 500;
    }

    .vl-u-text--italic {
        font-style: italic;
    }

    .vl-u-text--small {
        font-size: 1.4rem !important;
    }

    .vl-u-text--medium {
        font-size: 1.6rem !important;
    }

    .vl-u-text--xsmall {
        font-size: 1.2rem !important;
    }

    .vl-u-text--xxsmall {
        font-size: 1rem !important;
    }

    mark,
    .vl-u-text--marked {
        background-color: transparent;
        box-shadow: inset 0 -10px 0 0 rgba(255, 197, 21, 0.3);
    }
`;
export default styles;
