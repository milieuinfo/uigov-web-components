export class MultiselectElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Multiselect';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <select is="vl-multiselect">
                        <option value="Belgium">België</option>
                        <option value="Germany">Duitsland</option>
                        <option value="France">Frankrijk</option>
                    </select>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-multiselect', MultiselectElement);
