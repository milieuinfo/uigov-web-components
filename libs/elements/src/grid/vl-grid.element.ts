import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import './vl-column.element';
import './vl-layout.element';
import './vl-region.element';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-grid', { extends: 'div' })
export class VlGridElement extends BaseElementOfType(HTMLDivElement) {
    static get _observedClassAttributes() {
        return [
            'is-stacked',
            'is-stacked-small',
            'is-stacked-large',
            'align-start',
            'align-center',
            'align-end',
            'align-space-between',
            'align-space-around',
            'v-top',
            'v-center',
            'v-bottom',
            'v-stretch',
        ];
    }

    connectedCallback() {
        this.classList.add('vl-grid');
    }

    get _classPrefix() {
        return 'vl-grid--';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-grid': VlGridElement;
    }
}
