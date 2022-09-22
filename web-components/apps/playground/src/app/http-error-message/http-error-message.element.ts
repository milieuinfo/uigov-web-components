export class HttpErrorMessageElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Http Error Message';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <vl-http-404-message></vl-http-404-message>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-http-error-message', HttpErrorMessageElement);
