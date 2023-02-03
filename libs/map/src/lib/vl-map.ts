import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { Zoom } from 'ol/control.js';
import OlFullScreenControl from 'ol/control/FullScreen';
import OlLayerGroup from 'ol/layer/Group';
import OlProjection from 'ol/proj/Projection';
import proj4 from 'proj4';
import { VlCustomMap } from './actions';
import { EVENT } from './vl-map.model';
import styles from './vl-map.scss';
import Control from "ol/control/Control";
import Collection from "ol/Collection";
import {Extent} from "ol/extent";

@webComponent('vl-map')
export class VlMap extends BaseElementOfType(HTMLElement) {

    constructor() {
        super(`
      <style>
       ${styles}
      </style>
      <div id='map'>
        <slot></slot>
      </div>
    `);

        this.__prepareReadyPromises();
    }

    /**
     * Returns a Promise that resolves when the map is ready for further use.
     *
     * @return {Promise<void>}
     */
    get ready() {
        return this.__ready;
    }

    __prepareReadyPromises() {
        this.__mapReady = new Promise((resolve) => (this.__mapReadyResolver = resolve));
        this.__overviewMapReady = new Promise((resolve) => (this.__overviewMapReadyResolver = resolve));
        this.__ready = Promise.all([this.__mapReady, this.__overviewMapReady]);
    }

    /**
     * Returns the OpenLayers map.
     *
     * @return {VlCustomMap}
     */
    get map(): VlCustomMap {
        return this._map;
    }

    /**
     * Returns the OpenLayers map resolution.
     *
     * @return {number}
     */
    get resolution(): number {
        return this.map.getView().getResolution();
    }

    /**
     * Returns the OpenLayers map layers that are not used as a base map layer.
     *
     * @return {Object[]}
     */
    get nonBaseLayers() {
        return [...this.querySelectorAll(':scope > [data-vl-is-layer]')];
    }

    get disableEscapeKey():boolean {
        return this.getAttribute('disable-escape-key') != undefined;
    }

    get disableRotation():boolean {
        return this.getAttribute('disable-rotation') != undefined;
    }

    get disableMouseWheelZoom():boolean {
        return this.getAttribute('disable-mouse-wheel-zoom') != undefined;
    }

    get disableKeyboard():boolean {
        return this.getAttribute('disable-keyboard') != undefined;
    }

    get actions() {
        return this.map && this.map.actions;
    }

    get controls() {
        return this.map && this.map.getControls().getArray();
    }

    get activeAction() {
        return this.map && this.map.getCurrentActiveAction();
    }

    get defaultAction() {
        return this.map && this.map.getDefaultActiveAction();
    }

    get _mapElement() {
        return this._shadow.querySelector('#map');
    }

    get _controls(): Collection<Control> {
        const collection = new Collection<Control>();
        if (this.dataset.vlAllowFullscreen != undefined) {
            collection.push(new OlFullScreenControl());
        }
        return collection;
    }

    get _projection(): OlProjection {
        return new OlProjection({
            code: 'EPSG:31370',
            extent: this._extent,
            getPointResolution: (r) => r,
        });
    }

    get _extent() {
        return [9928, 66928, 272072, 329072];
    }

    _getCurrentBoundingBox(): Extent {
        return this.map.getView().calculateExtent(this.map.getSize());
    }
    connectedCallback() {
        this.__initializeCoordinateSystem();

        this._map = new VlCustomMap({
            disableEscapeKey: this.disableEscapeKey,
            disableRotation: this.disableRotation,
            disableMouseWheelZoom: this.disableMouseWheelZoom,
            disableKeyboard: this.disableKeyboard,
            customLayers: {
                baseLayerGroup: this.__createLayerGroup('Basis lagen', []),
                overviewMapLayers: [],
                overlayGroup: this.__createLayerGroup('Lagen', []),
            },
            projection: this._projection,
            target: this._mapElement,
            controls: this._controls,
            defaultZoom: false,
        });

        this.__updateMapSizeOnLoad();
        this.__updateOverviewMapSizeOnLoad();

        this.map.addControl(this.__createZoomControl());
    }

    __createZoomControl(): Zoom {
        const zoomOptions: { zoomInTipLabel?; zoomOutTipLabel? } = {};
        if (this.zoomInTipLabel) {
            zoomOptions.zoomInTipLabel = this.zoomInTipLabel;
        }
        if (this.zoomOutTipLabel) {
            zoomOptions.zoomOutTipLabel = this.zoomOutTipLabel;
        }
        return new Zoom(zoomOptions);
    }

    get zoomInTipLabel() {
        return this.getAttribute('data-vl-zoomInTooltip');
    }

    get zoomOutTipLabel() {
        return this.getAttribute('data-vl-zoomOutTooltip');
    }

    // wordt in code aangesproken via bv: this.mapElement.addLayer(this._layer);
    addLayer(layer) {
        this.map.addOverlayLayer(layer);
    }

