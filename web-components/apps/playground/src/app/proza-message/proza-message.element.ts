export class ProzaMessageElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Proza Message';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <vl-proza-message data-vl-domain="noneditable" data-vl-code="inline"></vl-proza-message>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-proza-message', ProzaMessageElement);
