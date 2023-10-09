import { VlPopoverComponent, VlPopoverActionComponent } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import './app.element.scss';

export class AppElement extends HTMLElement {
    static {
        registerWebComponents([VlPopoverComponent, VlPopoverActionComponent]);
    }

    constructor() {
        super();
        this.innerHTML = `
                        <main>
                           <a is="vl-link" id="btn-acties">Acties</a>
                                     <vl-popover for="btn-acties" placement="bottom-start" id="popover-acties">
                                        <vl-popover-action-list>
                                            <vl-popover-action icon="search" .action=${'search'}>Zoeken</vl-popover-action>
                                            <vl-popover-action icon="bell" .action=${'report'}>Rapportenoverzicht</vl-popover-action>
                                            <vl-popover-action icon="pin" .action=${'locate'}>Vind locatie</vl-popover-action>
                                        </vl-popover-action-list>
                                    </vl-popover>
                        </main>
        `;
    }

    connectedCallback(): void {
        const popover = this.querySelector('#popover-acties');
        popover?.addEventListener('click', this.handlePopoverActionClicked);
    }

    disconnectedCallback(): void {
        const popover = this.querySelector('#popover-acties');

        popover?.removeEventListener('click', this.handlePopoverActionClicked);
    }

    handlePopoverActionClicked(event: Event): void {
        const actionElement = event.target as VlPopoverActionComponent;
        if (actionElement instanceof VlPopoverActionComponent) {
            // do action
            console.log('vl-popover-action clicked > ' + actionElement.action);
        }
    }
}
customElements.define('app-element', AppElement);
