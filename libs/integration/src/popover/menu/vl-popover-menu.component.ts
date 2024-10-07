import { LitElement, html } from 'lit';
import { registerWebComponents, webComponent } from '@domg-wc/common';
import { VlPopoverComponent } from '@domg-wc/components';

@webComponent('vl-popover-menu')
export class VlPopoverMenuComponent extends LitElement {
    static {
        registerWebComponents([VlPopoverComponent]);
    }

    override render() {
        return html`
            <div>
                <a is="vl-link" id="btn-acties">
                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                </a>
                <vl-popover for="btn-acties" placement="bottom-end" distance="5">
                    <vl-popover-action-list>
                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                    </vl-popover-action-list>
                </vl-popover>
            </div>
        `;
    }

    protected override createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-popover-menu': VlPopoverMenuComponent;
    }
}
