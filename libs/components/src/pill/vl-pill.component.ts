import { pillStyle } from '@domg/govflanders-style/component';
import { accessibilityStyle, baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { TYPE } from './vl-pill.model';
import pillUigStyle from './vl-pill.uig-css';
import { BaseLitElement } from '@domg-wc/common';

@customElement('vl-pill')
export class VlPillComponent extends BaseLitElement {
    private disabled = false;
    private type = '';
    private closable = false;
    private checkable = false;
    private checked: boolean | undefined;
    private checkboxRef: any;
    private isInMap = false;

    static get styles() {
        return [resetStyle, pillStyle, pillUigStyle, baseStyle, accessibilityStyle];
    }

    static get properties() {
        return {
            disabled: {
                type: Boolean,
                attribute: 'data-vl-disabled',
                reflect: true,
            },
            type: {
                type: String,
                attribute: 'data-vl-type',
                reflect: true,
            },
            closable: {
                type: Boolean,
                attribute: 'data-vl-closable',
                reflect: true,
            },
            checkable: {
                type: Boolean,
                attribute: 'data-vl-checkable',
                reflect: true,
            },
            checked: {
                type: Boolean || undefined,
                attribute: 'data-vl-checked',
                reflect: true,
            },
        };
    }

    constructor() {
        super();
        this.disabled = false;
        this.closable = false;
        this.checkable = false;
        this.checked = false;
        this.checkboxRef = createRef();
    }

    updated(changedProperties: any) {
        changedProperties.forEach((oldValue: any, propName: any) => {
            switch (propName) {
                case 'checked':
                    if (this.checkboxRef.value) {
                        this.checkboxRef.value.checked = this.checked;
                    }
                    break;
                default:
                    break;
            }
        });
    }

    render() {
        const classes = {
            'vl-pill': true,
            'vl-pill--disabled': this.disabled,
            'vl-pill--data-vl-disabled': this.disabled,
            'vl-pill--success': this.type === TYPE.SUCCESS,
            'vl-pill--warning': this.type === TYPE.WARNING,
            'vl-pill--error': this.type === TYPE.ERROR,
            'vl-pill--map': this.isInMap,
        };

        const closableClasses = {
            ...classes,
            'vl-pill--closable': this.closable,
        };

        const checkableClasses = {
            ...classes,
            'vl-pill--checkable': this.checkable,
        };

        if (this.closable) {
            return html`
                <div class="${classMap(closableClasses)}">
                    <slot></slot>
                    <button
                        class="vl-pill__close"
                        type="button"
                        @click=${() => this.dispatchEvent(new CustomEvent('close'))}
                    >
                        <span class="vl-u-visually-hidden">Optie verwijderen</span>
                    </button>
                </div>
                </div>
            `;
        }

        if (this.checkable) {
            return html`
                <label class="${classMap(checkableClasses)}" for="checkbox">
                    <input
                        class="vl-pill--checkable__checkbox"
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        ?disabled=${this.disabled}
                        ?checked=${this.checked}
                        ${ref(this.checkboxRef)}
                        value="checked"
                        @input=${(event: any) => {
                            this.checked = event.target.checked;
                            this.dispatchEvent(
                                new CustomEvent('check', {
                                    bubbles: true,
                                    composed: true,
                                    detail: { checked: this.checked },
                                })
                            );
                        }}
                    />
                    <span></span>
                    <slot></slot>
                </label>
            `;
        }

        return html`
            <span class="${classMap(classes)}">
                <slot></slot>
            </span>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-pill': VlPillComponent;
    }
}
