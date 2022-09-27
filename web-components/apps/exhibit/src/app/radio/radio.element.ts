export class RadioElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Radio';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Radio</h3>
                        <vl-radio data-vl-label="Ja" data-vl-value="yes" data-vl-name="group-0"></vl-radio>
                        <vl-radio data-vl-label="Nee" data-vl-value="no" data-vl-name="group-0"></vl-radio>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Radio disabled</h3>
                        <vl-radio id="radio-disabled-1" data-vl-label="Ja" data-vl-value="yes" data-vl-name="group-3" data-vl-disabled=""></vl-radio>
                        <vl-radio data-vl-label="Nee" data-vl-value="no" data-vl-name="group-3" data-vl-disabled=""></vl-radio>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Radio with slot label</h3>
                        <vl-radio id="radio-slot-label-1" data-vl-value="yes" data-vl-name="group-6">
                            <span><strong>Ja</strong></span>
                        </vl-radio>
                        <vl-radio id="radio-slot-label-2" data-vl-value="no" data-vl-name="group-6">
                            <span>Nee</span>
                        </vl-radio>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Radio group</h3>
                        <div class="container">
                            <vl-radio-group id="radio-group-1">
                                <vl-radio id="radio-group-1-radio-1" data-vl-label="Ja" data-vl-value="yes"></vl-radio>
                                <vl-radio id="radio-group-1-radio-2" data-vl-label="Nee" data-vl-value="no"></vl-radio>
                            </vl-radio-group>
                        </div>
                        <div class="container">
                            <vl-radio-group id="radio-group-4">
                                <vl-radio id="radio-group-4-radio-1" data-vl-label="Ja" data-vl-value="yes"></vl-radio>
                                <vl-radio id="radio-group-4-radio-2" data-vl-label="Misschien" data-vl-value="maybe" data-vl-disabled=""></vl-radio>
                                <vl-radio id="radio-group-4-radio-3" data-vl-label="Nee" data-vl-value="no"></vl-radio>
                            </vl-radio-group>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-radio', RadioElement);
