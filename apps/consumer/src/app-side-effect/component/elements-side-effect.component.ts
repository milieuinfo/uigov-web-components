import '@domg-wc/elements/action-group';
import '@domg-wc/elements/button';
import '@domg-wc/elements/title/vl-h2.element';
import { buttonsInActionGroupHtml } from '../../html/elements.html.js';

export class ElementsSideEffectComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            ${buttonsInActionGroupHtml('side effect imports', '@domg-wc/elements')}
        `;
    }
}

customElements.define('consumer-elements-side-effect', ElementsSideEffectComponent);
