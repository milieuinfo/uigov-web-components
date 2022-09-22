export class RichDataTableElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Rich Data Table';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <vl-rich-data-table
                      id="rich-data-table-sorting"
                      data-vl-data='{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Jan Jansens" }]}'
                      >
                        <vl-rich-data-field
                            data-vl-name="id"
                            data-vl-label="ID"
                            data-vl-selector="id"
                            data-vl-sortable=""
                            data-vl-sorting-direction="asc"
                        ></vl-rich-data-field>
                        <vl-rich-data-field
                            data-vl-name="name"
                            data-vl-label="Naam"
                            data-vl-selector="name"
                            data-vl-sortable=""
                        ></vl-rich-data-field>
                        <vl-rich-data-field data-vl-name="owner" data-vl-selector="owner" data-vl-sortable="">
                            <template slot="label">
                                <span>Eigenaar</span>
                            </template>
                        </vl-rich-data-field>
                    </vl-rich-data-table>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-rich-data-table', RichDataTableElement);
