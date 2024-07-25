import { css, CSSResult } from 'lit';
import typographyTitleStyles from './vl-typography-title.css';
import typographyListStyle from './vl-typography-list.css';
import typographyTableStyle from './vl-typography-table.css';
import typographyElementStyle from './vl-typography-element.css';

const styles: CSSResult[] = [
    css`
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
            color: var(--vl-success-text-color);
        }

        .vl-u-text--warning {
            color: var(--vl-warning-text-color);
        }

        .vl-u-text--error {
            color: var(--vl-error-text-color);
        }

        .vl-typography-next strong,
        .vl-typography-next b,
        .vl-u-text--bold {
            font-weight: 500;
        }

        .vl-typography-next em,
        .vl-typography-next i,
        .vl-u-text--italic {
            font-style: italic;
        }

        .vl-typography-next strike,
        .vl-typography-next s,
        .vl-typography-next del,
        .vl-u-text--strike {
            text-decoration: line-through;
        }

        .vl-typography-next ins,
        .vl-u-text--underline {
            text-decoration: underline;
        }

        .vl-typography-next small,
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
    `,
    ...typographyTitleStyles,
    typographyListStyle,
    typographyTableStyle,
    typographyElementStyle,
];
export default styles;
