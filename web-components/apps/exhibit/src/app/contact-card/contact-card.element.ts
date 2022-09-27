export class ContactCardElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Contact card';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Contact card</h3>
                        <vl-contact-card id="contact-card">
                            <vl-infoblock slot="info" data-vl-title="Departement Onderwijs en Vorming" data-vl-type="contact"></vl-infoblock>
                            <vl-properties slot="properties">
                                <dl is="vl-properties-list">
                                <dt is="vl-property-term">Adres</dt>
                                <dd is="vl-property-value">Hendrik Consciencegebouw<br>Koning Albert II-laan 15<br>1210 Brussel<br><a is="vl-link" href="#">Routeplanner</a></dd>
                                <dt is="vl-property-term">Telefoon</dt>
                                <dd is="vl-property-value">
                                    <p><a is="vl-link" href="#">02 553 72 02<span is="vl-icon" data-vl-icon="phone" data-vl-after=""></span></a> (Onthaal Consciencegebouw)</p>
                                    <p><a is="vl-link" href="#">1700<span is="vl-icon" data-vl-icon="phone" data-vl-after=""></span></a> (Infolijn Onderwijs)</p>
                                </dd>
                                <dt is="vl-property-term">E-mail</dt>
                                <dd is="vl-property-value"><a is="vl-link" href="#">onderwijs.vlaanderen@vlaanderen.be<span is="vl-icon" data-vl-icon="mail" data-vl-after=""></span></a></dd>
                                <dt is="vl-property-term">Website</dt>
                                <dd is="vl-property-value"><a is="vl-link" href="#">http://onderwijs.vlaanderen.be<span is="vl-icon" data-vl-icon="external" data-vl-after=""></span></a></dd>
                                </dl>
                            </vl-properties>
                        </vl-contact-card>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-contact-card', ContactCardElement);
