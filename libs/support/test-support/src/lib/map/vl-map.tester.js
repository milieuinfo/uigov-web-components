import { By } from '../util/tester.setup';
import { VlElementTester } from '../base/vl-element.tester';
import { VlMapBaseLayerTester } from './components/baselayer/vl-map-base-layer.tester';
import { VlMapFeaturesLayerTester } from './components/layer/vector-layer/vl-map-features-layer.tester';
import { VlMapLayersTester } from './components/layer/vl-map-layers.tester';
import { VlMapWfsLayerTester } from './components/layer/vector-layer/vl-map-wfs-layer.tester';
import { VlMapImageWmsLayerTester } from './components/layer/wms-layer/vl-map-image-wms-layer.tester';
import { VlMapTiledWmsLayerTester } from './components/layer/wms-layer/vl-map-tiled-wms-layer.tester';
import { VlMapWmtsLayerTester } from './components/layer/wmts-layer/vl-map-wmts-layer.tester';
import { VlMapOverviewMapTester } from './components/overview-map/vl-map-overview-map.tester';
import { VlMapSideSheetTester } from './components/side-sheet/vl-map-side-sheet.tester';
import { VlMapLayerSwitcherTester } from './components/layer-switcher/vl-map-layer-switcher.tester';
import { VlMapSearchTester } from './components/search/vl-map-search.tester';

export class VlMapTester extends VlElementTester {
    async getBaseLayers() {
        const childElements = await this.findElements(By.css(':scope > *'));
        const tagNames = await Promise.all(childElements.map((element) => element.getTagName()));
        const baseLayerElements = childElements.filter((element, index) =>
            tagNames[index].startsWith('vl-map-baselayer')
        );
        return Promise.all(baseLayerElements.map((element) => new VlMapBaseLayerTester(this.driver, element)));
    }

    async getLayers() {
        return VlMapLayersTester.getLayers(this);
    }

    async getFeaturesLayers() {
        return VlMapLayersTester.getLayersOfType(this, VlMapFeaturesLayerTester);
    }

    async getWfsLayers() {
        return VlMapLayersTester.getLayersOfType(this, VlMapWfsLayerTester);
    }

    async getTiledWmsLayers() {
        return VlMapLayersTester.getLayersOfType(this, VlMapTiledWmsLayerTester);
    }

    async getImageWmsLayers() {
        return VlMapLayersTester.getLayersOfType(this, VlMapImageWmsLayerTester);
    }

    async getWmtsLayers() {
        return VlMapLayersTester.getLayersOfType(this, VlMapWmtsLayerTester);
    }

    async isEscapeKeyDisabled() {
        return this.hasAttribute('disable-escape-key');
    }

    async isRotationDisabled() {
        return this.hasAttribute('disable-rotation');
    }

    async isMouseWheelZoomDisabled() {
        return this.hasAttribute('disable-mouse-wheel-zoom');
    }

    async isFullscreenAllowed() {
        return this.hasAttribute('allow-fullscreen');
    }

    async getOverviewMap() {
        const map = await this._getMap();
        await this.driver.wait(async () => {
            const overviewMaps = await map.findElements(By.css('.ol-overviewmap'));
            return overviewMaps.length > 0;
        });
        const overviewMap = await map.findElement(By.css('.ol-overviewmap'));
        return new VlMapOverviewMapTester(this.driver, overviewMap);
    }

    async getActiveBaseLayerTitle() {
        return this.driver.executeScript(
            `return arguments[0].map.baseLayers.find((layer) => layer.getVisible()).get('title')`,
            this
        );
    }

    async getSideSheet() {
        const element = await this.findElement(By.css('vl-map-side-sheet'));
        return new VlMapSideSheetTester(this.driver, element);
    }

    async getLayerSwitcher() {
        const element = await this.findElement(By.css('vl-map-layer-switcher'));
        return new VlMapLayerSwitcherTester(this.driver, element);
    }

