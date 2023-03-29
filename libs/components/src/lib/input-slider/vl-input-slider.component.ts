import { css, CSSResult, html, LitElement, PropertyDeclarations, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'reflect-metadata';
import styles from './style/vl-input-slider.scss';

@customElement('vl-input-slider')
export class VlInputSliderComponent extends LitElement {
    maxValue = 100;
    minValue = 0;
    value = 0;

    static get styles(): CSSResult[] {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    static get properties(): PropertyDeclarations {
        return {
            maxValue: {
                type: Number,
                attribute: 'data-vl-max-value',
                reflect: true,
            },
            minValue: {
                type: Number,
                attribute: 'data-vl-min-value',
                reflect: true,
            },
            value: {
                type: Number,
                attribute: 'data-vl-value',
                reflect: true,
            },
        };
    }

    protected updated(changedProperties: Map<string, unknown>): void {
        if (changedProperties.has('value') || changedProperties.has('minValue') || changedProperties.has('maxValue')) {
            const validatedValue = this.validateValue(this.value);

            if (this.value !== validatedValue) {
                this.value = validatedValue;
                return;
            }

            if (changedProperties.has('value') && !isNaN(this.value)) {
                this.dispatchEvent(
                    new CustomEvent('vl-change-value', {
                        detail: {
                            value: this.value,
                        },
                    })
                );
            }
        }
    }

    protected render(): TemplateResult {
        return html`
            <div class="vl-input-slider">
                <input
                    id="input-range"
                    type="range"
                    aria-label="schuifregelaar"
                    class="vl-input-slider__input-range"
                    min=${this.minValue}
                    max=${this.maxValue}
                    .value=${this.value}
                    @input=${this.handleInput}
                />
                <input
                    id="input-number"
                    type="number"
                    aria-label="nummerinvoer"
                    class="vl-input-slider__input-number vl-input-field"
                    min=${this.minValue}
                    max=${this.maxValue}
                    .value=${this.value}
                    @input=${this.handleInput}
                />
            </div>
        `;
    }

    private handleInput(event: Event): void {
        const target = event.target as HTMLInputElement | null;
        const newValue = parseInt(target?.value ?? '');

        this.value = newValue;
    }

    private validateValue(value: number) {
        let validatedValue = value;

        if (validatedValue < this.minValue) {
            validatedValue = this.minValue;
        }

        if (validatedValue > this.maxValue) {
            validatedValue = this.maxValue;
        }

        return validatedValue;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-slider': VlInputSliderComponent;
    }
}
