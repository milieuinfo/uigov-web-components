export class TextElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Text';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <span is="vl-text">Text</span>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-text', TextElement);
