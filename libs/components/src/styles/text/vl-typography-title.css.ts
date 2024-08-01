import { css, CSSResult } from 'lit';
import { title } from '@domg-wc/common-utilities/css/mixin/title.mixin.css';
import { mediaQuerySmall } from '@domg-wc/common-utilities/css/mixin/media-queries.mixin.css';

const styles: CSSResult[] = [
    css`
        .vl-typography-next h1 {
            ${title(1)}
        }

        .vl-typography-next h2 {
            ${title(2)}
        }

        .vl-typography-next h3 {
            ${title(3)}
        }

        .vl-typography-next h4 {
            ${title(4)}
        }

        .vl-typography-next h5 {
            ${title(5)}
        }

        .vl-typography-next h6 {
            ${title(6)}
        }
    `,
    ...[1, 2, 3, 4, 5, 6].map(
        (heading) =>
            css`
                .vl-typography-next h${heading} {
                    display: flex;
                    align-items: center;
                }

                .vl-typography-next h${heading}.alt {
                    text-transform: uppercase;
                    font-weight: 500;
                    border-bottom: 3px solid rgb(232, 235, 238);
                    padding: 1.3rem 0 0.7rem;
                    margin: 0 0 2rem;
                }

                .vl-typography-next h${heading}.underline {
                    border-bottom: 1px solid #cbd2da;
                    margin-bottom: 1.5rem;
                }

                .vl-typography-next h${heading}.no-space-bottom {
                    margin-bottom: 0;
                }

                ${mediaQuerySmall(
                    css`
                        .vl-typography-next h${heading}.underline {
                            margin-bottom: 1rem;
                        }
                    `
                )}
            `
    ),
];
export default styles;
