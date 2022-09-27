const complexItems = [
    { title: 'Gent', subtitle: 'Gemeente', value: '1' },
    { title: 'Gentbos, Merelbeke', subtitle: 'Adres', value: '2' },
    { title: 'Gentbruggestraat, Gent', subtitle: 'Adres', value: '3' },
    { title: 'Gentele, Brugge', subtitle: 'Adres', value: '5' },
    { title: 'Automotive Contractors Gent ', subtitle: 'Project', value: '6' },
    { title: 'Buurtshuis Watersportbaan Gent', subtitle: 'Project', value: '7' },
];

export class AutocompleteElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Autocomplete';
        const autocompleteHtml = `
            <div class="container">
                <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                <br />
            </div>
        `;
        // TODO: de manier waarop de component hier opgebouwd wordt is niet ok, maar dit is de enige manier
        //  waarop ik hem werkend krijg
        //  -> de 'items' moeten bij creatie via javascript toegevoegd worden of het werkt niet
        const htmlContent = document.createElement('div');
        htmlContent.classList.add('wrapper');
        htmlContent.innerHTML = autocompleteHtml;
        const container = htmlContent.getElementsByClassName('container')[0];
        const autocomplete = document.createElement('vl-autocomplete');
        autocomplete.setAttribute('data-vl-min-chars', '1');
        autocomplete.setAttribute('placeholder', 'Hint: typ Gent');
        autocomplete['items'] = complexItems;
        container.appendChild(autocomplete);
        this.appendChild(htmlContent);
    }
}

customElements.define('exhibit-autocomplete', AutocompleteElement);
