import { css, CSSResult } from 'lit';
import { ScreenWidth } from '../base/vl-screen-width.const';
import { SpacingRem } from './vl-spacing-rem.const';

export const vlPaddingStyles: CSSResult = css`
    .vl-padding-next--small {
        padding: ${SpacingRem.SMALL}rem 0;

        @media screen and (max-width: ${ScreenWidth.SMALL}px) {
            padding: ${SpacingRem.NORMAL}rem 0;
        }
    }

    .vl-padding-next--medium {
        padding: ${SpacingRem.MEDIUM}rem 0;

        @media screen and (max-width: ${ScreenWidth.SMALL}px) {
            padding: ${SpacingRem.NORMAL}rem 0;
        }
    }

    .vl-padding-next--no {
        padding: 0;
    }

    .vl-padding-next--no-bottom {
        padding-bottom: 0;
    }

    .vl-padding-next--no-top {
        padding-top: 0;
    }
`;
