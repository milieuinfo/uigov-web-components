export class DocumentElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Document';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Document</h3>
                        <vl-document>
                            <span slot="type">PDF</span>
                            <span slot="title">Hubert en Jan van Eyck, Vlaamse Primitieven</span>
                            <span slot="metadata">PDF - 580 kB</span>
                      </vl-document>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-document', DocumentElement);
