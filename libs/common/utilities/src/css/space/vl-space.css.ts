import { css, CSSResult } from 'lit';
import { ScreenWidth } from '../const/vl-screen-width.const';
import { SpacingRem } from '../const/vl-spacing-rem.const';

export const vlSpaceStyles: CSSResult = css`
    .vl-space-next--small {
        padding: ${SpacingRem.SMALL}rem 0;

        @media screen and (max-width: ${ScreenWidth.SMALL}px) {
            padding: ${SpacingRem.NORMAL}rem 0;
        }
    }

    .vl-space-next--medium {
        padding: ${SpacingRem.MEDIUM}rem 0;

        @media screen and (max-width: ${ScreenWidth.SMALL}px) {
            padding: ${SpacingRem.NORMAL}rem 0;
        }
    }

    .vl-space-next--no-space {
        padding: 0;
    }

    .vl-space-next--no-space-bottom {
        padding-bottom: 0;
    }

    .vl-space-next--no-space-top {
        padding-top: 0;
    }
`;
