import { BaseLitElement } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import { resetStyle } from '@domg/govflanders-style/common';
import { CSSResult, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators';
import { customElement } from 'lit/decorators.js';
import cascaderItemUigStyle from './vl-cascader-item.uig-css';
import { VlCascaderComponent } from './vl-cascader.component';
import { CASCADER_MESSAGES, CASCADER_SLOTS, CascaderItem } from './vl-cascader.model';
import {
    defaultItemActionTemplate,
    getDefaultItemTemplate,
    getNodesForSlot,
    getTemplateFunctionForType,
} from './vl-cascader.utils';

@customElement('vl-cascader-item')
export class VlCascaderItemComponent extends BaseLitElement {
    @property({ type: Object })
    accessor item: CascaderItem = { label: CASCADER_MESSAGES.LABEL_MISSING };
    @property({ type: String })
    accessor label = CASCADER_MESSAGES.LABEL_MISSING;
    @property({ type: String, attribute: 'template-type' })
    accessor templateType: string | undefined;
    @property({ type: String })
    accessor annotation: string | undefined;

    cascaderRef: VlCascaderComponent | undefined;

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, vlElementsStyle, cascaderItemUigStyle];
    }

    connectedCallback() {
        super.connectedCallback();
        this.updateItemData();
    }

    private updateItemData(): void {
        if (this.label != null) {
            this.item.label = this.label;
            this.item.templateType = this.templateType;
        }
        this.item.annotation = this.annotation;
    }

    protected render(): TemplateResult {
        const cascaderRef = this.cascaderRef;
        const hasLabelSlot = Boolean(getNodesForSlot(this, CASCADER_SLOTS.LABEL)?.length);
        const { templateType } = this.item;
        let templateResultForNode;
        if (templateType && cascaderRef) {
            templateResultForNode = getTemplateFunctionForType(this.item, cascaderRef);
        } else if (cascaderRef) {
            templateResultForNode = getDefaultItemTemplate(this.item, cascaderRef, hasLabelSlot);
        }
        return cascaderRef && templateResultForNode
            ? html`${templateResultForNode} ${html`
                <slot name="content"></
                <slot>`}`
            : html`${!hasLabelSlot ? defaultItemActionTemplate(this.item) : html` <slot name="label"></slot>`}
            <slot name="content"></
            <slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-cascader-item': VlCascaderItemComponent;
    }
}