    async hasSearch() {
        const search = await this._getSearchElement();
        return search != null;
    }

    async getSearch() {
        const search = await this._getSearchElement();
        return new VlMapSearchTester(this.driver, search);
    }

    async zoomIn() {
        const map = await this._getMap();
        const zoomOutButton = await map.findElement(By.css('.ol-zoom-in'));
        await zoomOutButton.click();
    }

    async zoomOut() {
        const map = await this._getMap();
        const zoomOutButton = await map.findElement(By.css('.ol-zoom-out'));
        await zoomOutButton.click();
    }

    async getZoom() {
        return this.driver.executeScript(`return arguments[0].map.getView().getZoom()`, this);
    }

    async hasZoom(zoom) {
        return this.driver
            .wait(async () => {
                const currentZoom = await this.getZoom();
                return currentZoom >= zoom && currentZoom <= zoom + 1;
            }, 2000)
            .then(() => true)
            .catch(() => false);
    }

    async clickOnCoordinates(coordinates) {
        const pixel = await this.getPixelFromCoordinate(coordinates);
        await this.driver.actions().move(pixel).click().perform();
    }

    /**
     * Beweeg een punt o.b.v zijn coördinaat naar een andere plaats op de kaart.
     *
     * @param {Number[]} from - coördinaat om vanuit te bewegen
     * @param {Number[]} to - coördinaat om naar te bewegen
     * @return {Promise<void>}
     */
    async movePointByCoordinates(from = [0, 0], to = [0, 0]) {
        const fromPixel = await this.getPixelFromCoordinate(from);
        const toPixel = await this.getPixelFromCoordinate(to);
        await this.clickOnCoordinates(from);
        const actions = await this.driver.actions();
        await actions.move(fromPixel).press().perform();
        await actions.move(toPixel).release().perform();
        await actions.click().perform();
    }

    async getScale() {
        const map = await this._getMap();
        const scale = await map.findElement(By.css('.ol-scale-line-inner'));
        return scale.getText();
    }

    async toggleFullscreen() {
        const button = await this._getToggleFullscreenButton();
        await button.click();
    }

    async isFullScreen() {
        return this.driver.executeScript(`return document.fullscreen`);
    }

    async isReady() {
        await this.driver.wait(async () => {
            try {
                await this.driver.wait(this.driver.executeScript('return arguments[0].ready', this), 1000);
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        });
        return true;
    }

    async dragRectangle(topLeftCoordinate, bottomRightCoordinate) {
        const pixelStart = await this.getPixelFromCoordinate(topLeftCoordinate);
        const pixelEnd = await this.getPixelFromCoordinate(bottomRightCoordinate);
        return this.driver.actions().move(pixelStart).press().move(pixelEnd).release().perform();
    }

    async _getMap() {
        return this.shadowRoot;
    }

    async _getSearchElement() {
        return this.shadowRoot.findElement(By.css('vl-map-search'));
    }

    async _getToggleFullscreenButton() {
        return this.shadowRoot.findElement(By.css('.ol-full-screen'));
    }

    /**
     * Geef de pixels voor een coördinaat op de kaart.
     * Relatief t.o.v. de hoogte en breedte van diezelfde kaart.
     *
     * @param {Number[]} coordinates - coördinaat op de kaart
     * @return {Promise<{x: number, y: number}>}
     * @private
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#getPixelFromCoordinate}
     * @see {@link https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html#getRect}
     */
    async getPixelFromCoordinate(coordinates = [0, 0]) {
        const rect = await this.getRect();
        const pixel = await this.driver.executeScript(
            `return arguments[0].map.getPixelFromCoordinate(${JSON.stringify(coordinates)})`,
            this
        );
        return {
            origin: this,
            x: Math.round(pixel[0] - rect.width / 2),
            y: Math.round(pixel[1] - rect.height / 2),
            duration: 1000,
        };
    }
}
