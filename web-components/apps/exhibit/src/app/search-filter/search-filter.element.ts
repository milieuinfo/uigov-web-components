export class SearchFilterElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Search filter';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Search filter</h3>
                        <div is="vl-search-filter" data-vl-title="Verfijn uw zoekopdracht">
                            <form is="vl-form">
                                <section>
                                <h2>Gegevens</h2>
                                <div>
                                    <label is="vl-form-label" for="firstname">Voornaam</label>
                                    <input is="vl-input-field" type="text" name="firstname" value="" data-vl-block="" autocomplete="given-name">
                                </div>
                                <div>
                                    <label is="vl-form-label" for="name">Naam</label>
                                    <input is="vl-input-field" type="text" name="name" value="" data-vl-block="" autocomplete="family-name">
                                </div>
                                </section>
                                <section>
                                <h2>Locatie</h2>
                                <div>
                                    <label is="vl-form-label" for="vl-select-city">Stad</label>
                                    <select is="vl-select" name="vl-select-default" data-vl-select-deletable="" data-vl-block="" autocomplete="address-level2">
                                    <option placeholder="">Kies een stad</option>
                                    <option value="brussel">Brussel</option>
                                    <option value="gent">Gent</option>
                                    </select>
                                </div>
                                <div>
                                    <label is="vl-form-label" for="vl-select-country">Land</label>
                                    <select is="vl-select" name="vl-select-default" data-vl-select-deletable="" data-vl-block="" autocomplete="country">
                                    <option placeholder="">Kies een land</option>
                                    <option value="belgië">België</option>
                                    </select>
                                </div>
                                </section>
                                <div>
                                <button is="vl-button" type="submit">
                                    Zoeken
                                </button>
                                </div>
                            </form>
                            <div>
                                <a href="#" is="vl-link">Zoekopdracht verwijderen</a>
                            </div>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Search filter alt</h3>
                            <div id="search-filter-alt" is="vl-search-filter" data-vl-title="Verfijn uw zoekopdracht" data-vl-alt="">
                                <form is="vl-form">
                                    <section>
                                    <h2>Gegevens</h2>
                                    <div>
                                        <label is="vl-form-label" for="firstname2">Voornaam</label>
                                        <input is="vl-input-field" type="text" id="firstname2" name="firstname2" value="" data-vl-block="" autocomplete="given-name">
                                    </div>
                                    <div>
                                        <label is="vl-form-label" for="name2">Naam</label>
                                        <input is="vl-input-field" type="text" id="name2" name="name2" value="" data-vl-block="" autocomplete="family-name">
                                    </div>
                                    </section>
                                    <section>
                                    <h2>Locatie</h2>
                                    <div>
                                        <label is="vl-form-label" for="vl-select-city2">Stad</label>
                                        <select is="vl-select" name="vl-select-default" id="vl-select-city2" data-vl-select-deletable="" data-vl-block="" autocomplete="address-level2">
                                        <option placeholder="">Kies een stad</option>
                                        <option value="brussel">Brussel</option>
                                        <option value="gent">Gent</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label is="vl-form-label" for="vl-select-country2">Land</label>
                                        <select is="vl-select" name="vl-select-default" id="vl-select-country2" data-vl-select-deletable="" data-vl-block="" autocomplete="country">
                                        <option placeholder="">Kies een land</option>
                                        <option value="belgië">België</option>
                                        </select>
                                    </div>
                                    </section>
                                    <div>
                                    <button is="vl-button" type="submit">
                                        Zoeken
                                    </button>
                                    </div>
                                </form>
                                <div>
                                    <a href="#" is="vl-link">Zoekopdracht verwijderen</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-search-filter', SearchFilterElement);
