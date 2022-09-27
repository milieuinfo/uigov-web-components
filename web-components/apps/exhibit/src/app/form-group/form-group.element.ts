export class FormGroupElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Form group';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <form is="vl-form">
                            <div is="vl-form-group">
                                <div is="vl-form-grid" data-vl-is-stacked>
                                <div is="vl-form-column" data-vl-size="3">
                                    <label is="vl-form-label" for="name" data-vl-block>
                                    Naam
                                    <span is="vl-form-annotation-span">(verplicht)</span>
                                    </label>
                                </div>
                                <div is="vl-form-column" data-vl-size="9">
                                    <input
                                    name="name"
                                    autocomplete="name"
                                    is="vl-input-field"
                                    data-vl-block
                                    data-vl-required
                                    data-vl-error-message="Geef een naam in."
                                    data-vl-error-placeholder="name-error"
                                    />
                                    <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>
                                </div>

                                <div is="vl-form-column" data-vl-size="3">
                                    <label is="vl-form-label" for="firstname" data-vl-block>
                                    Voornaam
                                    <span is="vl-form-annotation-span">(verplicht)</span>
                                    </label>
                                </div>
                                <div is="vl-form-column" data-vl-size="9">
                                    <input
                                    name="firstname"
                                    autocomplete="firstname"
                                    is="vl-input-field"
                                    data-vl-block
                                    data-vl-required
                                    data-vl-error-message="Geef een voornaam in."
                                    data-vl-error-placeholder="firstname-error"
                                    />
                                    <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>
                                </div>

                                <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
                                    <div is="vl-action-group">
                                    <button is="vl-button" type="submit">Versturen</button>
                                    <a is="vl-link" href="#">
                                        <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
                                        Annuleren
                                    </a>
                                    </div>
                                </div>
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

customElements.define('exhibit-form-group', FormGroupElement);
