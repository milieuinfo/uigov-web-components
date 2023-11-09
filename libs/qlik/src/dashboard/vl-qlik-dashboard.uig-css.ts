import { css } from 'lit';

const visualCss = Array.from({ length: 101 }, (x, i) => i).map(
    (i) => css`
        .visual-label-${i}-center {
            width: ${i}%;
            text-align: center;
            display: flex;
            justify-content: center;
            vertical-align: middle;
            font-weight: bold;
        }

        .visual-${i}-center {
            width: ${i}%;
            text-align: center;
            display: flex;
            justify-content: center;
            vertical-align: middle;
        }

        .visual-label-${i}-left {
            width: ${i}%;
            text-align: left;
            display: flex;
            justify-content: left;
            vertical-align: middle;
            font-weight: bold;
        }

        .visual-${i}-left {
            width: ${i}%;
            text-align: left;
            display: flex;
            justify-content: left;
            vertical-align: middle;
        }
    `
);
const colCss = Array.from({ length: 13 }, (x, i) => i).flatMap((i) =>
    Array.from(
        { length: 13 },
        (y, j) => css`
            .vl-col--${i}-${j} {
                flex-basis: ${(i / j) * 100}%;
                max-width: ${(i / j) * 100}%;
                min-width: ${(i / j) * 100}%;
            }
        `
    )
);

const styles = [
    css`
        .js-vl-select[data-type*='multiple'] .vl-pill__close::before {
            content: '\\f15f';
        }

        .olr-select-alternate {
            background-color: #f3f5f6 !important;
        }
    `,
];

styles.push(...visualCss, ...colCss);

export default styles;
