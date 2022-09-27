export class InfoTileElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Info tile';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Info tile</h3>
                        <vl-info-tile id="vl-info-tile">
                            <span slot="title">Broos Deprez</span>
                            <span slot="subtitle">Uw zoon (19.05.2005) <br> niet verwant aan referentiepersoon</span>
                            <div slot="content">
                                <p><strong>Beslissingsbrief Studietoelage</strong></p>
                                <p>De studietoelage voor Broos Deprez werd toegekend.</p>
                            </div>
                        </vl-info-tile>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Info tile toggleable</h3>
                        <vl-info-tile id="vl-info-tile-toggleable" data-vl-toggleable="">
                            <span slot="title">Broos Deprez</span>
                            <span slot="subtitle">Uw zoon (19.05.2005) <br> niet verwant aan referentiepersoon</span>
                            <div slot="content">
                                <p><strong>Beslissingsbrief Studietoelage</strong></p>
                                <p>De studietoelage voor Broos Deprez werd toegekend.</p>
                            </div>
                        </vl-info-tile>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Info tile toggleable auto open</h3>
                        <vl-info-tile id="vl-info-tile-toggleable-auto-open" data-vl-toggleable="" data-vl-auto-open="">
                            <span slot="title">Broos Deprez</span>
                            <span slot="subtitle">Uw zoon (19.05.2005) <br> niet verwant aan referentiepersoon</span>
                            <div slot="content">
                            <p><strong>Beslissingsbrief Studietoelage</strong></p>
                            <p>De studietoelage voor Broos Deprez werd toegekend.</p>
                            </div>
                      </vl-info-tile> 
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-infotile', InfoTileElement);
