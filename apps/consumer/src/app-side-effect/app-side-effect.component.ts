import '@domg-wc/elements/title/vl-h1.element';
import './component/components-side-effect.component';
import './component/elements-side-effect.component';
import './component/map-side-effect.component';

export class AppSideEffectComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="wrapper">
                <h1 is="vl-h1">Consumer App</h1>
                <consumer-elements-side-effect></consumer-elements-side-effect>
                <br><br>
                <consumer-components-side-effect></consumer-components-side-effect>
                <br><br>
                <consumer-map-side-effect></consumer-map-side-effect>
            </div>
      `;
    }
}

customElements.define('consumer-app-side-effect', AppSideEffectComponent);
