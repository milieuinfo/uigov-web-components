import { mediaQuerySmall } from '@domg-wc/common-utilities/css/mixin/media-queries.mixin.css';
import { focusOutline } from '@domg-wc/common-utilities/css/mixin/outline.mixin.css';
import { waveAnimation } from '@domg-wc/common-utilities/css/mixin/animation.mixin.css';
import { CSSResult, css, unsafeCSS } from 'lit';

const borderWidth = '0.2rem';
const borderWidthSmall = '0.1rem';
const differenceBetweenRegularBorderAndSmallBorder = `calc(${borderWidth} - ${borderWidthSmall})`;
const loadingAnimationName = 'waving-light';

const styles: CSSResult = css`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */
    ${waveAnimation(loadingAnimationName, 'var(--vl-action-color--disabled)')}

    button {
        /* Reset styles - gebaseerd op DV mixin > _buttons.scss */
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none; // doesn't work without prefix on Safari iOS11
        border: 0;
        background-color: transparent;
        padding: 0;

        /* Button styles - gebaseerd op DV _button.scss */
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        min-height: 3.5rem;
        font-family: inherit;
        font-size: var(--vl-font-size--small);
        font-weight: 500;
        padding: var(--vl-spacing--xxsmall) var(--vl-spacing--normal);
        background-color: var(--vl-action-color);
        border: ${unsafeCSS(borderWidth)} solid var(--vl-action-color);
        border-radius: var(--vl-border-radius);
        color: var(--vl-white);
        max-width: 100%;

        ${mediaQuerySmall(
            css`
                padding: var(--vl-spacing--xsmall);
            `
        )}

        &:focus {
            ${focusOutline()}
        }

        &:hover {
            border-color: var(--vl-action-color--hover);
            background-color: var(--vl-action-color--hover);
        }

        &:active {
            border-color: var(--vl-action-color--active);
            background-color: var(--vl-action-color--active);
        }

        &.secondary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${unsafeCSS(borderWidth)} solid currentColor;
            transition: color 0.2s, border-color 0.2s;

            &:focus {
                color: var(--vl-action-color--active);
            }

            &:hover,
            &:active {
                color: var(--vl-action-color--hover);
            }
        }

        &.tertiary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${unsafeCSS(borderWidthSmall)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${unsafeCSS(differenceBetweenRegularBorderAndSmallBorder)});

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${unsafeCSS(borderWidth)};
                padding: 0 var(--vl-spacing--normal);
            }

            ${mediaQuerySmall(
                css`
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${unsafeCSS(differenceBetweenRegularBorderAndSmallBorder)}
                    );

                    &:hover,
                    &:active {
                        padding: var(--vl-spacing--xsmall);
                    }
                `
            )}

            &.button-in-map {
                background-color: var(--vl-map-background-color);
            }
        }

        &.error {
            background-color: var(--vl-error-color);

            &:hover,
            &:active {
                background-color: var(--vl-error-color--hover);
            }

            &.secondary {
                color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                }
            }

            &.tertiary {
                color: var(--vl-error-color);
                border-color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                    border-color: var(--vl-error-color--hover);
                }
            }
        }

        &.block {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        &.large {
            padding-top: var(--vl-spacing--small);
            padding-bottom: var(--vl-spacing--small);
            font-size: var(--vl-font-size);

            &.tertiary {
                padding-top: calc(
                    var(--vl-spacing--small) + ${unsafeCSS(differenceBetweenRegularBorderAndSmallBorder)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${unsafeCSS(differenceBetweenRegularBorderAndSmallBorder)}
                );

                &:hover,
                &:active {
                    padding-top: var(--vl-spacing--small);
                    padding-bottom: var(--vl-spacing--small);
                }
            }
        }

        &.wide {
            padding-left: 6rem;
            padding-right: 6rem;

            &.tertiary {
                padding-left: calc(6rem + ${unsafeCSS(differenceBetweenRegularBorderAndSmallBorder)});
                padding-right: calc(6rem + ${unsafeCSS(differenceBetweenRegularBorderAndSmallBorder)});

                &:hover,
                &:active {
                    padding-left: 6rem;
                    padding-right: 6rem;
                }
            }
        }

        &.narrow {
            padding-left: var(--vl-spacing--xsmall);
            padding-right: var(--vl-spacing--xsmall);

            &.tertiary {
                padding: 0 calc(var(--vl-spacing--xsmall) + ${unsafeCSS(differenceBetweenRegularBorderAndSmallBorder)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                ${mediaQuerySmall(
                    css`
                        padding: calc(
                            var(--vl-spacing--xsmall) + ${unsafeCSS(differenceBetweenRegularBorderAndSmallBorder)}
                        );

                        &:hover,
                        &:active {
                            padding: var(--vl-spacing--xsmall);
                        }
                    `
                )}
            }
        }

        &.disabled {
            color: var(--vl-action-color--disabled);
            background-color: var(--vl-action-background-color--disabled);
            border-color: var(--vl-action-background-color--disabled);
            cursor: not-allowed;

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-action-color--disabled);
                background-color: var(--vl-action-background-color--disabled);
                border-color: var(--vl-action-background-color--disabled);
            }
        }

        &.loading {
            color: var(--vl-white);
            background-color: var(--vl-action-background-color--disabled);
            cursor: default;
            padding: var(--vl-spacing--xsmall) 8rem var(--vl-spacing--xsmall) 4rem;
            position: relative;

            &::after {
                animation: ${unsafeCSS(loadingAnimationName)} infinite 1s linear;
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: 4rem;
                margin-top: -0.2rem;
                margin-right: 3.2rem;
                width: 0.4rem;
                height: 0.4rem;
                background-color: var(--vl-action-background-color--disabled);
                border-radius: 50%;
                box-shadow: 1rem 0 var(--vl-background-color), 2rem 0 var(--vl-background-color),
                    3rem 0 var(--vl-background-color);
            }

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-white);
            }

            &.disabled {
                cursor: not-allowed;
            }
        }
    }
`;
export default styles;
