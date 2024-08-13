import { webComponent } from '@domg-wc/common-utilities';
import { VlColumnElement } from '../grid/vl-column.element';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-form-column', { extends: 'div' })
export class VlFormColumn extends VlColumnElement {
    connectedCallback() {
        super.classList.add('vl-form-column');
    }

    get _columnClassPrefix() {
        return 'vl-form-col--';
    }

    get _pushClassPrefix() {
        return 'vl-form-push--';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-column': VlFormColumn;
    }
}
