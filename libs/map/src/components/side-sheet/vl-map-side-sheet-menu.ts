import { BaseElementOfType, webComponent } from '@domg-wc/common';
import { vlElementsStyle } from '@domg-wc/elements';

@webComponent('vl-map-side-sheet-menu')
export class VlMapSideSheetMenu extends BaseElementOfType(HTMLElement) {
    constructor() {
        super(`
      <style>
        ${vlElementsStyle}
        :host {
          margin: -1.5rem;
          display: block;
        }
      </style>
      <slot></slot>
    `);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-side-sheet-menu': VlMapSideSheetMenu;
    }
}
