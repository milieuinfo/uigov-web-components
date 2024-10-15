import { css, CSSResult, unsafeCSS } from 'lit';
import { gridColumnsLarge } from './temp/vl-grid-l.css';
import { gridColumnsMedium } from './temp/vl-grid-m.css';
import { gridColumnsSmall } from './temp/vl-grid-s.css';
import { gridColumnsExtraSmall } from './temp/vl-grid-xs.css';
import { ScreenWidth } from './vl-screen-width.const';

export const vlGridStyles: CSSResult = css`
    .vl-grid-next {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 1vmax; /* te bepalen */
        grid-row-gap: 1vmax; /* te bepalen */

        /*
            grid-auto-flow DETERMINES HOW THE GRID WILL FILL UP. IF YOU ENABLE THE grid-auto-flow PROPERTY,
            grid-column-gap WILL HAVE NO EFFECT ON THE AUTO-GENERATED ROWS, SO YOU WILL NEED TO SET
            A MARGIN TOP &/OR BOTTOM TO THE ELEMENTS INSIDE THE GRID CONTAINER IF YOU WANT A ROW GAP.

            dense tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items
            come up later,

            row TELLS THE AUTO-PLACEMENT ALGORITHM TO FILL IN EACH ROW IN TURN, ADDING NEW ROWS AS NECESSARY
            column TELLS THE AUTO-PLACEMENT ALGORITHM TO FILL IN EACH COLUMN IN TURN, ADDING NEW COLUMNS AS NECESSARY
        */
        grid-auto-flow: dense;

        @media screen and (min-width: ${ScreenWidth.MEDIUM}px) {
            ${unsafeCSS(gridColumnsLarge())}
        }

        @media screen and (max-width: ${ScreenWidth.MEDIUM}px) {
            ${unsafeCSS(gridColumnsMedium())}
        }

        @media screen and (max-width: ${ScreenWidth.SMALL}px) {
            ${unsafeCSS(gridColumnsSmall())}
        }

        @media screen and (max-width: ${ScreenWidth.EXTRA_SMALL}px) {
            ${unsafeCSS(gridColumnsExtraSmall())}
        }
    }
`;
