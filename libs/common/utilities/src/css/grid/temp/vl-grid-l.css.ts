import { css, CSSResult } from 'lit';
import { mediaQueryLarge } from '../../mixin/media-queries.mixin.css';

export const gridSmall = (size: string): CSSResult => css`
    ${mediaQueryLarge(css`
        /* @formatter:off */
        /* in order for this to work, all elements must have a defined width and height */
        .col--l-justify-items-start {
            justify-items: start;
        }
        .col--l-justify-items-end {
            justify-items: end;
        }
        .col--l-justify-items-center {
            justify-items: center;
        }
        .col--l-justify-items-stretch {
            justify-items: stretch;
        }

        /* in order for this to work, all elements must have a defined width and height */
        .col--l-align-items-start {
            align-items: start;
        }
        .col--l-align-items-end {
            align-items: end;
        }
        .col--l-align-items-center {
            align-items: center;
        }
        .col--l-align-items-stretch {
            align-items: stretch;
        }

        /* in order for this to work, all elements must have a defined width and height s*/
        .col--l-justify-content-start {
            justify-content: start;
        }
        .col--l-justify-content-end {
            justify-content: end;
        }
        .col--l-justify-content-center {
            justify-content: center;
        }
        .col--l-justify-content-stretch {
            justify-content: stretch;
        }
        .col--l-justify-content-space-around {
            justify-content: space-around;
        }
        .col--l-justify-content-space-between {
            justify-content: space-between;
        }
        .col--l-justify-content-space-evenly {
            justify-content: space-evenly;
        }

        /* in order for this to work, all elements must have a defined width and height s*/
        .col--l-align-content-start {
            align-content: start;
        }
        .col--l-align-content-end {
            align-content: end;
        }
        .col--l-align-content-center {
            align-content: center;
        }
        .col--l-align-content-stretch {
            align-content: stretch;
        }
        .col--l-align-content-space-around {
            align-content: space-around;
        }
        .col--l-align-content-space-between {
            align-content: space-between;
        }
        .col--l-align-content-space-evenly {
            align-content: space-evenly;
        }

        .col--l-grid-auto-flow-row {
            grid-auto-flow: row;
        }
        .col--l-grid-auto-flow-column {
            grid-auto-flow: column;
        }
        .col--l-grid-auto-flow-dense {
            grid-auto-flow: dense;
        }

        .col--l-1 {
            grid-column-end: span 1;
        }
        .col--l-2 {
            grid-column-end: span 2;
        }
        .col--l-3 {
            grid-column-end: span 3;
        }
        .col--l-4 {
            grid-column-end: span 4;
        }
        .col--l-5 {
            grid-column-end: span 5;
        }
        .col--l-6 {
            grid-column-end: span 6;
        }
        .col--l-7 {
            grid-column-end: span 7;
        }
        .col--l-8 {
            grid-column-end: span 8;
        }
        .col--l-9 {
            grid-column-end: span 9;
        }
        .col--l-10 {
            grid-column-end: span 10;
        }
        .col--l-11 {
            grid-column-end: span 11;
        }
        .col--l-12 {
            grid-column-end: span 12;
        }

        .col--l-offset-2 {
            grid-column-start: 2;
        }
        .col--l-offset-3 {
            grid-column-start: 3;
        }
        .col--l-offset-4 {
            grid-column-start: 4;
        }
        .col--l-offset-5 {
            grid-column-start: 5;
        }
        .col--l-offset-6 {
            grid-column-start: 6;
        }
        .col--l-offset-7 {
            grid-column-start: 7;
        }
        .col--l-offset-8 {
            grid-column-start: 8;
        }
        .col--l-offset-9 {
            grid-column-start: 9;
        }
        .col--l-offset-10 {
            grid-column-start: 10;
        }
        .col--l-offset-11 {
            grid-column-start: 11;
        }
        .col--l-offset-12 {
            grid-column-start: 12;
        }

        .col--l-justify-self-start {
            justify-self: start;
        }
        .col--l-justify-self-end {
            justify-self: end;
        }
        .col--l-justify-self-center {
            justify-self: center;
        }
        .col--l-justify-self-stretch {
            justify-self: stretch;
        }

        .col--l-align-self-start {
            align-self: start;
        }
        .col--l-align-self-end {
            align-self: end;
        }
        .col--l-align-self-center {
            align-self: center;
        }
        .col--l-align-self-stretch {
            align-self: stretch;
        }
        /* @formatter:on */
    `)}
`;
