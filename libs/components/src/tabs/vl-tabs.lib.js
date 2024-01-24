// Er zijn wijzigingen in deze file toegepast tov de originele file van Digitaal Vlaanderen v14.0.2.
// Er staat een comment bij alle wijzigingen beginnend met het ticket nummer waar de wijziging voor doorgevoerd is (UIG-...).
// Verder is de dressAll() methode en alle calls hiernaar verwijderd aangezien deze methode niet nodig is.

// Private Variables
const tabActiveClass = `${vl.ns}tab--active`,
    tabClass = `${vl.ns}tab`,
    dataTabList = `[data-${vl.ns}tabs-list]`,
    dataTab = `[data-${vl.ns}tab]`,
    dataTabPane = `[data-${vl.ns}tab-pane]`,
    tabToggleAtt = `data-${vl.ns}tabs-toggle`,
    tabShowAtt = `data-${vl.ns}show`,
    tabCloseAtt = `data-${vl.ns}close`,
    tabsAtt = `data-${vl.ns}tabs`;

class Tabs {
    constructor() {
        this.currentTabIndexForCurrentTabsContainer = -1;
    }

    resetTabIndexesForTabs(tabs) {
        vl.util.each(tabs, (tab) => {
            tab.setAttribute('tabindex', '-1');
            tab.setAttribute('aria-selected', 'false');
            if (typeof tab.closest === 'function') {
                // check for IE
                vl.util.removeClass(tab.closest(`.${tabClass}`), tabActiveClass);
            }
        });
    }

    resetTabPanes(tabPanes) {
        vl.util.each(tabPanes, (pane) => {
            pane.setAttribute('hidden', 'hidden');
            pane.setAttribute(`${tabShowAtt}`, 'false');
        });
    }

    showTabPaneForTab(tab, tabPane) {
        // hightlight tab
        tab.setAttribute('tabindex', '0');
        if (typeof tab.closest === 'function') {
            // check for IE
            vl.util.addClass(tab.closest(`.${tabClass}`), tabActiveClass);
        }
        tab.setAttribute('aria-selected', true);

        // UIG-2483: Nullcheck toegevoegd voor tabPane.
        tabPane?.setAttribute('hidden', '');
        tabPane?.setAttribute(`${tabShowAtt}`, 'true');
    }

    updateResponsiveBtnLabelForTabsContainerWithTab(tabsContainer, tab) {
        const toggleBtnEl = tabsContainer.querySelector(`[${tabToggleAtt}] span`);

        toggleBtnEl.innerHTML = tab.innerHTML;
    }

    clickEvent(event) {
        if (event.target && typeof event.target.closest === 'function') {
            // check for IE
            const tabsContainer = event.target.closest(`[${tabsAtt}]`);

            const toggleBtnEl = tabsContainer.querySelector(`[${tabToggleAtt}]`);
            const tabsList = tabsContainer.querySelector(`${dataTabList}`);
            const isListOpen = tabsList.getAttribute(tabShowAtt) === 'true';

            tabsList.setAttribute(tabShowAtt, isListOpen ? 'false' : 'true');
            tabsList.setAttribute('aria-hidden', isListOpen ? 'true' : 'false');
            toggleBtnEl.setAttribute('aria-expanded', isListOpen ? 'true' : 'false');
            toggleBtnEl.setAttribute(tabCloseAtt, isListOpen ? 'false' : 'true');
        }
    }

    setupResponsiveToggleBtnForTabsContainer(tabsContainer) {
        const toggleBtnEl = tabsContainer.querySelector(`[${tabToggleAtt}]`);

        // UIG-2210: click event listener voor toggle button altijd enabled. Mobile view van de tabs hangt niet meer
        // af van de screen width maar van de breedte van de tabs component.
        // setup responsive toggle btn
        toggleBtnEl.addEventListener('click', this.clickEvent, false);
    }

    dress(tabsContainer) {
        this.setupResponsiveToggleBtnForTabsContainer(tabsContainer);

        const tabs = tabsContainer.querySelectorAll(`${dataTab}`);
        const tabPanes = tabsContainer.querySelectorAll(`${dataTabPane}`);
        const currentTabHash = window.location.hash;
        const activeTab = tabsContainer.querySelector(`[href$='${currentTabHash}']`);

        // UIG-2483: Check voor tabPanes.length > 0 uitgezet.
        // Bij het gebruik binnen de functional-header zijn er geen tabPanes, maar de logica hieronder moet wel uitgevoerd worden.
        // Indien dit niet uitgevoerd wordt zijn er problemen in de mobile view en problemen met accessibility.
        vl.util.each(tabs, (tab, index) => {
            tab.addEventListener('focus', () => {
                this.currentTabIndexForCurrentTabsContainer = index;
                tab.click();
            });
            tab.addEventListener('click', () => {
                // reset tabs & panes
                this.resetTabIndexesForTabs(tabs);
                this.resetTabPanes(tabPanes);

                // set tab
                this.showTabPaneForTab(tab, tabPanes[index]);

                // set responsive button label
                this.updateResponsiveBtnLabelForTabsContainerWithTab(tabsContainer, tab);

                const toggleBtnEl = tabsContainer.querySelector(`[${tabToggleAtt}]`);

                toggleBtnEl.click();
            });
        });

        if (activeTab) {
            activeTab.click();
        }

        // Detect arrows (<-, ->) & spacebar usage on tabContainer
        tabsContainer.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                // left arrow <-
                case 37: {
                    let i = this.currentTabIndexForCurrentTabsContainer - 1;

                    if (i < 0) {
                        i = tabs.length - 1;
                    }
                    const prevTabEl = tabs[i];

                    if (prevTabEl) {
                        prevTabEl.focus();
                    }
                    break;
                }
                // right arrow ->
                case 39: {
                    let i = this.currentTabIndexForCurrentTabsContainer + 1;

                    if (i >= tabs.length) {
                        i = 0;
                    }
                    const nextTabEl = tabs[i];

                    if (nextTabEl) {
                        nextTabEl.focus();
                    }
                    break;
                }
                default:
                    break;
            }
        });
        // UIG-2210: click event listener voor toggle button altijd enabled. Mobile view van de tabs hangt niet meer af
        // van de screen width maar van de breedte van de tabs component.
        this.setupResponsiveToggleBtnForTabsContainer(tabsContainer);
    }
}

if (!('tabs' in vl)) {
    vl.tabs = new Tabs();
}

export default Tabs;
