export class RangeElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Range';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>default</h3>
                        <vl-range></vl-range>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-range', RangeElement);
