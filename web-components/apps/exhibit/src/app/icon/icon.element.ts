export class IconElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Icon';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <span is="vl-icon" data-vl-icon="calendar"></span>
                        </div>
                        <div class="container">
                            <span is="vl-icon-wrapper">
                                <span is="vl-icon" data-vl-icon="calendar" data-vl-before></span><span>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</span>
                            </span>
                        </div>
                        <div class="container">
                            <span is="vl-icon" data-vl-icon="calendar" data-vl-180deg></span>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-icon', IconElement);
