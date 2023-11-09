import { css } from 'lit';

const styles = Array.from({ length: 13 }, (x, i) => i).flatMap((i) =>
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

export default styles;
