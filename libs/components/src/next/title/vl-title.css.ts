import { css, CSSResult } from 'lit';
import { mediaQuerySmall } from '@domg-wc/common-utilities/css/mixin/media-queries.mixin.css';
import { title } from '@domg-wc/common-utilities/css/mixin/title.mixin.css';

const headingList = [1, 2, 3, 4, 5, 6];

const styles: CSSResult[] = [
    css`
        h1 {
            ${title(1)}
        }

        h2 {
            ${title(2)}
        }

        h3 {
            ${title(3)}
        }

        h4 {
            ${title(4)}
        }

        h5 {
            ${title(5)}
        }

        h6 {
            ${title(6)}
        }
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
