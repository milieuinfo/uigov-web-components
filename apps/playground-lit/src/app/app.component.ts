import { registerWebComponents } from '@domg-wc/common-utilities';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { VlFormDataComponent } from '@domg-wc/integration/form/form-data';

@customElement('app-component')
export class AppComponent extends LitElement {
    static {
        registerWebComponents([VlFormDataComponent]);
    }

    render() {
        return html` <vl-form-data></vl-form-data> `;
    }
}
