import { VlMap, VlMapFeaturesLayer, VlMapLayerSwitcher, VlMapSideSheet } from '@domg-wc/map';
import { runTestFor } from '../../../support/utils';

const mapLayerSwitcherSpecialised =
    'http://localhost:8080/iframe.html?args=&id=map-layer-switcher--layer-switcher-specialised-options&viewMode=story';
const mapLayerSwitcherDynamic =
    'http://localhost:8080/iframe.html?args=&id=map-layer-switcher--layer-switcher-dynamic&viewMode=story';

const shouldHaveVisibleLayerFor = (layerName: string): void => {
    runTestFor<VlMapFeaturesLayer>(`vl-map-features-layer[data-vl-name="${layerName}"]`, (component) => {
        expect(component.visible).to.be.true;
    });
};

const shouldHaveInvisibleLayerFor = (layerName: string): void => {
    runTestFor<VlMapFeaturesLayer>(`vl-map-features-layer[data-vl-name="${layerName}"]`, (component) => {
        expect(component.visible).to.be.false;
    });
};

const clickLayerSwitcherCheckboxOf = (layerName: string): void => {
    cy.get('vl-map')
        .find('vl-map-layer-switcher')
        .find(`vl-checkbox[data-vl-layer="${layerName}"]`)
        .shadow()
        .find('input')
        .click({ force: true });
};

const rerenderLayerSwitcher = (): void => {
    runTestFor<VlMapSideSheet>(`vl-map-side-sheet`, (mapSideSheetComponent) => {
        const mapSideSheet = mapSideSheetComponent as VlMapSideSheet & HTMLElement;
        runTestFor<VlMapLayerSwitcher>(`vl-map-layer-switcher`, (layerSwitcherComponent) => {
            const layerSwitcher = layerSwitcherComponent as VlMapLayerSwitcher & HTMLElement;
            mapSideSheet.removeChild(layerSwitcher);
            const newLayerSwitcher = '<vl-map-layer-switcher></vl-map-layer-switcher>';
            mapSideSheet.insertAdjacentHTML('beforeend', newLayerSwitcher);
        });
    });
};
const shouldHaveFeatureLayerCount = (count: number) => {
    runTestFor<VlMap>('vl-map#map-dynamic-layers', (map) => {
        expect(map.featuresLayers).to.be.have.length(count);
    });
};

// TODO ideally we want to simply test addMapLayer() from libs/map/src/lib/utils/layer-manager.utils.ts, this can be done once .scss of web-component-library can processed for cypress tests
const addLayer = (layerName) => {
    runTestFor<VlMap>('vl-map#map-dynamic-layers', (map) => {
        runTestFor<VlMapFeaturesLayer>(`vl-map-features-layer[data-vl-name="${layerName}"]`, (layer) => {
            map.appendChild(layer);
        });
    });
};

// TODO ideally we want to simply test removeLayer() from libs/map/src/lib/utils/layer-manager.utils.ts, this can be done once .scss of web-component-library can processed for cypress tests
const removeLayer = (layerName) => {
    runTestFor<VlMapFeaturesLayer>(`vl-map-features-layer[data-vl-name="${layerName}"]`, (component) => {
        const layer = component as VlMapFeaturesLayer & Element;
        layer.removeLayer();
    });
};

describe('vl-map-layer-switcher', () => {
    it('vl-map-layer-switcher specialised - when clicking the checkbox, linked to a layer, the related map layer should become visible', () => {
        cy.visit(`${mapLayerSwitcherSpecialised}`);
        const layerName = 'layer-1';
        shouldHaveVisibleLayerFor(layerName);
        clickLayerSwitcherCheckboxOf(layerName);
        shouldHaveInvisibleLayerFor(layerName);
        clickLayerSwitcherCheckboxOf(layerName);
        shouldHaveVisibleLayerFor(layerName);
    });
    it('vl-map-layer-switcher dynamic - ', () => {
        cy.visit(`${mapLayerSwitcherDynamic}`);

        const layerId = 'zwart';
        const layerName = `Kaartlaag ${layerId}`;

        shouldHaveFeatureLayerCount(0);

        addLayer(layerName);

        shouldHaveFeatureLayerCount(1);

        rerenderLayerSwitcher();

        shouldHaveVisibleLayerFor(layerName);
        clickLayerSwitcherCheckboxOf(layerName);
        shouldHaveInvisibleLayerFor(layerName);
        clickLayerSwitcherCheckboxOf(layerName);
        shouldHaveVisibleLayerFor(layerName);

        removeLayer(layerName);

        shouldHaveFeatureLayerCount(0);
    });
});
