export class SectionsElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Integratie van @domg-lib/sections';
        this.innerHTML = `
            <style>
                .accessibility-wrapper {
                    display: block;
                    height: 500px;
                    overflow: scroll;
                }
            </style>
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <div class="container accessibility-wrapper">
                        <h3 is="vl-h3" data-vl-has-border>Accessibility</h3>
                        <vl-accessibility></vl-accessibility>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('alliance-sections', SectionsElement);
