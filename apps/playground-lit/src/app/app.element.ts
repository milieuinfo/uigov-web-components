import { CSSResult, LitElement, PropertyDeclarations, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlStepsComponent } from '@domg-wc/components/next/steps';
import { registerWebComponents } from '@domg-wc/common-utilities';
import appElementStyle from './app.element.css';

document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];

@customElement('app-element')
export class AppElement extends LitElement {
    private showStep2 = false;
    private showStep3 = false;

    static {
        registerWebComponents([VlStepsComponent]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [appElementStyle, vlElementsStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            showStep2: { type: Boolean, attribute: false },
            showStep3: { type: Boolean, attribute: false },
        };
    }

    render(): TemplateResult {
        const customCSS = '.vl-step__icon { color: red; background-color: blue; }';

        return html`
            <vl-steps-next>
                <vl-step-next>
                    <span slot="icon">1</span>
                    <span slot="title">Stap 1</span>
                    <span slot="subtitle">Vul je voornaam in</span>
                    <span slot="content">
                        <input is="vl-input-field" type="text" />
                        <button is="vl-button" @click=${() => (this.showStep2 = true)}>Werk stap 1 af!</button>
                    </span>
                </vl-step-next>
                ${this.showStep2
                    ? html`
                          <vl-step-next>
                              <span slot="icon">2</span>
                              <span slot="title">Stap 2</span>
                              <span slot="subtitle">Vul je achternaam in</span>
                              <span slot="content">
                                  <input is="vl-input-field" type="text" />
                                  <button is="vl-button" @click=${() => (this.showStep3 = true)}>
                                      Werk stap 2 af!
                                  </button>
                              </span>
                          </vl-step-next>
                      `
                    : ''}
                ${this.showStep3
                    ? html`
                          <vl-step-next data-vl-custom-CSS=${customCSS}>
                              <span slot="icon">3</span>
                              <span slot="title">Stap 3</span>
                              <span slot="content">Klaar!</span>
                          </vl-step-next>
                      `
                    : ''}
            </vl-steps-next>
        `;
    }
}
