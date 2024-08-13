import { BaseElementOfType, registerWebComponents, webComponent } from '@domg-wc/common-utilities';
import { VlColumnElement, VlGridElement } from '@domg-wc/elements';
import { gridStyle, resetStyle } from '@domg/govflanders-style/common';
import { contactCardStyle } from '@domg/govflanders-style/component';
import contactCardUigStyle from './vl-contact-card.uig-css';

@webComponent('vl-contact-card')
export class VlContactCardComponent extends BaseElementOfType(HTMLElement) {
    static {
        registerWebComponents([VlColumnElement, VlGridElement]);
    }

    constructor() {
        super(`
            <style>
                ${resetStyle}
                ${gridStyle}
                ${contactCardStyle}
                ${contactCardUigStyle}
            </style>
            <div class="vl-contact-data">
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="3" data-vl-medium-size="12">
                        <slot name="info"></slot>
                    </div>
                    <div is="vl-column" data-vl-size="8" data-vl-medium-size="12" data-vl-push="1" class="vl-push--reset--m">
                        <slot name="properties"></slot>
                    </div>
                </div>
            </div>
         `);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-contact-card': VlContactCardComponent;
    }
}
