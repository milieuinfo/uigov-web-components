export class PagerElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Pager';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pager</h3>
                        <vl-pager id="pager-default" data-vl-total-items="100" data-vl-items-per-page="10" data-vl-current-page="1"></vl-pager>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pager single page</h3>
                        <vl-pager id="pager-single" data-vl-align-center="" data-vl-total-items="10" data-vl-items-per-page="10" data-vl-current-page="1"></vl-pager>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pager without page items</h3>
                        <vl-pager id="pager-no-pagination" data-vl-align-center="" data-vl-total-items="100" data-vl-items-per-page="10" data-vl-current-page="1" data-vl-pagination-disabled=""></vl-pager>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pager aligned center</h3>
                        <vl-pager id="pager-center" data-vl-align-center="" data-vl-total-items="100" data-vl-items-per-page="10" data-vl-current-page="1"></vl-pager>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Pager aligned right</h3>
                        <vl-pager id="pager-right" data-vl-align-right="" data-vl-total-items="100" data-vl-items-per-page="10" data-vl-current-page="1"></vl-pager>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-pager', PagerElement);
