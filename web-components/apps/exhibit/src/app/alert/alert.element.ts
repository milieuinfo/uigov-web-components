export class AlertElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Alert';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Alert</h3>
                        <vl-alert id="alert" data-vl-icon="warning" data-vl-title="Opgelet!">
                            <p>U heeft geen rechten om deze actie uit te voeren. <a href="#">Vraag rechten aan</a>.</p>
                        </vl-alert>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Alert error</h3>
                        <vl-alert id="alert-error" data-vl-type="error" data-vl-icon="warning" data-vl-title="Opgelet!">
                            <p>U heeft geen rechten om deze actie uit te voeren. <a href="#">Vraag rechten aan</a>.</p>
                        </vl-alert>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Alert closable</h3>
                        <vl-alert id="alert-closable" data-vl-icon="warning" data-vl-title="Opgelet!" data-vl-closable="">
                            <p>U heeft geen rechten om deze actie uit te voeren. <a href="#">Vraag rechten aan</a>.</p>
                        </vl-alert>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Alert with title slot</h3>
                        <vl-alert id="alert-title-slot" data-vl-type="info" data-vl-icon="info-circle">
                            <span slot="title">Info</span>
                            <p>Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.</p>
                        </vl-alert>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-alert', AlertElement);
