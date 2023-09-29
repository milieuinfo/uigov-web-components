import { TemplateFn, CascaderItem, VlCascaderComponent } from './index';
import { html, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export const getNodesForSlot = (element: HTMLElement, slotName: string) => {
    return element?.querySelectorAll<Element>(`:scope > [slot=${slotName}]`);
};

export const getTemplateFunctionForType = (
    item: CascaderItem,
    cascader: VlCascaderComponent
): TemplateResult | void => {
    const { templateType } = item;
    if (!cascader) {
        return;
    }
    const { templates } = cascader;
    if (templateType && templates && templates instanceof Map<string, TemplateFn>) {
        const getCustomTemplateResult = templates.get(templateType);
        return getCustomTemplateResult && getCustomTemplateResult(item, cascader.processNarrowDown);
    }
};

export const getDefaultItemTemplate = (
    item: CascaderItem,
    cascader: VlCascaderComponent,
    hasLabelSlot = false
): TemplateResult => {
    const itemClasses = {
        'vl-cascader-item': !cascader.isDeclarativeMode(),
    };
    return html`
        <div
            class=${classMap(itemClasses)}
            @click=${(event: Event) => {
                cascader?.processNarrowDown(item);
            }}
        >
            ${!hasLabelSlot ? defaultItemActionTemplate(item) : html`<slot name="label">${item.label}</slot>`}
        </div>
    `;
};

export const defaultItemActionTemplate = (item: CascaderItem): TemplateResult => {
    const hasChildren = (item.children && item.children.length) || item.narrowDown;
    const linkClasses = {
        'space-between': Boolean(hasChildren),
    };
    return html`
        <a is="vl-link" class="vl-link--bold vl-cascader-link ${classMap(linkClasses)}">
            <span>${item.label}</span> ${hasChildren
                ? html` <span is="vl-icon" data-vl-icon="arrow-right-fat"></span> `
                : ''}
        </a>
    `;
};
