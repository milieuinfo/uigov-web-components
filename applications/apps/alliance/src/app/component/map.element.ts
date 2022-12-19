export class MapElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Integratie van @domg-wc/map';
        this.innerHTML = `
            <style>
                .map-wrapper {
                    display: block;
                    height: 500px;
                    overflow: scroll;
                }
            </style>
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <div class="container map-wrapper">
                        <vl-map>
                            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                        </vl-map>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('alliance-map', MapElement);
