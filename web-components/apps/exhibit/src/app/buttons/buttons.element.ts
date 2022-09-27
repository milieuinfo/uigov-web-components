export class ButtonsElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Buttons';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <button is="vl-button" data-vl-error data-vl-wide>UIG Button</button>
                        <a is="vl-link-button" data-vl-error data-vl-wide>UIG Link Button</a>
                    </div>
                    <div class="container">
                        <button is="vl-button" disabled>UIG Button</button>
                        <button is="vl-button" data-vl-error>UIG Button</button>
                    </div>
                    <div class="container">
                        <button is="vl-button" data-vl-block>UIG Button</button>
                    </div>
                    <div class="container">
                        <button is="vl-button" data-vl-large>UIG Button</button>
                    </div>
                    <div class="container">
                        <button is="vl-button" data-vl-wide>UIG Button</button>
                        <button is="vl-button" data-vl-narrow>UIG Button</button>
                    </div>
                    <div class="container">
                        <button is="vl-button" data-vl-loading>UIG Button</button>
                    </div>
                    <div class="container">
                        <button is="vl-button" data-vl-secondary>UIG Button</button>
                        <button is="vl-button" data-vl-tertiary>UIG Button</button>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-buttons', ButtonsElement);
