export class LinkElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Link';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <a is="vl-link" href="#">
                                <span is="vl-icon" data-vl-icon="arrow-right-fat" data-vl-before link></span>Terug naar overzicht
                            </a>
                        </div>
                        <div class="container">
                            <a is="vl-link" href="#">
                                Terug naar overzicht<span is="vl-icon" data-vl-icon="arrow-right-fat" data-vl-after link></span>
                            </a>
                        </div>
                        <div class="container">
                            <button is="vl-button-link" type="button" data-vl-error>Verwijderen</button>
                        </div>
                        <div class="container">
                            <a is="vl-link" href="#">
                                Ga naar Vlaanderen.be<span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-light link></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-link', LinkElement);
