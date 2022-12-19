export class ComponentsElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Integratie van @domg-wc/components';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Breadcrumb</h3>
                        <vl-breadcrumb>
                            <vl-breadcrumb-item data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
                            <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>
                            <vl-breadcrumb-item data-vl-href="#">Webuniversum</vl-breadcrumb-item>
                            <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>
                        </vl-breadcrumb>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('alliance-components', ComponentsElement);
