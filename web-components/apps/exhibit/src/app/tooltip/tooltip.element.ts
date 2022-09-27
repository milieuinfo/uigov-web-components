export class TooltipElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Tooltip';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Tooltip top</h3>
                        <button id="top-button" is="vl-button">
                            <vl-tooltip id="top-tooltip" data-vl-placement="top">This is tooltip on the top</vl-tooltip>
                            top
                        </button>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Tooltip bottom</h3>
                        <button id="bottom-button" is="vl-button">
                            <vl-tooltip id="bottom-tooltip" data-vl-placement="bottom">This is tooltip on the bottom</vl-tooltip>
                            bottom
                        </button>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Tooltip right</h3>
                        <button id="right-button" is="vl-button">
                            <vl-tooltip id="right-tooltip" data-vl-placement="right">This is tooltip on the right</vl-tooltip>
                            right
                        </button>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Tooltip left</h3>
                        <button id="left-button" is="vl-button">
                            <vl-tooltip id="left-tooltip" data-vl-placement="left">This is tooltip on the left</vl-tooltip>
                            left
                        </button>
                    </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-tooltip', TooltipElement);
