import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { stepsStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';
import stepsUigStyle from './vl-steps.uig-css';

/**
 * VlSteps
 *
 * @deprecated gebruik de vl-steps-next component
 *
 * @class
 * @classdesc De steps component bevat een verticale lijst van genummerde stappen. Stappen kunnen gebruikt worden om de gebruiker stap voor stap door een procedure te begeleiden.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-timeline - Attribuut wordt gebruikt om aan te geven dat de stappen een tijdlijn voorstellen.
 */
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
