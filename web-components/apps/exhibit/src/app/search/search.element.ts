export class SearchElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Search';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Search</h3>
                        <vl-search id="search-inline" data-vl-inline=""></vl-search>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Search block</h3>
                        <vl-search id="search-block" data-vl-block=""></vl-search>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Search alt</h3>
                        <vl-search id="search-block-alt" data-vl-block="" data-vl-alt=""></vl-search>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Search with custom labels</h3>
                        <vl-search id="search-block-label" data-vl-block="" data-vl-label="Foo" data-vl-submit-label="Bar"></vl-search>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Search inline with select</h3>
                        <vl-search id="search-inline-slot-input" data-vl-inline="">
                            <select is="vl-select" slot="input" data-vl-block="" data-vl-select="">
                                <option value="Belgium">België</option>
                                <option value="Germany">Duitsland</option>
                                <option value="France">Frankrijk</option>
                            </select>
                        </vl-search>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Search with select</h3>
                        <vl-search id="search-block-slot-input" data-vl-block="">
                            <select is="vl-select" slot="input" data-vl-block="" data-vl-select="">
                                <option value="Belgium">België</option>
                                <option value="Germany">Duitsland</option>
                                <option value="France">Frankrijk</option>
                            </select>
                        </vl-search>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-search', SearchElement);
