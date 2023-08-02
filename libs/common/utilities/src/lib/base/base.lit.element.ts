import { LitElement, PropertyDeclarations } from 'lit';

export abstract class BaseLitElement extends LitElement {
    protected allowCustomCSS = true;
    private customCSS: string | null = null;

    static get properties(): PropertyDeclarations {
        return {
            customCSS: { type: String, attribute: 'data-vl-custom-css', reflect: true },
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

        if (this.customCSS && !this.shadowRoot) {
            console.warn('Dit component heeft geen shadow DOM om custom CSS aan toe te voegen.');
            return;
        }

        if (this.customCSS && this.shadowRoot) {
            const customStyleSheet = new CSSStyleSheet();

            customStyleSheet.replaceSync(this.customCSS);
            this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, customStyleSheet];
        }
    }
}
