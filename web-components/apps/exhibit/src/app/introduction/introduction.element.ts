export class IntroductionElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Introduction';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <p is="vl-introduction">
                        Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </p> 
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-introduction', IntroductionElement);
