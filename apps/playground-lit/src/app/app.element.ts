import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { vlElementsStyle } from '@domg-wc/elements';
import {VlQlikVisualComponent} from "@domg-wc/qlik";
import { registerWebComponents } from '@domg-wc/common-utilities';
import {STARDUST, Qlik} from "@domg/qlik-lib/build/release/index.js";
import appElementStyle from './app.element.css';

@customElement('app-element')
export class AppElement extends LitElement {

    private stardust: any;

    static get properties() {
        return {
            stardust: {state: true, type: Object}
        }
    }

    static {
        registerWebComponents([VlQlikVisualComponent]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle];
    }

    async connectedCallback() {
        super.connectedCallback();
      const connection = new Qlik("omgevingsloketrapport.omgeving.vlaanderen.be", "6960c6d8-493a-4489-a428-367b779be6f9");
      console.log(connection);
      await connection.init();
        console.log(connection);
      this.stardust = await STARDUST(connection.app);
        console.log(this.stardust);
    }

    render(): TemplateResult {
      console.log("rendering")
      console.log(this.stardust)
        return html`
            <div>TEST</div>
            <vl-qlik-visual
                visual-id="d1528e9a-def2-4e55-bcd6-0e54bc86f465"
                visual-type="kpi"
                visual-height="50px"
                .visualStardust="${this.stardust}"
            ></vl-qlik-visual>
        `;
    }
}
