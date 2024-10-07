import { css, CSSResult, html, PropertyDeclarations, unsafeCSS } from 'lit';
import { BaseLitElement, webComponent } from '@domg-wc/common';
import { stardust } from '@nebula.js/stardust/types';
import { vlElementsStyle } from '@domg-wc/elements';

@webComponent('vl-qlik-visual')
export class VlQlikVisualComponent extends BaseLitElement {
    properties: EngineAPI.IGenericObjectProperties;
    stardust?: stardust.Embed;
    private type = '';
    private qlikId = '';
    private height = '';
    private width? = '';
    private additionalStyle = '';
    private visual: (stardust.Viz | stardust.Sheet) & {
        __DO_NOT_USE__?;
        model;
    };

    static get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            type: { type: String, attribute: 'type', reflect: true },
            qlikId: { type: String, attribute: 'qlik-id', reflect: true },
            height: { type: String, attribute: 'height', reflect: true },
            width: { type: String, attribute: 'width', reflect: true },
            additionalStyle: { type: String, attribute: 'additional-style', reflect: true },
            properties: { type: Object },
            stardust: { type: Object },
        };
    }

    async updated(_changedProperties) {
        super.updated(_changedProperties);
        if (this.visual) {
            this.visual.destroy();
        }
        this.visual = await this.stardust?.render({
            element: this.shadowRoot.getElementById(`visual-${this.qlikId}`),
            id: this.qlikId,
            type: this.type,
            properties: this.properties,
        });

        this.visual?.model.on(
            'changed',
            (() => {
                this.dispatchEvent(new CustomEvent('visual-changed'));
            }).bind(this)
        );

        if (this.type === 'distributionplot') {
            // experimental api
            await this.visual?.__DO_NOT_USE__.applyProperties(this.properties);
        }
    }

    render() {
        const style = css`
            ${unsafeCSS(`${this.additionalStyle};height: ${this.height};${this.width ? `width: ${this.width}` : ''}`)}
        `;
        return html` <div id="visual-${this.qlikId}" style="${style}"></div> `;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.visual) {
            this.visual.destroy();
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-qlik-visual': VlQlikVisualComponent;
    }
}
