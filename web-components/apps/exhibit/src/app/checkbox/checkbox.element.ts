export class CheckboxElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Checkbox';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Checkbox</h3>
                        <vl-checkbox data-vl-label="Optie 1"></vl-checkbox>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Checkbox disabled</h3>
                        <vl-checkbox data-vl-disabled data-vl-label="Optie 1"></vl-checkbox>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Switch</h3>
                        <vl-checkbox data-vl-label="Instellingen blokkeren" data-vl-switch="" data-vl-single=""></vl-checkbox>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Switch with label</h3>
                        <vl-checkbox data-vl-switch="" data-vl-label="Instellingen blokkeren"></vl-checkbox>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Switch with slot element</h3>
                        <vl-checkbox id="checkbox-slot" data-vl-value="1">
                            <span>Optie <strong>1</strong></span>
                        </vl-checkbox>
                        <vl-checkbox id="checkbox-slot-switch" data-vl-switch="">
                            <span>Optie <strong>2</strong></span>
                        </vl-checkbox>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-checkbox', CheckboxElement);
