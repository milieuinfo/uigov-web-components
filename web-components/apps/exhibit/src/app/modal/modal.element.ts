export class ModalElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Modal';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Modal</h3>
                        <button id="button-open-modal" is="vl-button" data-vl-modal-open="modal">Open</button>
                        <vl-modal id="modal" data-vl-title="Modal">
                            <span slot="content">Lorem ipsum dolor sit amet.</span>
                            <button is="vl-button" slot="button">Start aanvraag</button>
                        </vl-modal>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-modal', ModalElement);
