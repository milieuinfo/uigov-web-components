import '@domg-wc/elements/title/vl-h2.element';
import '@domg-wc/components/next/steps';
import { stepsNextHtml } from '../../html/components.html.js';

export class ComponentsSideEffectComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            ${stepsNextHtml('side effect imports', '@domg-wc/components')}
        `;
    }
}

customElements.define('consumer-components-side-effect', ComponentsSideEffectComponent);
