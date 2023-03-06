import { css, CSSResult, html, LitElement, PropertyDeclarations, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'reflect-metadata';
import styles from './style/vl-input-slider.scss';

@customElement('vl-input-slider')
export class VlInputSliderComponent extends LitElement {
    private initialValue = 0;
    private maxValue = 100;
    private minValue = 0;

    static get styles(): CSSResult[] {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    static get properties(): PropertyDeclarations {
        return {
            initialValue: {
                type: Number,
                attribute: 'data-vl-initial-value',
                reflect: true,
            },
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
        };
    }

    private handleInput(event: Event): void {
        const target = event.target as HTMLInputElement | null;
        const inputRangeElement: HTMLInputElement | null = this.renderRoot.querySelector('#input-range');
        const inputNumberElement: HTMLInputElement | null = this.renderRoot.querySelector('#input-number');

        if (!target || !inputRangeElement || !inputNumberElement) {
            return;
        }

        inputRangeElement.value = target.value;
        inputNumberElement.value = target.value;

        this.dispatchEvent(
            new CustomEvent('vl-change-value', {
                detail: {
                    value: target.value,
                },
            })
        );
    }

    protected render(): TemplateResult {
        return html`
            <div class="vl-input-slider">
                <input
                    id="input-range"
                    type="range"
                    class="vl-input-slider__input-range"
                    min=${this.minValue}
                    max=${this.maxValue}
                    value=${this.initialValue}
                    @input=${this.handleInput}
                />
                <input
                    id="input-number"
                    type="number"
                    class="vl-input-slider__input-number vl-input-field"
                    min=${this.minValue}
                    max=${this.maxValue}
                    value=${this.initialValue}
                    @input=${this.handleInput}
                />
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-slider': VlInputSliderComponent;
    }
}
