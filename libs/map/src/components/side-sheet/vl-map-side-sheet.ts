import { webComponent } from '@domg-wc/common-utilities';
import { VlSideSheet } from '@domg-wc/components';

/**
 * VlMapSideSheet
 * @class
 * @classdesc Het map zijpaneel. Let op: de default positie van de VlMapSideSheet is links, terwijl de default positie van de VlSideSheet rechts is.
 *
 * @extends VlSideSheet
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-side-sheet.html|Demo}
 */
@webComponent('vl-map-side-sheet')
export class VlMapSideSheet extends VlSideSheet {
    constructor() {
        // TODO: Kijk of dit iets moet doen, momenteel doet dit niets omdat de parameter in de constructor van VlSideSheet genegeerd wordt.
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
        this.setAttribute('data-vl-absolute', '');

        if (!this.hasAttribute('data-vl-right')) {
            this.setAttribute('data-vl-left', '');
        }
        this._openChangedCallback();
    }

    _rightChangedCallback(_oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this.removeAttribute('data-vl-left');
        } else {
            this.setAttribute('data-vl-left', '');
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-side-sheet': VlMapSideSheet;
    }
}
