import { VlMap } from '../../../vl-map';
import { VlMapLayer } from '../../layer/vl-map-layer';
import { VlMapLayerSwitcher } from '../vl-map-layer-switcher';

/**
 * voegt een nieuwe map layer to aan de `vl-map`
 * @param layerSelector - geef de huidige selector mee voor de nieuwe layer die toegevoegd moet worden
 * @param vlMapSelector - geef de selector mee om het element te kunnen bepalen waarop de layer moet toegevoegd worden
 */
const addMapLayer = (layerSelector: string, vlMapSelector: string): void => {
    const newLayer: VlMapLayer & HTMLElement = document.querySelector(layerSelector);
    const vlMap: VlMap & HTMLElement = document.querySelector(vlMapSelector);
    vlMap.appendChild(newLayer);
};

/**
 * verwijdert een bestaande map layer uit zijn `vl-map`
 * @param layerSelector - geef de selector mee om de layer te kunnen bepalen die verwijderd moet worden
 */
const removeMapLayer = (layerSelector: string, vlMapSelector: string): void => {
    const layerToRemove: VlMapLayer & HTMLElement = document.querySelector(layerSelector);
    const vlMap: VlMap & HTMLElement = document.querySelector(vlMapSelector);
    vlMap.removeChild(layerToRemove);
};

export const dynamicLayerSwitcherImplementation = () => {
    const vlMapSelector = 'vl-map#map-dynamic-layers';
    const vlMapSideSheetSelector = 'vl-map-side-sheet#dynamic-layer-switcher';

    let mapSideSheet;

    customElements.whenDefined('vl-map').then(() => {
        mapSideSheet = document.querySelector(vlMapSideSheetSelector);
    });

    const handleAddLayerForId = (id: string, event: Event) => {
        // voeg kaartlaag dynamisch toe
        addMapLayer(`vl-map-features-layer#${id}`, vlMapSelector);

        // layer switcher opnieuw renderen
        addRemoveLayerSwitcher();

        const addButton = <HTMLButtonElement>event.target;
        // enable remove button nadat laag is toegevoegd
        (<HTMLButtonElement>addButton.nextElementSibling).disabled = false;
        // add button verwijderen
        addButton.remove();
    };

    const handleRemoveLayerForId = (id: string, event: Event) => {
        // verwijder kaartlaag uit vl-map component & uit de OpenLayers Overlay
        removeMapLayer(`vl-map-features-layer#${id}`, vlMapSelector);

        // layer switcher opnieuw renderen
        addRemoveLayerSwitcher();
        // remove button verwijderen
        const removeButton = <HTMLButtonElement>event.target;
        removeButton.remove();
    };

    // rerender layer-switcher na het verwijderen of toevoegen van nieuwe layers
    const addRemoveLayerSwitcher = () => {
        const layerSwitcher = mapSideSheet.querySelector(`vl-map-layer-switcher`);
        mapSideSheet.removeChild(layerSwitcher);
        const newLayerSwitcher: VlMapLayerSwitcher = new VlMapLayerSwitcher();
        mapSideSheet.appendChild(newLayerSwitcher);
    };

    // exporteren functies die gebruikt worden in template
    return { handleAddLayerForId, handleRemoveLayerForId };
};

export default dynamicLayerSwitcherImplementation;
