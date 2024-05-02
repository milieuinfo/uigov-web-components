import { registerWebComponents } from '@domg-wc/common-utilities';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { VlTitleComponent } from '@domg-wc/components/next/title';

@customElement('app-component')
export class AppComponent extends LitElement {
    static {
        registerWebComponents([VlTitleComponent]);
    }

    render() {
        return html`
            <div>
                <vl-title-next>Ik ben een titel</vl-title-next>
            </div>
        `;
    }
}
