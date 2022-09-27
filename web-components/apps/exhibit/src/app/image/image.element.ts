export class ImageElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Image';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <img is="vl-image" sizes="100vw" src="https://picsum.photos/536/354" alt="Example image" />
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-image', ImageElement);
