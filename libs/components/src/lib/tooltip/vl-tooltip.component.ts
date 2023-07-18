import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import '@govflanders/vl-ui-util/dist/js/util.js';
import './vl-tooltip.lib.js';
import { tooltipStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';

declare const vl: any;

/**
 * VlTooltip
 * @class
 * @classdesc Gebruik de vl-tooltip om beschrijvende informatie over een knop, label of eender welk element weer te geven.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {(left | right | bottom | top)} data-vl-placement - Attribuut bepaalt de positie (t.o.v. het element) waar de tooltip moet verschijnen.
 * @property {boolean} data-vl-static - Attribuut zorgt voor een variant waarbij een statische, altijd zichtbare, tooltip wordt getoond voor het betreffende element.
 */
@webComponent('vl-tooltip')
export class VlTooltipComponent extends BaseElementOfType(HTMLElement) {
    constructor() {
        super(`
      <style>
        ${resetStyle}
        ${tooltipStyle}
      </style>
    `);
    }

    connectedCallback() {
        super.connectedCallback();

        const node = this as unknown as Node;
        new MutationObserver(() => {
            if (!this._isStatic) {
                this.parentNode.setAttribute('data-vl-tooltip-content', this.textContent);
                this.tooltipInstance.updateTitleContent(this.textContent);
            }
        }).observe(node, {
            characterData: true,
            childList: true,
            subtree: true,
        });

        if (!this._isStatic) {
            this._dress();
        }
    }

    disconnectedCallback() {
        vl.tooltip.undress(this.tooltipInstance);
    }

    static get _observedAttributes() {
        return ['static', 'placement'];
    }

    get _isStatic() {
        return this.hasAttribute('static');
    }

    get _placement() {
        return this.getAttribute('placement');
    }

    get _staticTooltipElement() {
        return this._shadow.querySelector('.vl-tooltip');
    }

    _dress() {
        this.parentNode.setAttribute('data-vl-tooltip', '');
        this.parentNode.setAttribute('data-vl-tooltip-placement', this._placement);
        this.parentNode.setAttribute('data-vl-tooltip-content', this.textContent);
        this.tooltipInstance = vl.tooltip.createTooltip(this.parentNode);
    }

    _removeDataTooltipAttributes() {
        this.parentNode.removeAttribute('data-vl-tooltip');
        this.parentNode.removeAttribute('data-vl-tooltip-placement');
        this.parentNode.removeAttribute('data-vl-tooltip-content');
    }

    _getStaticTooltipTemplate() {
        return this._template(`
      <div class="vl-tooltip vl-tooltip--static">
        <div class="vl-tooltip__inner">
          <slot></slot>
        </div>
        <div class="vl-tooltip__arrow"></div>
      </div>
    `);
    }

    _placementChangedCallback(oldValue: string, newValue: string) {
        if (this._isStatic) {
            this._staticTooltipElement.setAttribute('x-placement', newValue);
        } else {
            this.parentNode.setAttribute('data-vl-tooltip-placement', newValue);
            if (this.parentNode.getAttribute('data-vl-tooltip-content')) {
                vl.tooltip.undress(this.tooltipInstance);
                this.tooltipInstance = vl.tooltip.createTooltip(this.parentNode);
            }
        }
    }

    _staticChangedCallback(oldValue: string, newValue: string) {
        if (this._staticTooltipElement) {
            this._staticTooltipElement.remove();
        }

        if (newValue != undefined) {
            vl.tooltip.undress(this.tooltipInstance);
            this._removeDataTooltipAttributes();
            const tooltipTemplate = this._getStaticTooltipTemplate();
            this._shadow.appendChild(tooltipTemplate);
            this._staticTooltipElement.setAttribute('x-placement', this._placement);
        } else {
            this._dress();
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-tooltip': VlTooltipComponent;
    }
}
