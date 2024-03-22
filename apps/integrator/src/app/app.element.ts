import { CSSResult, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlFormDemoComponent } from '@domg-wc/integration/form/demo/vl-form-demo.component';
import { vlElementsStyle } from '@domg-wc/elements';

@customElement('app-element')
export class AppElement extends LitElement {
    static override get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle];
    }

    static {
        registerWebComponents([VlFormDemoComponent]);
    }

    override render() {
        return html`<vl-form-demo></vl-form-demo>`
    }
}
