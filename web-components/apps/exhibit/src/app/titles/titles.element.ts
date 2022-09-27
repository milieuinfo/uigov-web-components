export class TitlesElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Titles';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <h1 is="vl-h1">Dit is een h1 titel</h1>
                    <h2 is="vl-h2">Dit is een h2 titel</h2>
                    <h3 is="vl-h3">Dit is een h3 titel</h3>
                    <h4 is="vl-h4">Dit is een h4 titel</h4>
                    <h5 is="vl-h5">Dit is een h5 titel</h5>
                    <h6 is="vl-h6">Dit is een h6 titel</h6>

                    <h1 is="vl-h1" data-vl-has-border>Dit is een h1 titel</h1>
                    <h2 is="vl-h2" data-vl-has-border>Dit is een h2 titel</h2>
                    <h3 is="vl-h3" data-vl-has-border>Dit is een h3 titel</h3>
                    <h4 is="vl-h4" data-vl-has-border>Dit is een h4 titel</h4>
                    <h5 is="vl-h5" data-vl-has-border>Dit is een h5 titel</h5>
                    <h6 is="vl-h6" data-vl-has-border>Dit is een h6 titel</h6>

                    <h4 is="vl-h4" data-vl-alt>Dit is een alt titel</h4>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-titles', TitlesElement);
