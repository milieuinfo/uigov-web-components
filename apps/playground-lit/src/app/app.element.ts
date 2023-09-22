import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlPopoverComponent } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import appElementStyle from './app.element.css';

@customElement('app-element')
export class AppElement extends LitElement {
    static {
        registerWebComponents([VlPopoverComponent]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [appElementStyle, vlElementsStyle];
    }

    render(): TemplateResult {
        return html`
            <a is="vl-link" id="btn-acties">Acties</a>
            <vl-popover data-vl-for="btn-acties" data-vl-placement="bottom-start">
                <ul is="vl-link-list">
                    <li is="vl-link-list-item">
                        <a is="vl-link">Voeg gebruiker toe.</a>
                    </li>
                    <li is="vl-link-list-item">
                        <a is="vl-link">Voeg adres toe.</a>
                    </li>
                </ul>
            </vl-popover

        `;
    }
}
