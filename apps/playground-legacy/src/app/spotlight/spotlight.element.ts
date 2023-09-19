export class SpotlightElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Spotlight';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <vl-spotlight data-vl-link="https://google.be">
                        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>
                        <span slot="subtitle">Niveau A (universitair diploma)</span>
                        <span slot="text">
                            <ul class="vl-icon-list">
                                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>
                                <li class="vl-icon-list__item">Natuur en bos</li>
                                <li class="vl-icon-list__item"></li>
                            </ul>
                        </span>
                    </vl-spotlight>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-spotlight', SpotlightElement);
