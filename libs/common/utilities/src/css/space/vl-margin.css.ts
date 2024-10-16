import { css, CSSResult } from 'lit';
import { ScreenWidth } from '../const/vl-screen-width.const';
import { SpacingRem } from '../const/vl-spacing-rem.const';

export const vlMarginStyles: CSSResult = css`
    .vl-margin-next--small {
        margin: ${SpacingRem.SMALL}rem 0;

        @media screen and (max-width: ${ScreenWidth.SMALL}px) {
            margin: ${SpacingRem.NORMAL}rem 0;
        }
    }

    .vl-margin-next--medium {
        margin: ${SpacingRem.MEDIUM}rem 0;

        @media screen and (max-width: ${ScreenWidth.SMALL}px) {
            margin: ${SpacingRem.NORMAL}rem 0;
        }
    }

    .vl-margin-next--no {
        margin: 0;
    }

    .vl-margin-next--no-bottom {
        margin-bottom: 0;
    }

    .vl-margin-next--no-top {
        margin-top: 0;
    }
`;
