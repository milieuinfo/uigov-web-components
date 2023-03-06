export class InputSliderElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Input Slider';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Input Slider</h3>
                        <vl-input-slider></vl-input-slider>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-input-slider', InputSliderElement);
