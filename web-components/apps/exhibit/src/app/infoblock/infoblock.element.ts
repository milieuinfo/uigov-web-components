export class InfoblockElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Infoblock';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Infoblock contact</h3>
                        <vl-infoblock id="contact" data-vl-title="Contactenlijst" data-vl-type="contact">
                            Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.
                        </vl-infoblock>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Infoblock publications</h3>
                        <vl-infoblock id="publications" data-vl-title="Contracten" data-vl-type="publications">
                            Hieronder bevindt zicht een overzicht van al uw contracten binnen de Vlaamse Overheid.
                        </vl-infoblock>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Infoblock with title through slot</h3>
                        <vl-infoblock id="contact-slot" data-vl-type="contact">
                            <h2 slot="title">Titel via slot</h2>
                            Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.
                        </vl-infoblock>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-infoblock', InfoblockElement);
