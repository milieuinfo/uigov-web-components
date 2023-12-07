import { registerWebComponents } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import './app.element.scss';

export class AppElement extends HTMLElement {
    static {
        document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];
        registerWebComponents([]);
    }

    constructor() {
        super();

        this.innerHTML = ``;
    }
}
customElements.define('app-element', AppElement);
