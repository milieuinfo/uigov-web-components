import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlActionGroup, VlButtonElement, VlH2Element } from '@domg-wc/elements';
import { buttonsInActionGroupHtml } from '../../html/elements.html.js';

registerWebComponents([VlH2Element, VlActionGroup, VlButtonElement]);

export class ElementsNamedComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            ${buttonsInActionGroupHtml('named imports', '@domg-wc/elements')}
        `;
    }
}

customElements.define('consumer-elements-named', ElementsNamedComponent);
