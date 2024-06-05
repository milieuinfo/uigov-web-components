import { css, CSSResult } from 'lit';
import { mediaQueryMedium, mediaQuerySmall } from '@domg-wc/common-utilities/css/mixin/media-queries.mixin.css';

const headingList = [1, 2, 3, 4, 5, 6];

const styles: CSSResult[] = [
    css`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            /* Reset styles (gebaseerd op DV _reset.scss) */
            margin: 0;
            border: 0;
            padding: 0;
            vertical-align: baseline;

            /* Title styles (gebaseerd op DV vl-ui-titles/src/scss/_titles.scss) */
            font-weight: 500;
        }

        h1 {
            font-size: 4.4rem;
            margin-bottom: 6rem;
            line-height: 1.18;
        }

        h2 {
            font-size: 3.2rem;
            margin-bottom: 2rem;
            line-height: 1.24;
        }

        h3 {
            font-size: 2.6rem;
            margin-bottom: 2rem;
            line-height: 1.3;
        }

        h4 {
            font-size: 2.2rem;
            margin-bottom: 1.8rem;
            line-height: 1.36;
        }

        h5 {
            font-size: 2rem;
            margin-bottom: 1.6rem;
            line-height: 1.4;
        }

        h6 {
            font-size: 1.8rem;
            margin-bottom: 1.4rem;
            line-height: 1.44;
        }

        ${mediaQueryMedium(
            css`
                h1 {
                    font-size: 4rem;
                    margin-bottom: 4.5rem;
                }
            `
        )}
        ${mediaQuerySmall(
            css`
                h1 {
                    font-size: 3rem;
                    margin-bottom: 3rem;
                }

                h2 {
                    font-size: 2.6rem;
                    margin-bottom: 1.5rem;
                }

                h3 {
                    font-size: 2.2rem;
                    margin-bottom: 1.5rem;
                }

                h4 {
                    font-size: 2rem;
                    margin-bottom: 1.4rem;
                }

                h5 {
                    font-size: 1.8rem;
                    margin-bottom: 1.2rem;
                }

                h6 {
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                }
            `
        )}
    `,
    ...headingList.map(
        (heading) =>
            css`
                h${heading} {
                    display: flex;
                    align-items: center;
                }

                h${heading}.alt {
                    text-transform: uppercase;
                    font-weight: 500;
                    border-bottom: 3px solid rgb(232, 235, 238);
                    padding: 1.3rem 0 0.7rem;
                    margin: 0 0 2rem;
                }

                h${heading}.underline {
                    border-bottom: 1px solid #cbd2da;
                    margin-bottom: 1.5rem;
                }

                h${heading}.no-space-bottom {
                    margin-bottom: 0;
                }

                ${mediaQuerySmall(
                    css`
                        h${heading}.underline {
                            margin-bottom: 1rem;
                        }
                    `
                )}
            `
    ),
];
export default styles;
