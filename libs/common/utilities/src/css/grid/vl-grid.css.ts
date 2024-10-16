import { css, CSSResult } from 'lit';
import { ScreenWidth } from '../const/vl-screen-width.const';
import { columnLargeStyles } from './col/vl-col-l.css';
import { columnMediumStyles } from './col/vl-col-m.css';
import { columnSmallStyles } from './col/vl-col-s.css';
import { columnExtraSmallStyles } from './col/vl-col-xs.css';
import { gridLargeStyles } from './grid/vl-grid-l.css';
import { gridMediumStyles } from './grid/vl-grid-m.css';
import { gridSmallStyles } from './grid/vl-grid-s.css';
import { gridExtraSmallStyles } from './grid/vl-grid-xs.css';

export const vlGridStyles = css`
    .vl-grid-next {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 1vmax; /* te bepalen */
        grid-row-gap: 1vmax; /* te bepalen */

        div {
            width: 100px;
            height: 100px;
            background-color: #5990de;
            box-sizing: content-box;
            border: #003bb0 1px solid;
        }

        ${columnExtraSmallStyles()};
        ${gridExtraSmallStyles()};

        @media screen and (max-width: ${ScreenWidth.SMALL}px) {
            ${gridSmallStyles()}
            ${columnSmallStyles()}
        }

        @media screen and (max-width: ${ScreenWidth.MEDIUM}px) {
            ${gridMediumStyles()}
            ${columnMediumStyles()}
        }

        @media screen and (min-width: ${ScreenWidth.MEDIUM}px) {
            ${gridLargeStyles()}
            ${columnLargeStyles()}
        }
    }
`;
