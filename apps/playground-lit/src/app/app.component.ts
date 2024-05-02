import { registerWebComponents } from '@domg-wc/common-utilities';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { VlLinkComponent } from '@domg-wc/components/next/link';

@customElement('app-component')
export class AppComponent extends LitElement {
    static {
        registerWebComponents([VlLinkComponent]);
    }

    render() {
        return html` <div><vl-link-next href="https://www.vlaanderen.be">Vlaanderen</vl-link-next></div> `;
    }
}
