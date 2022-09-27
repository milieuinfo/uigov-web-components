import { awaitUntil, BaseElementOfType, define } from '@domg-lib/common-utilities';
import { VlTabsPaneComponent } from './vl-tabs-pane.component';
import './vl-tab.component';
import './vl-tab-section.component';
import '@govflanders-v14/vl-ui-tabs/dist/js/tabs.js';
import styles from './style/vl-tabs.scss';

declare const vl: any;
declare const window: any;

export class VlTabsComponent extends BaseElementOfType(HTMLElement) {
    static get is() {
        return 'vl-tabs';
    }

    static get _observedAttributes() {
        return ['alt', 'responsive-label', 'active-tab', 'href'];
    }

    constructor() {
        super(`
    <style>
      ${styles}
    </style>
    <div id="tabs" data-vl-tabs data-vl-tabs-responsive-label="Navigatie">
      <div id="tabs-wrapper" class="vl-tabs__wrapper">
        <ul id="tab-list" class="vl-tabs" data-vl-tabs-list role="tablist"></ul>
        <button type="button" data-vl-tabs-toggle aria-expanded="false" class="vl-tabs__toggle" data-vl-close="false">
          <span id="data-vl-tabs-responsive-label">Navigatie</span>
        </button>
      </div>
    </div>`);
    }

    connectedCallback() {
        this._renderTabs();
        this._renderSections();
        this.__dress();
        this._observer = this.__observeTabPanes((mutations: any) => this.__processTabPane(mutations));
    }

    disconnectedCallback() {
        this._observer.disconnect();
    }

    get _dressed() {
        return this.hasAttribute(VlTabsComponent._dressedAttributeName);
    }

    static get _dressedAttributeName() {
        return 'data-vl-tabs-dressed';
    }

    async __dress(forced?: boolean) {
        if (!this._dressed || forced) {
            await customElements.whenDefined('vl-tab');
            await customElements.whenDefined('vl-tab-section');
            vl.tabs.dress(this.shadowRoot);
            this.setAttribute(VlTabsComponent._dressedAttributeName, '');
        }
    }

    /**
     * Wacht tot de tab initialisatie klaar is.
     *
     * @return {Promise}
     */
    async ready() {
        return awaitUntil(() => this._dressed);
    }

    get __tabs() {
        return this.shadowRoot.getElementById('tabs');
    }

    get __tabList() {
        return this.shadowRoot.getElementById('tab-list');
    }

    get __responsiveLabel() {
        return this.shadowRoot.getElementById('data-vl-tabs-responsive-label');
    }

    get __tabPanes() {
        return [...this.querySelectorAll(VlTabsPaneComponent.is)];
    }

    __getTabTemplate({ id, title }: any) {
        return this._template(`
      <li is="vl-tab" data-vl-href="${this.__href}#${id}" data-vl-id="${id}">
        <slot name="${id}-title-slot">${title}</slot>
      </li>
    `);
    }

    __getTabSectionTemplate({ id }: any) {
        return this._template(`
      <section id="${id}-pane" is="vl-tab-section">
        <slot name="${id}-slot"></slot>
      </section>
    `);
    }

    _addTab({ tabPane, index }: any) {
        const { id, title } = tabPane;
        const element = this.__getTabTemplate({ id, title });
        if (index && index >= 0) {
            this.__tabList.insertBefore(element, this.__tabList.children[index]);
        } else {
            this.__tabList.appendChild(element);
        }
    }

    _removeTab(id: string) {
        const element = this.__tabList.querySelector(`[data-vl-id="${id}"]`);
        if (element) {
            this.__tabList.removeChild(element);
        }
    }

    _addTabSection({ id, index }: any) {
        this.__tabPanes[index].setAttribute('slot', `${id}-slot`);
        const element = this.__getTabSectionTemplate({ id });
        if (index && index >= 0) {
            this.__tabs.insertBefore(element, this.__tabs.children[++index]);
        } else {
            this.__tabs.appendChild(element);
        }
    }

    _removeTabSection(id: string) {
        const element = this.__tabs.querySelector(`#${id}-pane`);
        if (element) {
            this.__tabs.removeChild(element);
        }
    }

    _renderTabs() {
        this.__tabList.innerHTML = '';
        this.__tabPanes.forEach((tabPane) => {
            this._addTab({ tabPane });
        });
    }

    _renderSections() {
        this.__tabPanes.forEach((tabPane, index) => this._addTabSection({ id: tabPane.id, index }));
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

    async _activeTabChangedCallback(oldValue: string, newValue: string) {
        await this.ready();
        const tab = [...this.__tabList.children].find((tab) => tab.id == newValue);
        if (tab && !tab.isActive) {
            tab.activate();
        }
    }

    _hrefChangedCallback(oldValue: string, newValue: string) {
        this.__updateHrefs();
    }

    get __href() {
        return this.getAttribute('data-vl-href') || window.location.pathname + window.location.search;
    }

    __updateHrefs() {
        [...this.__tabList.children].forEach((tab) => tab.setAttribute('data-vl-href', `${this.__href}#${tab.id}`));
    }

    __observeTabPanes(callback: MutationCallback) {
        const node = this as unknown as Node;
        const observer = new MutationObserver(callback);
        observer.observe(node, { childList: true });
        return observer;
    }

    __processTabPane(mutations: any) {
        const tabPanesToAdd = mutations
            .flatMap((mutation: any) => [...mutation.addedNodes])
            .filter((node: any) => node instanceof VlTabsPaneComponent);
        tabPanesToAdd.forEach((tabPane: any) => this.__addTabAndSection(tabPane));

        const tabPanesToDelete = mutations
            .flatMap((mutation: any) => [...mutation.removedNodes])
            .filter((node: any) => node instanceof VlTabsPaneComponent);
        tabPanesToDelete.forEach((tabPane: any) => this.__removeTabAndSection(tabPane));

        this.__dress(true);
    }

    __addTabAndSection(tabPane: any) {
        const index = this.__tabPanes.indexOf(tabPane);
        this._addTab({ tabPane, index });
        this._addTabSection({ id: tabPane.id, index });
    }

    __removeTabAndSection(tabPane: any) {
        this._removeTab(tabPane.id);
        this._removeTabSection(tabPane.id);
    }
}

awaitUntil(() => window.vl && window.vl.tabs).then(() => define(VlTabsComponent.is, VlTabsComponent));
