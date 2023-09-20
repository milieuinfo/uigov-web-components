export class PillElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Pill';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pill</h3>
                        <vl-pill>Option 1</vl-pill>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pill success</h3>
                        <vl-pill data-vl-type="success">Option 1</vl-pill>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pill warning</h3>
                        <vl-pill data-vl-type="warning">Option 1</vl-pill>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pill error</h3>
                        <vl-pill data-vl-type="error">Option 1</vl-pill>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pill checkable</h3>
                        <vl-pill data-vl-checkable>Option 1</vl-pill>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pill closable</h3>
                        <vl-pill data-vl-closable>Option 1</vl-pill>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pill disabled</h3>
                        <vl-pill data-vl-disabled>Option 1</vl-pill>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pill checkable and disabled</h3>
                        <vl-pill data-vl-checkable data-vl-disabled>Option 2</vl-pill>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pill checkable, checked and disabled</h3>
                        <vl-pill data-vl-checkable data-vl-disabled data-vl-checked>Option 2</vl-pill>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-pill', PillElement);
