import { define } from '@domg-wc/common-utilities';
import { VlSideSheet } from '@domg-wc/components';

/**
 * VlMapSideSheet
 * @class
 * @classdesc Het map zijpaneel.
 *
 * @extends VlSideSheet
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-side-sheet.html|Demo}
 */
export class VlMapSideSheet extends VlSideSheet {
    constructor() {
        super(`
      :host {
        width: 3.5rem;
        transition: width 0.1s;
      }

      :host([data-vl-open]) {
        width: var(--vl-side-sheet-width,calc(100%/3));
      }

      .vl-side-sheet__toggle {
        margin: 10px;
      }

      :host([data-vl-open]) .vl-side-sheet__toggle {
        margin-left: 0px;
      }

      ::slotted(*) {
        margin-bottom: 20px;
      }
    `);
    }

    connectedCallback() {
        super.connectedCallback();
        this._render();
    }

    _render() {
        this.setAttribute('data-vl-left', '');
        this.setAttribute('data-vl-absolute', '');
    }
}

define('vl-map-side-sheet', VlMapSideSheet);
