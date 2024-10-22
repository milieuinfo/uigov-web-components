import { css, CSSResult } from 'lit';
import { SpacingRem } from './vl-spacing-rem.const';

export const vlMarginStyles: CSSResult = css`
    .vl-margin-next--small {
        margin: ${SpacingRem.SMALL}rem 0;

        @media screen and (max-width: var(--vl-media-screen-small)) {
            margin: ${SpacingRem.NORMAL}rem 0;
        }
    }

    .vl-margin-next--medium {
        margin: ${SpacingRem.MEDIUM}rem 0;

        @media screen and (max-width: var(--vl-media-screen-small)) {
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
