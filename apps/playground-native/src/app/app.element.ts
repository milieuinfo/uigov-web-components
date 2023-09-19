import { vlElementsStyle } from '@domg-wc/elements';
import { VlStepsComponent } from '@domg-wc/components/next/steps';
import { registerWebComponents } from '@domg-wc/common-utilities';
import './app.element.scss';

document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];

export class AppElement extends HTMLElement {
    static {
        registerWebComponents([VlStepsComponent]);
    }

    constructor() {
        super();

        this.innerHTML = `
          <vl-steps-next>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="title">Stap 1</span>
                <span slot="subtitle">Vul je voornaam in</span>
                <span slot="content">
                    <input is="vl-input-field" type="text" />
                    <button is="vl-button" id="vl-button-1">Werk stap 1 af!</button>
                </span>
            </vl-step-next>
          </vl-steps-next>
        `;
    }

    connectedCallback(): void {
        const button = this.querySelector('#vl-button-1');
        button?.addEventListener('click', this.showStep2);
    }

    disconnectedCallback(): void {
        const button1 = this.querySelector('#vl-button-1');
        const button2 = this.querySelector('#vl-button-2');

        button1?.removeEventListener('click', this.showStep2);
        button2?.removeEventListener('click', this.showStep3);
    }

    private showStep2 = (): void => {
        const step2 = this.querySelector('#vl-step-2');

        if (step2 === null) {
            const step2Template = document.createElement('template');

            step2Template.innerHTML = `
                <vl-step-next id="vl-step-2">
                  <span slot="icon">2</span>
                  <span slot="title">Stap 2</span>
                  <span slot="subtitle">Vul je achternaam in</span>
                  <span slot="content">
                      <input is="vl-input-field" type="text" />
                      <button is="vl-button" id="vl-button-2">
                          Werk stap 2 af!
                      </button>
                  </span>
                </vl-step-next>  
              `;

            const vlSteps = this.querySelector('vl-steps-next');
            vlSteps?.appendChild(step2Template.content);

            const button = this.querySelector('#vl-button-2');
            button?.addEventListener('click', this.showStep3);
        }
    };

    private showStep3 = (): void => {
        const step3 = this.querySelector('#vl-step-3');

        if (step3 === null) {
            const customCSS = '.vl-step__icon { color: red; background-color: blue; }';
            const step3Template = document.createElement('template');

            step3Template.innerHTML = `
              <vl-step-next id="vl-step-3" data-vl-custom-CSS="${customCSS}">
                <span slot="icon">3</span>
                <span slot="title">Stap 3</span>
                <span slot="content">Klaar!</span>
              </vl-step-next>
            `;

            const vlSteps = this.querySelector('vl-steps-next');
            vlSteps?.appendChild(step3Template.content);
        }
    };
}
customElements.define('app-element', AppElement);
