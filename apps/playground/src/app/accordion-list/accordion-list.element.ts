export class AccordionListElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Accordion List';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Accordion List</h3>
                            <vl-accordion-list data-vl-bordered="true">
                                <vl-accordion data-vl-toggle-text="Accordion nummer 1"> Inhoud accordion nummer 1 </vl-accordion>
                                <vl-accordion data-vl-toggle-text="Accordion nummer 2"> Inhoud accordion nummer 2 </vl-accordion>
                                <vl-accordion data-vl-toggle-text="Accordion nummer 3 (nested)">
                                    Inhoud accordion nummer 3
                                    <vl-accordion-list data-vl-bordered="true">
                                        <vl-accordion data-vl-toggle-text="Accordion nummer 3.1"> Inhoud accordion nummer 3.1 </vl-accordion>
                                        <vl-accordion data-vl-toggle-text="Accordion nummer 3.2"> Inhoud accordion nummer 3.2 </vl-accordion>
                                    </vl-accordion-list>
                                </vl-accordion>
                            </vl-accordion-list>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-accordion-list', AccordionListElement);
