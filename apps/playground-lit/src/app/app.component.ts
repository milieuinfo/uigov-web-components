import { registerWebComponents } from '@domg-wc/common';
import { vlElementsStyle, VlMultiSelect, VlSelect } from '@domg-wc/elements';
import { LitElement, html, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-component')
export class AppComponent extends LitElement {
    static {
        registerWebComponents([VlMultiSelect, VlSelect]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle];
    }

    private readonly multiselectId: string;
    private readonly multiselectName: string;

    constructor() {
        super();
        this.multiselectId = 'multiselect-id';
        this.multiselectName = 'multiselect-name';
    }

    render() {
        return html`<select is="vl-multiselect" id="${this.multiselectId}" name="multiselectName">
            <option value="optie-1">optie-1</option>
            <option value="optie-2">optie-2</option>
            <option value="optie-3">optie-3</option>
        </select>`;
    }
}
