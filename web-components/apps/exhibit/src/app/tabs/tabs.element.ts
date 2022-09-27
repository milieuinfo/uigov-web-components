export class TabsElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Tabs';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Tabs</h3>
                        <vl-tabs>
                            <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein">
                                Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                            </vl-tabs-pane>
                            <vl-tabs-pane data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus">
                                Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </vl-tabs-pane>
                            <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets">
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            </vl-tabs-pane>
                        </vl-tabs>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-tabs', TabsElement);
