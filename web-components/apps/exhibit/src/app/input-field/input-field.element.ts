export class InputFieldElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Input field';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <input is="vl-input-field" />
                        </div>
                        <div class="container">
                            <input is="vl-input-field" data-vl-block />
                        </div>
                        <div class="container">
                            <input is="vl-input-field" data-vl-error />
                        </div>
                        <div class="container">
                            <input is="vl-input-field" data-vl-success />
                        </div>
                        <div class="container">
                            <input is="vl-input-field" disabled />
                        </div>
                        <div class="container">
                            <input is="vl-input-field" data-vl-small />
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-input-field', InputFieldElement);
