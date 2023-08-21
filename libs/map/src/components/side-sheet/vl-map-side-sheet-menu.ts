import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';

/**
 * VlMapSideSheetMenu
 * @class
 * @classdesc De menu die verbonden is aan een side sheet.
 *
 * @extends HTMLElement
 * @mixes VlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-side-sheet.html|Demo}
 */
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
