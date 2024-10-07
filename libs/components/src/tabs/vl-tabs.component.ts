import { type VL, awaitUntil, registerWebComponents, webComponent, BaseHTMLElement } from '@domg-wc/common';
import '@govflanders/vl-ui-util/dist/js/util.js'; // Moet expliciet geïmporteerd worden om de cy test te laten slagen - de vl object is nodig
import './vl-tabs.lib.js';
import { VlTabComponent } from './vl-tab.component';
import { VlTabSectionComponent } from './vl-tab-section.component';
import { VlTabsPaneComponent } from './vl-tabs-pane.component';
import { linkStyle, tabsStyle } from '@domg/govflanders-style/component';
import { baseStyle, elementStyle, resetStyle } from '@domg/govflanders-style/common';
import tabsUigStyle from './vl-tabs.uig-css';

declare const vl: VL;
declare const window: Window;

@webComponent('vl-tabs')
export class VlTabsComponent extends BaseHTMLElement {
    private _observer: MutationObserver | undefined;
    private abortController = new AbortController();
    private disconnectedSignal = this.abortController.signal;

    static {
        registerWebComponents([VlTabComponent, VlTabSectionComponent, VlTabsPaneComponent]);
    }

    static get is() {
        return 'vl-tabs';
    }

    static get _observedAttributes() {
        return [
            'alt',
            'responsive-label',
            'active-tab',
            'href',
            'disable-links',
            'within-functional-header',
            'display-style', // 'default' | 'tabs' | 'collapsed'
        ];
    }

    constructor() {
        super(`
        <style>
          ${resetStyle}
          ${tabsStyle}
          ${tabsUigStyle}
          ${linkStyle}
          ${baseStyle}
          ${elementStyle}
        </style>
        <div id="tabs" data-vl-tabs data-vl-tabs-responsive-label="Navigatie">
          <div id="tabs-wrapper" class="vl-tabs__wrapper">
            <ul id="tab-list" class="vl-tabs" data-vl-tabs-list role="tablist" aria-label="tabs"></ul>
            <button type="button" data-vl-tabs-toggle class="vl-tabs__toggle" data-vl-close="false">
              <span id="data-vl-tabs-responsive-label">Navigatie</span>
            </button>
          </div>
        </div>
      `);
    }

    connectedCallback() {
        super.connectedCallback();

        this._renderTabs();

        if (!this.hasAttribute('within-functional-header')) {
            this._renderSections();
        }

        this.__dress();
        this._observer = this.__observeTabPanes((mutations: MutationRecord[]) => this.__processTabPane(mutations));
    }

    disconnectedCallback() {
        this._observer?.disconnect();
        this.abortController.abort('disconnectedCallback');
    }

    get _dressed(): boolean {
        return this.hasAttribute(VlTabsComponent._dressedAttributeName);
    }

    static get _dressedAttributeName(): string {
        return 'data-vl-tabs-dressed';
    }

    async __dress(forced?: boolean): Promise<void> {
        if (!this._dressed || forced) {
            await customElements.whenDefined('vl-tab');
            await customElements.whenDefined('vl-tab-section');
            vl.tabs.dress(this);
            this.setAttribute(VlTabsComponent._dressedAttributeName, '');
        }
    }

    /**
     * Wacht tot de tab initialisatie klaar is.
     *
     * @return {Promise}
     */
    async ready(): Promise<void> {
        return awaitUntil(() => this._dressed);
    }

    get __tabs(): HTMLDivElement {
        return this.shadowRoot?.getElementById('tabs') as HTMLDivElement;
    }

    get __tabList(): HTMLUListElement {
        return this.shadowRoot?.getElementById('tab-list') as HTMLUListElement;
    }

    get __tabsToggle(): HTMLButtonElement {
        return this.shadowRoot?.querySelector('.vl-tabs__toggle') as HTMLButtonElement;
    }

    get __responsiveLabel(): HTMLSpanElement {
        return this.shadowRoot?.getElementById('data-vl-tabs-responsive-label') as HTMLSpanElement;
    }

    get __tabPanes(): VlTabsPaneComponent[] {
        return [...this.querySelectorAll<VlTabsPaneComponent & Element>(VlTabsPaneComponent.is)];
    }

    __getTabTemplate({ id, title }: { id: string; title: string }) {
        const disableLinks = this.hasAttribute('disable-links');
        const withinFunctionalHeader = this.hasAttribute('within-functional-header');

        return this._template(`
            <li
                role="tab"
                is="vl-tab"
                data-vl-id="${id}"
                data-vl-href="${this.__href}#${id}"
                ${withinFunctionalHeader ? 'data-vl-within-functional-header' : ''}
                ${disableLinks ? 'data-vl-disable-link' : ''}
            >
                <slot name="${id}-title-slot">${title}</slot>
            </li>
        `);
    }

