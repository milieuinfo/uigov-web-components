import './component/components-named.component';
import './component/elements-named.component';
import './component/map-named.component';
import { registerWebComponents } from '@domg-wc/common';
import { VlH1Element } from '@domg-wc/elements';

registerWebComponents([VlH1Element]);

export class AppNamedComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="wrapper">
                <h1 is="vl-h1">Consumer App</h1>
                <consumer-elements-named></consumer-elements-named>
                <br><br>
                <consumer-components-named></consumer-components-named>
                <br><br>
                <consumer-map-named></consumer-map-named>
            </div>
      `;
    }
}

customElements.define('consumer-app-named', AppNamedComponent);
