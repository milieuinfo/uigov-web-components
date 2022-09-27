import { html, css, LitElement, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './style/vl-toggle-button.scss';

export const ICON_PLACEMENT = {
    BEFORE: 'before',
    AFTER: 'after',
};

export class VlToggleButtonComponent extends LitElement {
    private icon = '';
    private iconPlacement = '';
    private textHidden = false;
    private error = false;
    private block = false;
    private large = false;
    private wide = false;
    private narrow = false;
    private loading = false;
    private disabled = false;
    private active: boolean | undefined = undefined;
    private _active: boolean | undefined = false;
    private isInMap = false;

    static get properties() {
        return {
            icon: {
                type: String,
                attribute: 'data-vl-icon',
                reflect: true,
            },
            iconPlacement: {
                type: String,
                attribute: 'data-vl-icon-placement',
                reflect: true,
            },
            textHidden: {
                type: Boolean,
                attribute: 'data-vl-text-hidden',
                reflect: true,
            },
            error: {
                type: Boolean,
                attribute: 'data-vl-error',
                reflect: true,
            },
            block: {
                type: Boolean,
                attribute: 'data-vl-block',
                reflect: true,
            },
            large: {
                type: Boolean,
                attribute: 'data-vl-large',
                reflect: true,
            },
            wide: {
                type: Boolean,
                attribute: 'data-vl-wide',
                reflect: true,
            },
            narrow: {
                type: Boolean,
                attribute: 'data-vl-narrow',
                reflect: true,
            },
            loading: {
                type: Boolean,
                attribute: 'data-vl-loading',
                reflect: true,
            },
            disabled: {
                type: Boolean,
                attribute: 'disabled',
                reflect: true,
            },
            _active: {
                type: Boolean,
                state: true,
            },
            active: {
                type: Boolean || undefined,
            },
        };
    }

    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    createRenderRoot() {
        const root = super.createRenderRoot();
        root.addEventListener('click', (event) => {
            const { disabled } = this;
            if (disabled) {
                event.stopPropagation();
            }
        });
        return root;
    }

    constructor() {
        super();
        this.iconPlacement = ICON_PLACEMENT.AFTER;
        this.textHidden = false;
        this.disabled = false;
    }

    _isControlled() {
        return this.active !== undefined;
    }

    _fireChange() {
        this.dispatchEvent(new CustomEvent('change', { detail: { isActive: this._active } }));
    }

    updated(changedProperties: any) {
        changedProperties.forEach((oldValue: any, propName: any) => {
            switch (propName) {
                case 'active':
                    if (this._isControlled()) {
                        this._active = this.active;
                    }
                    break;
                case '_active':
                    // Don't fire change event for controlled component when active is first set via component props
                    if (!this._isControlled() || (this._isControlled() && oldValue !== undefined)) {
                        this._fireChange();
                    }
                    break;
                default:
                    break;
            }
        });
    }

    _buttonWrap(children: any) {
        return html`
            <button
                class=${classMap({
                    'vl-button--map': this.isInMap,
                })}
                is="vl-button"
                ?data-vl-error=${this._active && this.error}
                ?data-vl-block=${this.block}
                ?data-vl-large=${this.large}
                ?data-vl-wide=${this.wide}
                ?data-vl-narrow=${this.narrow}
                ?data-vl-loading=${this.loading}
                ?disabled=${this.disabled}
                ?data-vl-tertiary=${!this._active}
                @click=${() => {
                    if (!this._isControlled()) {
                        this._active = !this._active;
                    }
                }}
            >
                ${children}
            </button>
        `;
    }

    _iconTemplate() {
        if (this.textHidden) {
            return html`${this._buttonWrap(
                html`<span is="vl-icon" data-vl-icon=${this.icon}></span>
                    <span is="vl-text" data-vl-visually-hidden><slot></slot></span>`
            )}`;
        }
        if (this.iconPlacement === ICON_PLACEMENT.BEFORE) {
            return html`${this._buttonWrap(
                html`<span is="vl-icon" data-vl-icon=${this.icon} data-vl-before></span><slot></slot>`
            )}`;
        }
        return html`${this._buttonWrap(
            html`<slot></slot><span is="vl-icon" data-vl-icon=${this.icon} data-vl-after></span>`
        )}`;
    }

    render() {
        return this.icon ? this._iconTemplate() : html`${this._buttonWrap(html`<slot></slot>`)}`;
    }
}

customElements.define('vl-toggle-button', VlToggleButtonComponent);