    __getTabSectionTemplate({ id }: { id: string }) {
        return this._template(`
            <section id="${id}-pane" is="vl-tab-section">
                <slot name="${id}-slot"></slot>
            </section>
        `);
    }

    _addTab({ tabPane, index }: { tabPane: VlTabsPaneComponent; index?: number }) {
        const element = this.__getTabTemplate({
            id: tabPane.getAttribute('data-vl-id'),
            title: tabPane.getAttribute('data-vl-title'),
        });
        if (index && index >= 0) {
            this.__tabList?.insertBefore(element, this.__tabList.children[index]);
        } else {
            this.__tabList?.appendChild(element);
        }
    }

    _removeTab(id: string) {
        const element = this.__tabList?.querySelector(`[data-vl-id="${id}"]`);
        if (element) {
            this.__tabList?.removeChild(element);
        }
    }

    _addTabSection({ id, index }: { id: string; index: number }) {
        this.__tabPanes[index].setAttribute('slot', `${id}-slot`);
        const element = this.__getTabSectionTemplate({ id });
        if (index && index >= 0) {
            this.__tabs?.insertBefore(element, this.__tabs.children[++index]);
        } else {
            this.__tabs?.appendChild(element);
        }
    }

    _removeTabSection(id: string) {
        const element = this.__tabs?.querySelector(`#${id}-pane`);
        if (element) {
            this.__tabs?.removeChild(element);
        }
    }

    _renderTabs() {
        if (this.__tabList) this.__tabList.innerHTML = '';
        this.__tabPanes.forEach((tabPane) => {
            this._addTab({ tabPane: tabPane as Element & VlTabsPaneComponent });
        });
    }

    _renderSections() {
        this.__tabPanes.forEach((tabPane, index) =>
            this._addTabSection({ id: tabPane.getAttribute('data-vl-id'), index })
        );
    }

    _altChangedCallback(oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this.__tabList.classList.add('vl-tabs--alt');
        } else {
            this.__tabList.classList.remove('vl-tabs--alt');
        }
    }

    _responsiveLabelChangedCallback(oldValue: string, newValue: string) {
        const value = newValue || 'Navigatie';
        this.__tabs.setAttribute('data-vl-tabs-responsive-label', value);
        this.__responsiveLabel.innerHTML = value;
    }

    async _activeTabChangedCallback(oldValue: string, newValue: string): Promise<void> {
        await this.ready();
        const tab = [...this.__tabList.children].find((tab) => tab.id == newValue) as VlTabComponent & Element;
        if (tab && !tab.isActive) {
            tab.activate();
            if (this.__tabsToggle && this.__tabList.getAttribute('data-vl-show') === 'true') {
                // Als de tabsToggle aanwezig is en de tabList open is, klik op de tabsToggle om de tabList te sluiten.
                this.__tabsToggle.click();
            }
        }
    }

    _withinFunctionalHeaderChangedCallback(oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this.classList.add('vl-tabs--within-functional-header');
        } else {
            this.classList.remove('vl-tabs--within-functional-header');
        }
    }

    _hrefChangedCallback() {
        this.__updateHrefs();
    }

    get __href(): string {
        return this.getAttribute('data-vl-href') || window.location.pathname + window.location.search;
    }

    __updateHrefs() {
        [...this.__tabList.children].forEach((tab) => tab.setAttribute('data-vl-href', `${this.__href}#${tab.id}`));
    }

    __observeTabPanes(callback: MutationCallback): MutationObserver {
        const node = this as unknown as Node;
        const observer = new MutationObserver(callback);
        observer.observe(node, { childList: true });
        return observer;
    }

    __processTabPane(mutations: MutationRecord[]) {
        const tabPanesToAdd = mutations
            .flatMap((mutation: MutationRecord) => [...mutation.addedNodes])
            .filter((node) => node instanceof VlTabsPaneComponent);
        tabPanesToAdd.forEach((tabPane) => this.__addTabAndSection(tabPane as Element & VlTabsPaneComponent));

        const tabPanesToDelete = mutations
            .flatMap((mutation: MutationRecord) => [...mutation.removedNodes])
            .filter((node) => node instanceof VlTabsPaneComponent);
        tabPanesToDelete.forEach((tabPane) => this.__removeTabAndSection(tabPane as Element & VlTabsPaneComponent));

        this.__dress(true);
    }

    __addTabAndSection(tabPane: VlTabsPaneComponent & Element) {
        const index = this.__tabPanes.indexOf(tabPane);
        this._addTab({ tabPane, index });

        if (!this.hasAttribute('within-functional-header')) {
            this._addTabSection({ id: tabPane.getAttribute('data-vl-id') || '', index });
        }
    }

    __removeTabAndSection(tabPane: VlTabsPaneComponent) {
        this._removeTab(tabPane.getAttribute('data-vl-id'));

        if (!this.hasAttribute('within-functional-header')) {
            this._removeTabSection(tabPane.getAttribute('data-vl-id'));
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-tabs': VlTabsComponent;
    }
}
