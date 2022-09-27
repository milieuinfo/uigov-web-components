export class LinkListElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Link list';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Link list</h3>
                            <ul is="vl-link-list">
                                <li is="vl-link-list-item">
                                <a is="vl-link" href="#">Ga naar index</a>
                                </li>
                                <li is="vl-link-list-item">
                                <a is="vl-link" href="#">Terug naar overzicht</a>
                                </li>
                            </ul>
                        </div>
                        <!-- <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Link list small</h3>
                            <ul is="vl-link-list" data-vl-small>
                                <li is="vl-link-list-item">
                                    <a is="vl-link" href="#">Ga naar index</a>
                                </li>
                                <li is="vl-link-list-item">
                                    <a is="vl-link" href="#">Terug naar overzicht</a>
                                </li>
                            </ul>
                        </div>-->
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Link list inline</h3>
                            <ul is="vl-link-list" data-vl-inline>
                                <li is="vl-link-list-item">
                                    <a is="vl-link" href="#">Ga naar index</a>
                                </li>
                                <li is="vl-link-list-item">
                                    <a is="vl-link" href="#">Terug naar overzicht</a>
                                </li>
                            </ul>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Link list bordered</h3>
                            <ul is="vl-link-list" data-vl-bordered>
                                <li is="vl-link-list-item">
                                    <a is="vl-link" href="#">Ga naar index</a>
                                </li>
                                <li is="vl-link-list-item">
                                    <a is="vl-link" href="#">Terug naar overzicht</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-link-list', LinkListElement);
