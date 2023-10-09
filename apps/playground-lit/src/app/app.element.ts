import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlPopoverComponent, VlPopoverActionComponent } from '@domg-wc/components';
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
            <main>
                <a is="vl-link" id="btn-acties">Acties</a>
                <vl-popover for="btn-acties" placement="bottom-start">
                    <vl-popover-action-list
                        @click=${(event: Event) => {
                            const actionElement = event.target as VlPopoverActionComponent;
                            if (actionElement instanceof VlPopoverActionComponent) {
                                // do action
                                console.log('vl-popover-action clicked > ' + actionElement.action);
                            }
                        }}
                    >
                        <vl-popover-action icon="search" .action=${'search'}>Zoeken</vl-popover-action>
                        <vl-popover-action icon="bell" .action=${'report'}>Rapportenoverzicht</vl-popover-action>
                        <vl-popover-action icon="pin" .action=${'locate'}>Vind locatie</vl-popover-action>
                    </vl-popover-action-list>
                </vl-popover>
            </main>
        `;
    }
}
