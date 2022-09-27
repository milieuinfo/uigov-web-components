export class CodePreviewElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Code preview';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Code preview</h3>
                        <vl-code-preview>
                            <h3>This is a title</h3>
                            <h2>This is a subtitle</h2>
                            <div>
                            <div>
                                <div>
                                <p>test</p>
                                </div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                                impedit dolor maxime incidunt eos labore aut delectus, omnis repellat
                                officia id dolores, magni velit beatae similique ex optio enim, nulla.
                                </p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </vl-code-preview>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-code-preview', CodePreviewElement);
