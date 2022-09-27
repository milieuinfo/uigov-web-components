export class FormGridElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Form grid';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <form>
                                <div is="vl-form-grid" data-vl-is-stacked>
                                <div is="vl-form-column" data-vl-size="2">
                                    <label is="vl-form-label" for="text" data-vl-block>Email</label>
                                </div>
                                <div is="vl-form-column" data-vl-size="10">
                                    <input name="email" is="vl-input-field" placeholder="Bijv. naam@voorbeeld.be" data-vl-block data-required="true" data-vl-error-message="Gelieve een email in te vullen" data-vl-error-placeholder="email-error">
                                    <p is="vl-form-validation-message" data-vl-error data-vl-error-id="email-error"></p>
                                </div>
                            
                                <div is="vl-form-column" data-vl-size="2">
                                    <label is="vl-form-label" for="text" data-vl-block>Voornaam</label>
                                </div>
                                <div is="vl-form-column" data-vl-size="10">
                                    <input name="name" is="vl-input-field" placeholder="John" data-vl-block data-required="true" data-vl-error-message="Gelieve een voornaam in te vullen" data-vl-error-placeholder="name-error">
                                    <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>
                                </div>
                            
                                <div is="vl-form-column" data-vl-size="2">
                                    <label is="vl-form-label" for="url" data-vl-block>Naam</label>
                                </div>
                                <div is="vl-form-column" data-vl-size="10">
                                    <input name="surname" is="vl-input-field" placeholder="Doe" data-vl-block data-required="true" data-vl-error-message="Gelieve een naam in te vullen" data-vl-error-placeholder="surname-error">
                                    <p is="vl-form-validation-message" data-vl-error data-vl-error-id="surname-error"></p>
                                </div>
                            
                                <div is="vl-form-column" data-vl-size="10" data-vl-push="2">
                                    <button is="vl-button" type="submit">Inschrijven</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-form-grid', FormGridElement);
