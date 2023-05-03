export const addEventListener = () => {
    const tabs = document.querySelector('vl-tabs');
    tabs?.addEventListener('change', (event: CustomEvent) => setActiveTab(event?.detail?.activeTab));
};

export const setActiveTab = (activeTab: string) => {
    const tabs = document.querySelector('vl-tabs');
    tabs?.setAttribute('data-vl-active-tab', activeTab);
};
