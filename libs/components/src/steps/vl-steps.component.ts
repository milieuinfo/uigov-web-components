import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { stepsStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';
import stepsUigStyle from './vl-steps.uig-css';

@webComponent('vl-steps')
export class VlStepsComponent extends BaseElementOfType(HTMLElement) {
    static get _observedChildClassAttributes() {
        return ['timeline'];
    }

    constructor() {
        super(`
          <style>
            ${resetStyle}
            ${stepsStyle}
            ${stepsUigStyle}
          </style>
          <div class="vl-steps">
            <ul id="steps" class="vl-steps__list"></ul>
          </div>
        `);
    }

    connectedCallback() {
        super.connectedCallback();

        this._observer = this.__observeChildElements(() => this._processSteps());
        this._processSteps();
    }

    disconnectedCallback() {
        this._observer.disconnect();
    }

    get _stepsElement() {
        return this._shadow.querySelector('#steps');
    }

    get _classPrefix() {
        return 'vl-steps--';
    }

    _processSteps() {
        customElements.whenDefined('vl-step').then(() => {
            customElements.whenDefined('vl-duration-step').then(() => {
                this._stepsElement.innerHTML = ``;
                this.querySelectorAll('vl-step, vl-duration-step').forEach((item: any) =>
                    this._stepsElement.append(item.template)
                );
            });
        });
    }

    __observeChildElements(callback: MutationCallback) {
        const node = this as unknown as Node;
        const observer = new MutationObserver(callback);
        observer.observe(node, { childList: true, attributes: true, subtree: true, characterData: true });
        return observer;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-steps': VlStepsComponent;
    }
}
