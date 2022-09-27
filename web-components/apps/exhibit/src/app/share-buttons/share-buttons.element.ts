export class ShareButtonsElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Share buttons';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Share buttons</h3>
                        <vl-share-buttons>
                            <vl-share-button href="#" data-vl-medium="facebook"></vl-share-button>
                            <vl-share-button href="#" data-vl-medium="twitter"></vl-share-button>
                            <vl-share-button href="#" data-vl-medium="linkedin"></vl-share-button>
                            <vl-share-button href="#" data-vl-medium="googleplus"></vl-share-button>
                            <vl-share-button href="#" data-vl-medium="mail"></vl-share-button>
                        </vl-share-buttons>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-share-buttons', ShareButtonsElement);
