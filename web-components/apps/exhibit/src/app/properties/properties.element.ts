export class PropertiesElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Properties';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Properties</h3>
                        <vl-properties>
                            <h4 is="vl-h4">Gegevens</h4>
                            <dl is="vl-properties-list">
                                <dt is="vl-property-term">Voornaam</dt>
                                <dd is="vl-property-value">Koen</dd>
                                <dt is="vl-property-term">Naam</dt>
                                <dd is="vl-property-value">Peeters</dd>
                                <dt is="vl-property-term">Geslacht</dt>
                                <dd is="vl-property-value">Man</dd>
                            </dl>
                        </vl-properties>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Properties with columns</h3>
                        <vl-properties id="properties">
                            <h4 is="vl-h4">Gegevens</h4>
                            <div is="vl-properties-column">
                                <dl is="vl-properties-list">
                                <dt is="vl-property-term">Voornaam</dt>
                                <dd is="vl-property-value">Koen</dd>
                                <dt is="vl-property-term">Naam</dt>
                                <dd is="vl-property-value">Peeters</dd>
                                <dt is="vl-property-term">Geslacht</dt>
                                <dd is="vl-property-value">Man</dd>
                                </dl>
                            </div>

                            <div is="vl-properties-column">
                                <dl is="vl-properties-list">
                                <dt is="vl-property-term">Telefoon</dt>
                                <dd is="vl-property-value">000/00.00.00</dd>
                                <dt is="vl-property-term">Gsm-nummer</dt>
                                <dd is="vl-property-value">000/00.00.00</dd>
                                <dt is="vl-property-term">E-mailadres</dt>
                                <dd is="vl-property-value">koen.peeters@outlook.be</dd>
                                </dl>
                            </div>

                            <div is="vl-properties-column" data-vl-full="">
                                <dl is="vl-properties-list">
                                <dt is="vl-property-term">Nationaliteit</dt>
                                <dd is="vl-property-value">Belg</dd>
                                <dt is="vl-property-term">Burgerlijke staat</dt>
                                <dd is="vl-property-value">Getrouwd</dd>
                                <dt is="vl-property-term">Adres</dt>
                                <dd is="vl-property-value">
                                    <p>Havenlaan 88</p>
                                    <p>1000 Brussel</p>
                                </dd>
                                </dl>
                            </div>
                        </vl-properties>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-properties', PropertiesElement);
