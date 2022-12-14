export class Map extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Map';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Map Search</h3>
                            <vl-map id="enabled-kb">
                                <vl-map-search></vl-map-search>
                                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                                <vl-map-baselayer-grb></vl-map-baselayer-grb>
                                <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
                            </vl-map>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Map Search met disabled keyboard</h3>
                            <vl-map disable-keyboard id="disabled-kb">
                                <vl-map-search></vl-map-search>
                                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                                <vl-map-baselayer-grb></vl-map-baselayer-grb>
                                <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
                            </vl-map>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-map', Map);
