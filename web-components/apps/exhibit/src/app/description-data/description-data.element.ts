export class DescriptionDataElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Description data';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Description data</h3>
                        <vl-description-data>
                            <vl-description-data-item data-vl-label="Uitgever" data-vl-value="Kind en Gezin"></vl-description-data-item>
                            <vl-description-data-item data-vl-label="Publicatiedatum" data-vl-value="Augustus 2018"></vl-description-data-item>
                            <vl-description-data-item data-vl-label="Publicatietype" data-vl-value="Brochure"></vl-description-data-item>
                            <vl-description-data-item data-vl-label="Categorie" data-vl-value="Kinderen en jongeren"></vl-description-data-item>
                        </vl-description-data>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-description-data', DescriptionDataElement);
