import { registerWebComponents } from '@domg-wc/common-utilities';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-component')
export class AppComponent extends LitElement {
    static {
        registerWebComponents([]);
    }

    render() {
        return html``;
    }
}
