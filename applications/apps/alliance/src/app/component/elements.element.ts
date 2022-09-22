export class ElementsElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Integratie van @domg-lib/elements';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Action group</h3>
                        <div is="vl-action-group">
                            <button is="vl-button">
                                Aanvraag starten
                            </button>
                            <button is="vl-button" data-vl-secondary>
                                Annuleren
                            </button>
                        </div>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Action group met links</h3>
                        <div is="vl-action-group">
                            <a href="#" is="vl-link">
                                <span is="vl-icon" data-vl-icon="bell" data-vl-before></span>
                                Notificaties
                            </a>
                            <a href="#" is="vl-link">
                                <span is="vl-icon" data-vl-icon="graduate" data-vl-before></span>
                                Opleidingen
                            </a>
                            <a href="#" is="vl-link">
                                <span is="vl-icon" data-vl-icon="pin" data-vl-before></span>
                                Locaties
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('alliance-elements', ElementsElement);
