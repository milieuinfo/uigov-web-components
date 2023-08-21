import { VlSideSheet } from '@domg-wc/components';
import { VlButtonElement } from '@domg-wc/elements';

export const sideSheetToggleImplementation = () => {
    let sideSheet: VlSideSheet;
    let listenerButton: VlButtonElement;
    customElements.whenDefined('vl-side-sheet').then(() => {
        sideSheet = document.querySelector('#side-sheet-toggle') as unknown as VlSideSheet;
        listenerButton = document.querySelector(
            '#vl-side-sheet-open-button-with-close-listener'
        ) as unknown as VlButtonElement;
    });
    const toggleSideSheet = () => sideSheet?.toggle();

    const openSideSheet = () => sideSheet?.open();
    const closeSideSheet = () => sideSheet?.close();

    return { toggleSideSheet, openSideSheet, closeSideSheet };
};

export default sideSheetToggleImplementation;
