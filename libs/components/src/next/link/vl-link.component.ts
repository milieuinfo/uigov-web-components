import { BaseLitElement, ICON_PLACEMENT, webComponent } from '@domg-wc/common-utilities';
import { vlGlobalStylesNext, vlIconStyles, vlLinkStyles } from '@domg-wc/common-utilities/css';
import { CSSResult, html, nothing, PropertyDeclarations, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { linkDefaults } from './vl-link.defaults';

@vlGlobalStylesNext()
@webComponent('vl-link-next')
export class VlLinkComponent extends BaseLitElement {
    private href = linkDefaults.href;
    private bold = linkDefaults.bold;
    private small = linkDefaults.small;
    private large = linkDefaults.large;
    private error = linkDefaults.error;
    private external = linkDefaults.external;
    private icon = linkDefaults.icon;
    private iconPlacement = linkDefaults.iconPlacement;

    static get styles(): CSSResult[] {
        return [vlLinkStyles, vlIconStyles];
    }

    static get properties(): PropertyDeclarations {
        return {
            href: { type: String },
            block: { type: Boolean },
            bold: { type: Boolean },
            error: { type: Boolean },
            small: { type: Boolean },
            large: { type: Boolean },
            external: { type: Boolean },
            icon: { type: String },
            iconPlacement: { type: String, attribute: 'icon-placement', reflect: true },
        };
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        if (changedProperties.has('iconPlacement')) {
            if (!this.iconPlacement) {
                this.iconPlacement = linkDefaults.iconPlacement;
            }
        }
    }

    render(): TemplateResult {
        const classes = {
            bold: this.bold,
            error: this.error,
            small: this.small,
            large: this.large,
        };
        const target = this.external ? '_blank' : nothing;

        return html`
            <a class=${classMap(classes)} href=${this.href} target=${target}>
                ${this.renderIcon(ICON_PLACEMENT.BEFORE)}
                <slot></slot>
                ${this.renderIcon(ICON_PLACEMENT.AFTER)} ${this.external ? this.renderExternalIcon() : ''}
            </a>
        `;
    }

    renderIcon(iconPlacement: ICON_PLACEMENT): TemplateResult | typeof nothing {
        if (iconPlacement !== this.iconPlacement) {
            return nothing;
        }

        const classes = {
            'vl-icon': true,
            [`vl-icon--${this.icon}`]: true,
            'vl-icon--right-margin': this.iconPlacement === 'before',
            'vl-icon--left-margin': this.iconPlacement === 'after',
        };

        return html`<span class=${classMap(classes)}></span>`;
    }

    renderExternalIcon(): TemplateResult {
        return html`<span class="vl-icon vl-icon--external vl-icon--after"></span>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-link-next': VlLinkComponent;
    }
}
