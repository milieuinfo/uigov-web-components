export class InputAddonElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Input addon';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Input addon</h3>
                            <p is="vl-input-addon">€</p>
                        </div>
                        <!-- <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Input addon met tooltip</h3>
                            <p is="vl-input-addon">€
                                <vl-tooltip placement="top">Euro</vl-tooltip>
                            </p>
                        </div>-->
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Button input addon</h3>
                            <button is="vl-button-input-addon" type="button">
                                <span is="vl-icon" icon="location"></span>
                                <span is="vl-text" data-vl-visually-hidden>Kies locatie</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-input-addon', InputAddonElement);
