import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import styles from './style/vl-template.scss';

/**
 * VlTemplate
 * @class
 * @classdesc De standaard template voor websites en applicaties van de Vlaamse overheid.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-v-center - Attribuut wordt gebruikt om ervoor te zorgen dat de content verticaal gecentraliseerd wordt.
 * @property {boolean} data-vl-v-stretch - Attribuut wordt gebruikt om ervoor te zorgen dat de content 100% zal innemen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-template.html|Demo}
 */
@webComponent('vl-template')
export class VlTemplate extends BaseElementOfType(HTMLElement) {
    constructor() {
        super(`
      <style>
        ${styles}
      </style>
      <div>
        <slot name="header"></slot>
        <div class="vl-page">
          <main class="vl-main-content">
            <slot name="main"></slot>
          </main>
        </div>
        <slot name="footer"></slot>
      </div>
    `);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-template': VlTemplate;
    }
}
