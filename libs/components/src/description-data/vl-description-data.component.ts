import { descriptionDataStyle } from '@domg/govflanders-style/component';
import { gridStyle, resetStyle } from '@domg/govflanders-style/common';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseLitElement, registerWebComponents } from '@domg-wc/common-utilities';
import { VlColumnElement, VlGridElement } from '@domg-wc/elements';
import { classMap } from 'lit/directives/class-map.js';

@customElement('vl-description-data')
export class VlDescriptionData extends BaseLitElement {
    private size = 0;
    private maxSize = 0;
    private mediumSize = 0;
    private mediumMaxSize = 0;
    private smallSize = 0;
    private smallMaxSize = 0;
    private extraSmallSize = 0;
    private extraSmallMaxSize = 0;
    private bordered = false;

    static {
        registerWebComponents([VlColumnElement, VlGridElement]);
    }

    static get styles() {
        return [resetStyle, gridStyle, descriptionDataStyle];
    }

    static get properties() {
        return {
            size: { type: Number, attribute: 'data-vl-items-size' },
            maxSize: { type: Number, attribute: 'data-vl-items-max-size' },
            mediumSize: { type: Number, attribute: 'data-vl-items-medium-size' },
            mediumMaxSize: { type: Number, attribute: 'data-vl-items-medium-max-size' },
            smallSize: { type: Number, attribute: 'data-vl-items-small-size' },
            smallMaxSize: { type: Number, attribute: 'data-vl-items-small-max-size' },
            extraSmallSize: { type: Number, attribute: 'data-vl-items-extra-small-size' },
            extraSmallMaxSize: { type: Number, attribute: 'data-vl-items-extra-small-max-size' },
            bordered: { type: Boolean, attribute: 'data-vl-bordered' },
        };
    }

    firstUpdated() {
        const observer = new MutationObserver(() => {
            this.requestUpdate();
        });

        observer.observe(this, { subtree: true, childList: true });
    }

    render() {
        this.size = this.size || 12 / this.children.length;
        const classes = {
            'vl-description-data': true,
            'vl-description-data--bordered': this.bordered,
        };
        return html` <div class=${classMap(classes)}>
            <div is="vl-grid">
                ${[...Array.from(this.children)].map((child, index) => {
                    const name = `item-${index}`;
                    child.setAttribute('slot', name);
                    return html` <div
                        is="vl-column"
                        data-vl-size=${this.size}
                        data-vl-max-size=${this.maxSize}
                        data-vl-medium-size=${this.mediumSize}
                        data-vl-medium-max-size=${this.mediumMaxSize}
                        data-vl-small-size=${this.smallSize}
                        data-vl-small-max-size=${this.smallMaxSize}
                        data-vl-extra-small-size=${this.extraSmallSize}
                        data-vl-extra-small-max-size=${this.extraSmallMaxSize}
                    >
                        <slot name=${name}></slot>
                    </div>`;
                })}
            </div>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-description-data': VlDescriptionData;
    }
}
