import { CSSResult, css } from 'lit';
import { mediaQueryMedium, mediaQuerySmall } from './media-queries.mixin.css';

const titleSizes = {
    1: css`
        font-size: 4.4rem;
        margin-bottom: 6rem;
        line-height: 1.18;

        ${mediaQueryMedium(
            css`
                font-size: 4rem;
                margin-bottom: 4.5rem;
            `
        )}

        ${mediaQuerySmall(
            css`
                font-size: 3rem;
                margin-bottom: 3rem;
            `
        )}
    `,
    2: css`
        font-size: var(--vl-title-h2-font-size, 3.2rem);
        margin-bottom: 2rem;
        line-height: 1.24;

        ${mediaQuerySmall(
            css`
                font-size: var(--vl-title-h2-font-size-small, 2.6rem);
                margin-bottom: 1.5rem;
            `
        )}
    `,
    3: css`
        font-size: 2.6rem;
        margin-bottom: 2rem;
        line-height: 1.3;

        ${mediaQuerySmall(
            css`
                font-size: 2.2rem;
                margin-bottom: 1.5rem;
            `
        )}
    `,
    4: css`
        font-size: 2.2rem;
        margin-bottom: 1.8rem;
        line-height: 1.36;

        ${mediaQuerySmall(
            css`
                font-size: 2rem;
                margin-bottom: 1.4rem;
            `
        )}
    `,
    5: css`
        font-size: 2rem;
        margin-bottom: 1.6rem;
        line-height: 1.4;

        ${mediaQuerySmall(
            css`
                font-size: 1.8rem;
                margin-bottom: 1.2rem;
            `
        )}
    `,
    6: css`
        font-size: 1.8rem;
        margin-bottom: 1.4rem;
        line-height: 1.44;

        ${mediaQuerySmall(
            css`
                font-size: 1.8rem;
                margin-bottom: 1rem;
            `
        )}
    `,
};

export const title = (size: 1 | 2 | 3 | 4 | 5 | 6): CSSResult => css`
    /* Reset styles (gebaseerd op DV _reset.scss) */
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;

    /* Title styles (gebaseerd op DV vl-ui-titles/src/scss/_titles.scss) */
    font-weight: 500;
    letter-spacing: var(--vl-title-letter-spacing, initial);
    ${titleSizes[size]}
`;
