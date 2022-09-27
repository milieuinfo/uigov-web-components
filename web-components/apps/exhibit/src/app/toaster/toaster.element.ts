export class ToasterElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Toaster';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Toaster</h3>
                        <div id="top-left-toaster" is="vl-toaster" data-vl-top-left></div>
                        <div id="top-right-toaster" is="vl-toaster" data-vl-top-right></div>
                        <div id="bottom-left-toaster" is="vl-toaster" data-vl-bottom-left></div>
                        <div id="bottom-right-toaster" is="vl-toaster" data-vl-bottom-right></div>

                        <button is="vl-button" onclick="topLeftToaster().push(newSuccessAlert());">Top-left</button>
                        <button is="vl-button" onclick="topRightToaster().push(newSuccessAlert());">Top-right</button>
                        <button is="vl-button" onclick="bottomLeftToaster().push(newSuccessAlert());">Bottom-left</button>
                        <button is="vl-button" onclick="bottomRightToaster().push(newSuccessAlert());">Bottom-right</button>

                        <br />
                        <br />

                        <vl-alert
                            id="alert-1"
                            data-vl-type="warning"
                            data-vl-icon="warning"
                            data-vl-title="Technische storing"
                            data-vl-closable
                        >
                            <p>Door een technische storing is dit loket tijdelijk niet beschikbaar.</p>
                        </vl-alert>
                        <br />
                        <vl-alert id="alert-2" data-vl-type="error" data-vl-icon="warning" data-vl-title="Error" data-vl-closable>
                            <p>Er is een fout opgetreden.</p>
                        </vl-alert>
                        <br />
                        <vl-alert id="alert-3" data-vl-type="success" data-vl-icon="check" data-vl-title="Gelukt" data-vl-closable>
                            <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>
                        </vl-alert>
                        <br />
                        <vl-alert id="alert-4" data-vl-type="cta" data-vl-icon="info" data-vl-title="Opgelet!" data-vl-closable>
                            <p>U heeft geen rechten om deze actie uit te voeren. <a href="#">Vraag rechten aan</a>.</p>
                            <button slot="actions" is="vl-button" id="b1">Fout melden</button>
                        </vl-alert>

                        <script>
                            const newWarningAlert = () => document.querySelector('#alert-1').cloneNode(true);
                            const newErrorAlert = () => document.querySelector('#alert-2').cloneNode(true);
                            const newSuccessAlert = () => document.querySelector('#alert-3').cloneNode(true);
                            const newCtaAlert = () => document.querySelector('#alert-4').cloneNode(true);

                            const topLeftToaster = () => document.querySelector('#top-left-toaster');
                            const topRightToaster = () => document.querySelector('#top-right-toaster');
                            const bottomLeftToaster = () => document.querySelector('#bottom-left-toaster');
                            const bottomRightToaster = () => document.querySelector('#bottom-right-toaster');
                        </script>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-toaster', ToasterElement);
