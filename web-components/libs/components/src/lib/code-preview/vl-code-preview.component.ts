import { BaseElementOfType, define } from '@domg-wc/common-utilities';
import '@govflanders-v14/vl-ui-util/dist/js/util.js';
import '@govflanders-v14/vl-ui-core/dist/js/core.js';
import '@govflanders-v14/vl-ui-code-preview/dist/js/code-preview.js';
import styles from './style/vl-code-preview.scss';

declare const vl: any;

/**
 * VlCodePreview
 * @class
 * @classdesc De code preview visualiseert de broncode.
 *
 * @extends HTMLElement
 * @mixes vlElement
 */
export class VlCodePreviewComponent extends BaseElementOfType(HTMLElement) {
    constructor() {
        super(`
      <style>
        ${styles}
      </style>
      <div class="vl-code-preview" data-vl-code-preview data-vl-code-preview-no-copy-button>
        <pre class="line-numbers">
          <code class="language-markup auto-indent" tabindex="0"></code>
        </pre>
      </div>
    `);

        this._dress();
    }

    get _codeElement() {
        return this.shadowRoot.querySelector('code');
    }

    _dress() {
        [...this.children].forEach((child) => this._codeElement.append(child));
        vl.codePreview.dress(this._element);
    }
}

define('vl-code-preview', VlCodePreviewComponent);