    addAction(action) {
        this.map.addAction(action);
    }

    addControl(control) {
        this.map.addControl(control);
    }

    removeAction(action) {
        this.map.removeAction(action);
    }

    _dispatchLayerVisibleChangedEvent(layer) {
        this.dispatchEvent(
            new CustomEvent(EVENT.LAYER_VISIBLE_CHANGED, {
                detail: { layer, visible: layer.visible },
            })
        );
    }

    handleLayerVisibilityChange(layerElement) {
        this._dispatchLayerVisibleChangedEvent(layerElement);

        const actions = this.map.getLayerActions(layerElement.layer);

        if (actions) {
            actions.forEach((action) => {
                if (layerElement.visible) {
                    // Activate default active action on layer if applicable
                    if (!this.activeAction && action === this.defaultAction) {
                        action.element.activate();
                    }
                } else if (action.element._active) {
                    // Deactivate active action on layer
                    action.element.deactivate();
                }

                // Handle visibility changes specific to the action if these are defined
                if (action.handleLayerVisibilityChange) {
                    action.handleLayerVisibilityChange();
                }

                // Enable or disable the control of the action
                const actionControl = action.getControl();
                if (actionControl) {
                    actionControl.get('element').setDisabled(!layerElement.visible);
                }
            });
        }
    }

    _dispatchActiveActionChangedEvent(previousActiveAction, currentActiveAction) {
        this.dispatchEvent(
            new CustomEvent(EVENT.ACTIVE_ACTION_CHANGED, {
                detail: {
                    previous: previousActiveAction ? previousActiveAction.element : previousActiveAction,
                    current: currentActiveAction ? currentActiveAction.element : currentActiveAction,
                },
            })
        );
    }

    changeActiveAction(newActiveAction) {
        const previousActiveAction = this.activeAction;
        const currentActiveAction = newActiveAction || undefined;

        if (previousActiveAction) {
            this.map.deactivateCurrentAction();

            previousActiveAction.element._active = false;
            if (previousActiveAction.getControl()) {
                previousActiveAction.getControl().get('element').setActive(false);
            }
        }

        if (currentActiveAction) {
            this.map.activateAction(currentActiveAction);

            currentActiveAction.element._active = true;
            if (currentActiveAction.getControl()) {
                currentActiveAction.getControl().get('element').setActive(true);
            }
        }

        if (currentActiveAction || previousActiveAction) {
            this._dispatchActiveActionChangedEvent(previousActiveAction, currentActiveAction);
        }
    }

    activateAction(action) {
        if (action) {
            action.element.activate();
        }
    }

    deactivateAction(action) {
        if (action) {
            action.element.deactivate();
        }
    }

    /**
     * Zooms on the map to the given geometry or bounding box.
     *
     * @param {(ol/geom/Geometry|Number[])} geometryOrBoundingbox
     * @param {Number} max
     */
    zoomTo(geometryOrBoundingbox, max) {
        if (Array.isArray(geometryOrBoundingbox)) {
            this.map.zoomToExtent(geometryOrBoundingbox, max);
        } else if (geometryOrBoundingbox instanceof Object) {
            this.map.zoomToGeometry(geometryOrBoundingbox, max);
        }
    }

    /**
     * Register map event.
     *
     * @param {*} event
     * @param {*} callback
     */
    on(event, callback) {
        this.map.on(event, callback);
    }

    /**
     * Render the map again.
     */
    rerender() {
        this.map.render();
    }

    __updateMapSize() {
        this.style.display = 'block';
        if (this.map) {
            this.map.updateSize();
        }
        this.__mapReadyResolver();
    }

    __updateOverviewMapSize() {
        if (this.map.overviewMapControl) {
            this.map.overviewMapControl.getOverviewMap().updateSize();
        }
        this.__overviewMapReadyResolver();
    }

    __updateOverviewMapSizeOnLoad() {
        VlMap.__callOnceOnLoad(this.__updateOverviewMapSize.bind(this));
    }

    __updateMapSizeOnLoad() {
        VlMap.__callOnceOnLoad(this.__updateMapSize.bind(this));
    }

    __createLayerGroup(title, layers): OlLayerGroup {
        // title is not a valid option property, also can not find it in html DOM when setting it
        // ref.: https://openlayers.org/en/v6.15.1/apidoc/module-ol_layer_Group-LayerGroup.html
        return new OlLayerGroup(<any>{
            title,
            layers,
        });
    }

    __initializeCoordinateSystem() {
        proj4.defs(
            'EPSG:31370',
            '+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs'
        );
    }

    static __callOnceOnLoad(callback) {
        if (document.readyState === 'complete') {
            callback();
        } else {
            window.addEventListener('load', callback, { once: true });
        }
    }

    get featuresLayers() {
        return Array.from(this.querySelectorAll('vl-map-features-layer'));
    }

    get wfsLayers() {
        return Array.from(this.querySelectorAll('vl-map-wfs-layer'));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map': VlMap;
    }
}
