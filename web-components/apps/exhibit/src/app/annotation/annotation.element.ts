export class AnnotationElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Annotation';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <h3 is="vl-h3">
                        Districtchef
                        <vl-annotation data-vl-small="true">(6 vacatures)</vl-annotation>
                    </h3>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-annotation', AnnotationElement);
