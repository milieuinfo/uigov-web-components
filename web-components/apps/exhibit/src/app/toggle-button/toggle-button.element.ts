export class ToggleButtonElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Toggle button';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Toggle button</h3>
                        <vl-toggle-button data-vl-block data-vl-large >Toggle button</vl-toggle-button>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-toggle-button', ToggleButtonElement);
