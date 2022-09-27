export class AccordionElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Accordion';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Accordion</h3>
                        <vl-accordion id="accordion-standard" data-vl-toggle-text="Lees meer over de onderwijsdoelstelling">
                            <span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>
                        </vl-accordion>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-accordion', AccordionElement);
