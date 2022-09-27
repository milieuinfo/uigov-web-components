export class InfotextElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Infotext';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Infotext</h3>
                        <div id="infotext" is="vl-infotext">
                            <div>
                                <div data-vl-value="">3200</div>
                                <div data-vl-text="">Bezoekers per dag</div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Infotext with link</h3>
                        <div is="vl-infotext">
                            <a href="#">
                                <div data-vl-value="">3200</div>
                                <div data-vl-text="">Bezoekers per dag</div>
                            </a>
                        </div>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Infotext badge</h3>
                        <div id="infotext-badge" is="vl-infotext" data-vl-badge="">
                            <div>
                                <div data-vl-value="">12</div>
                                <div data-vl-text="">Openstaande zaken</div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Infotext badge with link</h3>
                        <div is="vl-infotext" data-vl-badge="">
                            <a href="#">
                                <div data-vl-value="">12</div>
                                <div data-vl-text="">Openstaande zaken</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-infotext', InfotextElement);
