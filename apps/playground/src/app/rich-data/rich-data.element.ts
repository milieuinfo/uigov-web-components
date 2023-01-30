export class RichDataElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Rich Data';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <vl-rich-data>
                        <vl-pager slot="pager" total-items="25" items-per-page="5" current-page="1"></vl-pager>
                        <vl-search-results slot="content">
                            <vl-search-result>
                                <div>Resultaat 1</div>
                            </vl-search-result>
                        </vl-search-results>
                        <span slot="no-content">Geen resultaten gevonden</span>
                    </vl-rich-data>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-rich-data', RichDataElement);
