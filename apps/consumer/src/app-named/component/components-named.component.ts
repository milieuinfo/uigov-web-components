import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlH2Element } from '@domg-wc/elements';
import { VlStepsComponent } from '@domg-wc/components/next/steps';
import { stepsNextHtml } from '../../html/components.html.js';

registerWebComponents([VlH2Element, VlStepsComponent]);

export class ComponentsNamedComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            ${stepsNextHtml('named imports', '@domg-wc/components')}
        `;
    }
}

customElements.define('consumer-components-named', ComponentsNamedComponent);
