export class LoaderElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Loader';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Loader</h3>
                        <vl-loader></vl-loader>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Loader light with custom text</h3>
                        <div  style="background-color: #b7b7b7;">
                            <vl-loader data-vl-light data-vl-text="custom text"></vl-loader>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-loader', LoaderElement);
