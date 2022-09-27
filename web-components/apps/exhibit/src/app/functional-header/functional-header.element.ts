export class FunctionalHeaderElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Functional Header';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Functional header</h3>
                        <vl-functional-header id="functional-header" data-vl-title="School- en studietoelagen" data-vl-sub-title="Voor lager, middelbaar en hoger onderwijs" data-vl-link="#"></vl-functional-header>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Functional header with slot elements</h3>
                        <vl-functional-header id="functional-header-slots" data-vl-link="https://webcomponenten.omgeving.vlaanderen.be">
                            <span slot="title">School- en studietoelagen</span>
                            <span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>
                            <span slot="back">Terug</span>
                        </vl-functional-header>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Functional header with user interaction</h3>
                        <vl-functional-header id="functional-header-actions-slot" data-vl-link="https://webcomponenten.omgeving.vlaanderen.be">
                            <span slot="title">School- en studietoelagen</span>
                            <span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>
                            <span slot="back">Terug</span>
                            <div slot="actions">
                                <a href="#">Koen Peeters</a>
                            </div>
                        </vl-functional-header>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-functional-header', FunctionalHeaderElement);
