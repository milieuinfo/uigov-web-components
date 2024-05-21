import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import buttonStyle from './vl-button.css';
import { BaseLitElement, webComponent } from '@domg-wc/common-utilities';
import { classMap } from 'lit/directives/class-map.js';
import { globalStylesNext } from '@domg-wc/common-utilities/css/global-styles-decorator';

export const buttonDefaults = {
    type: 'button' as 'button' | 'submit' | 'reset',
    disabled: false as boolean,
    error: false as boolean,
    block: false as boolean,
    large: false as boolean,
    wide: false as boolean,
    narrow: false as boolean,
    secondary: false as boolean,
    tertiary: false as boolean,
    loading: false as boolean,
    toggle: false as boolean,
    on: false as boolean,
    controlled: false as boolean,
} as const;

@globalStylesNext()
@webComponent('vl-button-next')
export class VlButtonComponent extends BaseLitElement {
    private type = buttonDefaults.type;
    private disabled = buttonDefaults.disabled;
    private error = buttonDefaults.error;
    private block = buttonDefaults.block;
    private large = buttonDefaults.large;
    private wide = buttonDefaults.wide;
    private narrow = buttonDefaults.narrow;
    private secondary = buttonDefaults.secondary;
    private tertiary = buttonDefaults.tertiary;
    private loading = buttonDefaults.loading;
    private toggle = buttonDefaults.toggle;
    private on = buttonDefaults.on;
    private controlled = buttonDefaults.controlled;

    static get styles(): CSSResult[] {
        return [buttonStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            type: { type: String },
            disabled: { type: Boolean },
            error: { type: Boolean },
            block: { type: Boolean },
            large: { type: Boolean },
            wide: { type: Boolean },
            narrow: { type: Boolean },
            secondary: { type: Boolean },
            tertiary: { type: Boolean },
            loading: { type: Boolean },
            toggle: { type: Boolean },
            on: {
                type: Boolean,
                reflect: true,
                hasChanged: (_value, oldValue) => {
                    if (oldValue === undefined) {
                        // Sla de eerste change over omdat anders het vl-toggle event 2x wordt getriggerd bij de eerste render.
                        return false;
                    }

                    return true;
                },
            },
            controlled: { type: Boolean },
        };
    }

    updated(changedProperties: Map<string, unknown>) {
        if (changedProperties.has('on') && this.toggle) {
            this.dispatchEvent(
                new CustomEvent('vl-toggle', { detail: { on: this.on }, bubbles: true, composed: true })
            );
        }
    }

    render(): TemplateResult {
        const isInMap = this.closest('vl-map') !== null;
        const displayAsTertiaryButton = this.tertiary || (this.toggle && !this.on);
        const classes = {
            disabled: this.disabled,
            error: this.error,
            block: this.block,
            large: this.large,
            wide: this.wide,
            narrow: this.narrow,
            secondary: this.secondary,
            tertiary: displayAsTertiaryButton,
            loading: this.loading,
            'button-in-map': isInMap,
        };

        return html` <button
            class=${classMap(classes)}
            type=${this.type}
            ?disabled=${this.disabled}
            @click=${this.handleClick}
        >
            <slot></slot>
        </button>`;
    }

    protected handleClick(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.toggle && !this.controlled) {
            this.on = !this.on;
        }

        if (this.type === 'submit') {
            this.closest('form')?.requestSubmit();
        }

        if (this.type === 'reset') {
            this.closest('form')?.reset();
        }

        this.dispatchEvent(new CustomEvent('vl-click', { bubbles: true, composed: true }));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-button-next': VlButtonComponent;
    }
}
