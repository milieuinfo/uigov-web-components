import { VlMap } from '../../../vl-map';
import { VlMapLayer } from '../../layer/vl-map-layer';

/**
 * voegt een nieuwe map layer to aan de `vl-map`
 * @param layerSelector - geef de huidige selector mee voor de nieuwe layer die toegevoegd moet worden
 * @param vlMapSelector - geef de selector mee om het element te kunnen bepalen waarop de layer moet toegevoegd worden
 */
const addMapLayer = (layerSelector: string, vlMapSelector: string): void => {
    const newLayer = document.querySelector(layerSelector) as unknown as VlMapLayer & Element;
    const vlMap = document.querySelector(vlMapSelector) as unknown as VlMap;
    vlMap.appendChild(newLayer);
};

/**
 * verwijdert een bestaande map layer uit zijn `vl-map`
 * @param layerSelector - geef de selector mee om de layer te kunnen bepalen die verwijderd moet worden
 */
const removeMapLayer = (layerSelector: string, vlMapSelector: string): void => {
    const layerToRemove = document.querySelector(layerSelector) as unknown as VlMapLayer & Element;
    const vlMap = document.querySelector(vlMapSelector) as unknown as VlMap;
    vlMap.removeChild(layerToRemove);
};

export const dynamicLayerSwitcherImplementation = () => {
    const vlMapSelector = 'vl-map#map-dynamic-layers';

    const handleAddLayerForId = (id: string, event: Event) => {
        // voeg kaartlaag dynamisch toe
        addMapLayer(`vl-map-features-layer#${id}`, vlMapSelector);

        const addButton = <HTMLButtonElement>event.target;
        // enable remove button nadat laag is toegevoegd
        (<HTMLButtonElement>addButton.nextElementSibling).disabled = false;
        // add button verwijderen
        addButton.remove();
    };

    const handleRemoveLayerForId = (id: string, event: Event) => {
        // verwijder kaartlaag uit vl-map component & uit de OpenLayers Overlay
        removeMapLayer(`vl-map-features-layer#${id}`, vlMapSelector);

        // remove button verwijderen
        const removeButton = <HTMLButtonElement>event.target;
        removeButton.remove();
    };

    // exporteren functies die gebruikt worden in template
    return { handleAddLayerForId, handleRemoveLayerForId };
};

export default dynamicLayerSwitcherImplementation;
