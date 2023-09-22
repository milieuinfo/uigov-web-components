import { VlPopoverComponent } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import './app.element.scss';

export class AppElement extends HTMLElement {
    static {
        registerWebComponents([VlPopoverComponent]);
    }

    constructor() {
        super();

        this.innerHTML = `
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
            </vl-popover>
        `;
    }
}
customElements.define('app-element', AppElement);
