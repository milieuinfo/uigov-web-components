// ! Maakt gebruik van een lokale versie van de getranspileerde code van Digitaal Vlaanderen (./vl-range.lib.js) maar zou gebruik moeten maken van de rangeSlider.js file in de @govflanders-14/vl-ui-range node_module.
// ! Omdat dit component toch niet nodig was en niet in de codebase komt is het werk ervoor stopgezet en is deze omzetting niet gebeurd, zie UIG-2342.
// TODO rangeSlider.js gebruiken zoals hierboven beschreven.
// TODO Events debouncen en uitsturen bij het aanpassen van de min- of maxwaarde zodat afnemers aan de gekozen waarden kunnen.
// TODO Cypress tests schrijven.
// TODO Stories fine-tunen.
import '@govflanders-v14/vl-ui-util/dist/js/util.js';
import './vl-range.lib.js';
import { css, CSSResult, html, LitElement, PropertyDeclarations, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './style/vl-range.scss';
import 'reflect-metadata';

declare const vl: any;

@customElement('vl-range')
export class VlRangeComponent extends LitElement {
    private minLabel = 'Van';
    private maxLabel = 'Tot';
    private minValue = 0;
    private maxValue = 999;

    static get properties(): PropertyDeclarations {
        return {
            minLabel: {
                type: String,
                attribute: 'data-vl-min-label',
                reflect: true,
            },
            maxLabel: {
                type: String,
                attribute: 'data-vl-max-label',
                reflect: true,
            },
            minValue: {
                type: Number,
                attribute: 'data-vl-min-value',
                reflect: true,
            },
            maxValue: {
                type: Number,
                attribute: 'data-vl-max-value',
                reflect: true,
            },
        };
    }

    static get styles(): CSSResult[] {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    protected firstUpdated(): void {
        // Calling this.dress() in the firstUpdated() lifecycle method so this.renderRoot is available to query the Shadow DOM.
        this.dress();
    }

    private dress(): void {
        const rangeElement = this.renderRoot?.querySelector('.vl-range');
        const isDressed = rangeElement?.getAttribute('data-vl-range-dressed');

        if (rangeElement && !isDressed) {
            vl.range.dress(rangeElement);
        }
    }

    protected render(): TemplateResult {
        return html`
            <div class="vl-range" data-vl-range>
                <div class="vl-range__from-label">
                    <label for="from" class="vl-range__input-label">${this.minLabel}</label>
                    <input
                        class="vl-input-field vl-input-field--small js-vl-range__from-input"
                        type="number"
                        id="from"
                        name="from"
                        value=${this.minValue}
                        pattern="[0-9]*"
                    />
                </div>
                <div class="vl-range__to-label">
                    <label for="to" class="vl-range__input-label">${this.maxLabel}</label>
                    <input
                        class="vl-input-field vl-input-field--small js-vl-range__to-input"
                        type="number"
                        id="to"
                        name="to"
                        value=${this.maxValue}
                        pattern="[0-9]*"
                    />
                </div>
                <div class="vl-range__slider js-vl-range__slider">
                    <div class="vl-range__slider-range js-vl-range__slider-range"></div>
                    <i
                        class="vl-vi vl-vi-arrow-right-fat js-vl-range__from-handle vl-range__handle vl-range__handle-from"
                        role="slider"
                        tabindex="0"
                        aria-valuemin=${this.minValue}
                        aria-valuenow=${this.minValue}
                        aria-valuetext=${this.minValue}
                        aria-valuemax=${this.maxValue}
                        aria-label="Minimumwaarde"
                    ></i>
                    <i
                        class="vl-vi vl-vi-arrow-left-fat js-vl-range__to-handle vl-range__handle vl-range__handle-to"
                        role="slider"
                        tabindex="0"
                        aria-valuemin=${this.minValue}
                        aria-valuenow=${this.maxValue}
                        aria-valuetext=${this.maxValue}
                        aria-valuemax=${this.maxValue}
                        aria-label="Maximumwaarde"
                    ></i>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-range': VlRangeComponent;
    }
}
