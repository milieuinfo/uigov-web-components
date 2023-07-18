import { LitElement, PropertyDeclarations } from 'lit';

export abstract class BaseLitElement extends LitElement {
    protected allowCustomCSS = true;
    private customCSS: CSSStyleSheet | null = null;

    static get properties(): PropertyDeclarations {
        return {
            customCSS: { type: Object },
        };
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.addCustomCSS();
    }

    private addCustomCSS(): void {
        if (this.customCSS && !this.allowCustomCSS) {
            console.warn('Custom CSS is niet toegelaten voor dit component.');
            return;
        }

        if (this.customCSS && this.shadowRoot) {
            this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, this.customCSS];
        }
    }
}
