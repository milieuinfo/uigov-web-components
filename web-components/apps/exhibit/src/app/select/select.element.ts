export class SelectElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Select';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Select</h3>
                        <select id="select-default" is="vl-select">
                            <option value="Belgium">België</option>
                            <option value="Germany">Duitsland</option>
                            <option value="France">Frankrijk</option>
                        </select>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Select with predefined selection</h3>
                        <select is="vl-select">
                            <option value="België">België</option>
                            <option selected="" value="Duitsland">Duitsland</option>
                            <option value="Frankrijk">Frankrijk</option>
                        </select>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Select with error</h3>
                        <select id="select-error" is="vl-select" data-vl-error="">
                            <option value="België">België</option>
                            <option value="Duitsland">Duitsland</option>
                            <option value="Frankrijk">Frankrijk</option>
                        </select>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-select', SelectElement);
