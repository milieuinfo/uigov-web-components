import { CSSResult, PropertyDeclarations, TemplateResult, html, nothing } from 'lit';
import linkStyle from './vl-link.css';
import { BaseLitElement, webComponent } from '@domg-wc/common-utilities';
import { classMap } from 'lit/directives/class-map.js';
import { globalStylesNext } from '@domg-wc/common-utilities/css/global-styles-decorator';

export const linkDefaults = {
    href: '' as string,
    bold: false as boolean,
    small: false as boolean,
    large: false as boolean,
    error: false as boolean,
    external: false as boolean,
} as const;

@globalStylesNext()
@webComponent('vl-link-next')
export class VlLinkComponent extends BaseLitElement {
    private href = linkDefaults.href;
    private bold = linkDefaults.bold;
    private small = linkDefaults.small;
    private large = linkDefaults.large;
    private error = linkDefaults.error;
    private external = false;

    static get styles(): CSSResult[] {
        return [linkStyle];
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
        };
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
                <slot></slot>
            </a>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-link-next': VlLinkComponent;
    }
}
