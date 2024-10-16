import { registerWebComponents } from '@domg-wc/common-utilities';
import './app.element.scss';
import { vlGridStyles } from '@domg-wc/common-utilities/css/grid/vl-grid.css';
import { vlMarginStyles } from '@domg-wc/common-utilities/css/space/vl-margin.css';
import { vlPaddingStyles } from '@domg-wc/common-utilities/css/space/vl-padding.css';

export class AppElement extends HTMLElement {
    static {
        registerWebComponents([]);
        document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets,
            vlGridStyles.styleSheet,
            vlPaddingStyles.styleSheet,
            vlMarginStyles.styleSheet,
        ];
    }

    connectedCallback(): void {
        this.innerHTML = `
            <main>
                <div class="vl-grid-next vl-grid-next--justify-items-center">
                    <div class="vl-col-next--4 vl-padding-next--small">Col 1 / 1</div>
                    <div class="vl-col-next--4 vl-margin-next--medium vl-margin-next--no-top">Col 1 / 2</div>
                    <div class="vl-col-next--4">Col 1 / 3</div>
                    <div class="vl-col-next--4 vl-col-next--justify-self-end">Col 2 / 1</div>
                    <div class="vl-col-next--4 vl-col-next--justify-self-start">Col 2 / 2</div>
                    <div class="vl-col-next--4">Col 2 / 3</div>
                    <div class="vl-col-next--6">Col 3 / 1</div>
                    <div class="vl-col-next--6">Col 3 / 2</div>
                </div>
            </main>
        `;
    }
}
customElements.define('app-element', AppElement);
