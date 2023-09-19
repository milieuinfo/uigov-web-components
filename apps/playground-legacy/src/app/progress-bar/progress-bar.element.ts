export class ProgressBarElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Progress bar';

        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Progress bar</h3>
                        <vl-progress-bar
                            data-vl-active-step="1"
                            data-vl-numeric
                            data-vl-focus-on-change
                        ></vl-progress-bar>
                    </div>
                </div>
            </div>
      `;

        const component = document.querySelector('vl-progress-bar');
        component['steps'] = ['Stap 1/3: Aanvraag', 'Stap 2/3: Gegevens', 'Stap 3/3: Bevestigen'];
        component.addEventListener('vl-click-step', (event: CustomEvent) => alert(JSON.stringify(event.detail)));
    }
}

customElements.define('playground-progress-bar', ProgressBarElement);
