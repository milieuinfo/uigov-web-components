export class SearchResultsElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Search results';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Search results</h3>
                        <ul is="vl-search-results">
                            <li is="vl-search-result">
                            <a href="#">Vlaanderenkiest.be</a>
                            <time>Maandag 22 oktober 2018</time>
                            <dl>
                                <dt>Vlaanderenkiest.be</dt>
                                <dd>Verkiezingsresultaten op Vlaanderenkiest.be...</dd>
                                <dt>Vlaanderen intern</dt>
                                <dd>Werkt u bij de Vlaamse overheid...</dd>
                            </dl>
                            </li>
                            <li is="vl-search-result">
                            <a href="#">Vlaanderenkiest.be</a>
                            <time>Maandag 22 oktober 2018</time>
                            <dl>
                                <dt>Vlaanderenkiest.be</dt>
                                <dd>Verkiezingsresultaten op Vlaanderenkiest.be...</dd>
                                <dt>Vlaanderen intern</dt>
                                <dd>Werkt u bij de Vlaamse overheid...</dd>
                            </dl>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-search-results', SearchResultsElement);
