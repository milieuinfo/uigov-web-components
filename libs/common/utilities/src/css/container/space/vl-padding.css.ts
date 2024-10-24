import { css, CSSResult } from 'lit';

export const vlPaddingStyles: CSSResult = css`
    .vl-padding-next--small {
        padding: var(--vl-spacing--small) 0;

        @media screen and (max-width: var(--vl-media-screen-small)) {
            padding: var(--vl-spacing--normal) 0;
        }
    }

    .vl-padding-next--medium {
        padding: var(--vl-spacing--medium) 0;

        @media screen and (max-width: var(--vl-media-screen-small)) {
            padding: var(--vl-spacing--normal) 0;
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
