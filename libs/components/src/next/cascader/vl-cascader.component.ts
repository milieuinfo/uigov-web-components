import { CSSResult, html, nothing, PropertyDeclarations, PropertyValues, TemplateResult } from 'lit';
import { BaseLitElement, registerWebComponents } from '@domg-wc/common-utilities';
import { customElement } from 'lit/decorators.js';
import { resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import { breadcrumbStyle } from '@domg/govflanders-style/component';
import cascaderUigStyle from './vl-cascader.uig-css';
import { classMap } from 'lit/directives/class-map.js';
import { getDefaultItemTemplate, getNodesForSlot, getTemplateFunctionForType } from './vl-cascader.utils';
import {
    CASCADER_MESSAGES,
    CASCADER_SLOTS,
    ItemListFn,
    TemplateFn,
    NarrowDownFn,
    CascaderItem,
} from './vl-cascader.model';
import { VlCascaderItemComponent } from './vl-cascader-item.component';

@customElement('vl-cascader')
export class VlCascaderComponent extends BaseLitElement {
    items: CascaderItem[] = [];
    itemListFn: ItemListFn | undefined;
    templates: Map<string, TemplateFn> | undefined;

    // Stack to keep track of the navigation hierarchy history
    private navigationLevelStack: CascaderItem[][] = [];
    private nodeData: CascaderItem[] = [];
    private breadCrumbHistory: { label: string; index: number }[] = [];
    private slidingIn = false;
    private slidingOut = false;
    private hideBreadcrumb = false;
    private level = 0;
    private isLoading = false;
    private loadingMessage = CASCADER_MESSAGES.LOADING;
    private declarativeMode = false;

    static {
        registerWebComponents([VlCascaderItemComponent]);
    }

    static get properties(): PropertyDeclarations {
        return {
            level: { type: Number, attribute: 'level', reflect: true },
            hideBreadcrumb: { type: Boolean, attribute: 'hide-breadcrumb', reflect: true },
            loadingMessage: { type: String, attribute: 'loading-message', reflect: true },
            isLoading: { type: Boolean, attribute: 'loading', reflect: true },
            itemListFn: { type: Function },
            nodeData: { type: Array, state: true },
            templates: { type: Map },
            items: { type: Array, attribute: 'items' },
        };
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, vlElementsStyle, breadcrumbStyle, cascaderUigStyle];
    }

    connectedCallback() {
        super.connectedCallback();

        this.setData();
    }

    isDeclarativeMode(): boolean {
        return this.declarativeMode;
    }

    private setData(): void {
        const nodeTree = this.traverseTreeAndMapItems(this);
        this.declarativeMode = !this.items || !this.items.length;
        if (this.declarativeMode) {
            this.nodeData = nodeTree;
        } else {
            this.nodeData = this.items;
        }
    }

    /**
     * Update de navigationLevelStack en breadCrumbHistory
     * Wanneer aangeroepen zonder argumenten, gaan we terug in de geschiedenis
     * @param label?: string
     * @param items?: CascaderItem[]
     * @private
     */
    private pushItemStack(label: string, items: CascaderItem[]): void {
        if (label && items) {
            this.level = this.navigationLevelStack.push(items);
            this.breadCrumbHistory.push({ label, index: this.level });
        }
    }

    /**
     * Update de navigationLevelStack en breadCrumbHistory
     * Wanneer aangeroepen zonder argumenten, gaan we terug in de geschiedenis
     * @private
     */
    private popItemStack(): void {
        this.nodeData = this.navigationLevelStack.pop() || [];
        this.level = (this.breadCrumbHistory.pop()?.index || 1) - 1;
    }

    /**
     * Deze functie zal het volgende niveau laden op basis van het CascaderItem argument
     * @param item: CascaderItem
     */
    processNarrowDown: NarrowDownFn = async (item: CascaderItem) => {
        if (this.isLoading) return;
        const { label, children, narrowDown } = item;
        if (children?.length) {
            this.pushItemStack(label, this.nodeData);
            this.nodeData = children;
            this.slidingIn = true;
            this.requestUpdate();
        } else if (narrowDown && this.itemListFn) {
            this.isLoading = true;
            this.pushItemStack(label, this.nodeData);
            this.requestUpdate();
            this.nodeData = await this.itemListFn(item);
            this.isLoading = false;
            this.slidingIn = true;
            this.requestUpdate();
        }
    };

    private goBack() {
        if (this.isLoading) return;
        if (this.navigationLevelStack.length > 0) {
            this.slidingOut = true;
            this.popItemStack();
        }
        this.requestUpdate();
    }

    private jumpToLevel(index: number): void {
        if (this.isLoading) return;
        const length = this.navigationLevelStack.length;
        const regressionNumber = length - index;
        if (regressionNumber > 0) {
            Array.from({ length: regressionNumber }).map(() => {
                this.goBack();
            });
        }
    }

    private renderBreadcrumbHome = () => {
        const hasBreadcrumbPlaceholderSlot = Boolean(getNodesForSlot(this, CASCADER_SLOTS.HOME)?.length);
        return html`
            <li class="vl-breadcrumb__list__item">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                ${
                    !hasBreadcrumbPlaceholderSlot
                        ? html`
                              <span
                                  is="vl-icon"
                                  data-vl-icon="places-home"
                                  class="vl-breadcrumb__list__item__cta"
                                  @click=${() => this.jumpToLevel(0)}
                              ></span>
                          `
                        : html`
                              <span
                                  @click=${() => this.jumpToLevel(0)}
                                  class="vl-breadcrumb__list__item__cta vl-breadcrumb-home-slot"
                              >
                                  <slot name="home"></slot>
                              </span>
                          `
                }
                </span>
            </li>
        `;
    };

    private renderBreadcrumbItem = ({ label, index }: { label: string; index: number }): TemplateResult => {
        const historyLength = this.breadCrumbHistory?.length;
        const isActiveLevel = historyLength === index;
        const breadCrumbItemClasses = {
            'vl-breadcrumb__list__item--deactivated': isActiveLevel,
        };
        return html`
            <li class="vl-breadcrumb__list__item ${classMap(breadCrumbItemClasses)}">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                <span class="vl-breadcrumb__list__item__cta" @click=${() => this.jumpToLevel(index)}>${label}</span>
            </li>
        `;
    };

    private renderBreadcrumb(): TemplateResult {
        const historyLength = this.breadCrumbHistory?.length;
        const hasBreadcrumbPlaceholderSlot = Boolean(
            getNodesForSlot(this, CASCADER_SLOTS.BREADCRUMB_PLACEHOLDER)?.length
        );
        return html`
            ${historyLength && !this.hideBreadcrumb
                ? html`
                      <nav aria-label="U bent hier: " class="vl-breadcrumb">
                          <ol class="vl-breadcrumb__list">
                              ${this.renderBreadcrumbHome()} ${this.breadCrumbHistory?.map(this.renderBreadcrumbItem)}
                          </ol>
                      </nav>
                  `
                : hasBreadcrumbPlaceholderSlot || !this.hideBreadcrumb
                ? html`
                      <nav class="vl-breadcrumb-placeholder">
                          <slot name="breadcrumb-placeholder"></slot>
                      </nav>
                  `
                : nothing}
        `;
    }

    private renderItem = (item: CascaderItem): TemplateResult | VlCascaderItemComponent => {
        const customTemplateResult = getTemplateFunctionForType(item, this);
        if (item.component) {
            // declaratieve gedefinieerde templates van afnemers renderen (via nested <vl-cascader-item>'s)
            return item.component;
        } else if (customTemplateResult) {
            // programmatisch gedefinieerde templates van afnemers renderen (via templates:Map<string, TemplateResult>)
            return customTemplateResult;
        } else {
            return this.defaultItemTemplate(item);
        }
    };

    private defaultItemTemplate(item: CascaderItem): TemplateResult {
        return getDefaultItemTemplate(item, this);
    }

    protected updated(changedProperties: PropertyValues<string>): void {
        super.updated(changedProperties);
        if (changedProperties.has('level')) {
            this.jumpToLevel(this.level);
        } else if (changedProperties.has('items')) {
            this.nodeData = this.items;
        }
    }

    private getChildCascaderNodes = (component: HTMLElement) =>
        component.querySelectorAll<VlCascaderItemComponent>(':scope > vl-cascader-item');

    /**
     * Gaat de DOM-tree recursief aflopen binnen de VlCascaderComponent,
     * om zo de hiërarchische data structuur van de VlCascaderItemComponent als een array van CascaderItem's op te slaan
     * @param component: VlCascaderItemComponent | VlCascaderComponent
     * @returns CascaderItem[]
     */
    private traverseTreeAndMapItems = (component: VlCascaderItemComponent | VlCascaderComponent): CascaderItem[] => {
        const nodes = this.getChildCascaderNodes(component);
        const nodesForThisLevel: CascaderItem[] = [];
        nodes.forEach((node) => {
            const children = this.traverseTreeAndMapItems(node);
            node.item.children = children;
            node.cascaderRef = this;
            nodesForThisLevel.push({
                ...node.item,
                label: node.label!,
                component: node,
                children: children,
            });
        });
        return nodesForThisLevel;
    };

    protected render(): TemplateResult {
        const navSectionClasses = {
            'slide-in': this.slidingIn && !this.slidingOut,
            'slide-out': this.slidingOut && !this.slidingIn,
        };
        return html`
            <div>
                ${this.renderBreadcrumb()}
                <div class="content">
                    <section class=${classMap(navSectionClasses)} @animationend=${this.handleAnimationEnd}>
                        ${!this.isLoading
                            ? this.nodeData?.map(this.renderItem)
                            : html` <vl-loader data-vl-text=${this.loadingMessage}></vl-loader> `}
                    </section>
                </div>
            </div>
        `;
    }

    private handleAnimationEnd(): void {
        this.slidingIn = false;
        this.slidingOut = false;
        this.requestUpdate();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-cascader': VlCascaderComponent;
    }
}
