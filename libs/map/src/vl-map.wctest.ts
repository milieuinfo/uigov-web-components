import { assert, fixture, html } from '@open-wc/testing';

import sinon from 'sinon';
import proj4 from 'proj4';
import { OpenLayersUtil } from './utils/ol-util.js';
import OlLayerGroup from 'ol/layer/Group';
import OlFullScreenControl from 'ol/control/FullScreen';
import { VlSelectAction } from './actions/select/select-action';
import { VlMapMeasureControl } from './components/controls/measure-control/vl-map-measure-control';
import './vl-map';
import './components/controls/vl-map-action-controls';
import './components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.js';
import './components/action/draw-action/measure-action/vl-map-measure-action';
import './components/action/layer-action/select-action/vl-map-select-action';

const mapFixture = async () => fixture(html`<vl-map></vl-map>`);
const mapFullscreenFixture = async () => fixture(html`<vl-map data-vl-allow-fullscreen></vl-map>`);
const mapWithActionsFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-select-action data-vl-default-active></vl-map-select-action>
                <vl-map-measure-action></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `);
const mapWithActionsAndMultipleLayersFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-select-action data-vl-default-active></vl-map-select-action>
            </vl-map-features-layer>
            <vl-map-features-layer>
                <vl-map-measure-action></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `);
const mapWithActionsAndControlFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer>
                <vl-map-select-action></vl-map-select-action>
                <vl-map-measure-action></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

describe('vl-map', async () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.reset();
    });

    it('the Lambert 31370 projection is correctly defined', async () => {
        sandbox.spy(proj4, 'defs');
        await mapFixture();
        assert(
            proj4.defs.calledWith(
                'EPSG:31370',
                '+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs'
            )
        );
    }).timeout(3000);

    it('the extent contains Flanders', async () => {
        const mapElement: any = await mapFixture();
        const extent = mapElement._extent;

        assert.lengthOf(extent, 4);
        assert.equal(extent[0], 9928);
        assert.equal(extent[1], 66928);
        assert.equal(extent[2], 272072);
        assert.equal(extent[3], 329072);

        assert.deepEqual(mapElement._map.getView().getCenter(), [140860.69299028325, 190532.7165957574]);
    });

    it('can request the map actions', async () => {
        const mapElement: any = await mapWithActionsAndControlFixture();
        await mapElement.ready;

        assert.isTrue(!!mapElement.actions);
        assert.lengthOf(mapElement.actions, 2);
    });

    it('can request the map controls', async () => {
        const mapElement: any = await mapWithActionsAndControlFixture();
        await mapElement.ready;

        assert.isTrue(!!mapElement.controls);
        assert.lengthOf(mapElement.controls, 4);
    });

    it('can request the active action', async () => {
        const mapElement: any = await mapWithActionsFixture();
        await mapElement.ready;
        await sleep(350); // Wait for default action to be activated

        assert.isTrue(!!mapElement.activeAction);
        assert.isTrue(mapElement.activeAction === mapElement.actions[0]);

        mapElement.activateAction(mapElement.actions[1]);
        await sleep(350);

        assert.isTrue(!!mapElement.activeAction);
        assert.isTrue(mapElement.activeAction === mapElement.actions[1]);
    });

    it('can request the default active action', async () => {
        const mapElement: any = await mapWithActionsFixture();
        await mapElement.ready;

        assert.isTrue(!!mapElement.defaultAction);
        assert.isTrue(mapElement.defaultAction === mapElement.actions[0]);
    });

    it('can create a layer group', async () => {
        const mapElement: any = await mapFixture();

        const title = 'title';
        const layer1 = OpenLayersUtil.createDummyLayer('layer 1');
        const layer2 = OpenLayersUtil.createDummyLayer('layer 2');
        const layers = [layer1, layer2];
        const layerGroup = mapElement.__createLayerGroup(title, layers);
        const properties = layerGroup.getProperties();
        const layerGroupLayers = layerGroup.getLayers().getArray();

        assert.isTrue(layerGroup instanceof OlLayerGroup);
        assert.equal(properties.title, title);
        assert.deepEqual(layerGroupLayers, layers);
    });

    it('an action can be added to the map', async () => {
        const mapElement: any = await mapFixture();
        const { map } = mapElement;

        const stub = sinon.stub(map, 'getDefaultActiveAction').callsFake(() => undefined);

        const spy = sinon.spy(map, 'addAction');

        const action = new VlSelectAction();

        mapElement.addAction(action);

        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, action);

        stub.reset();
    });

    it('an action can be removed from the map', async () => {
        const mapElement: any = await mapWithActionsAndControlFixture();
        await mapElement.ready;

        const { map } = mapElement;

        const spy = sinon.spy(map, 'removeAction');

        const action = mapElement.actions[0];

        mapElement.removeAction(action);
        await sleep(500);

        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, action);
    });

    it('if the action to be removed is the current action, the default is activated', async () => {
        const mapElement: any = await mapWithActionsFixture();
        await mapElement.ready;
        await sleep(350);

        mapElement.activateAction(mapElement.actions[1]);
        await sleep(350);

        assert.isTrue(mapElement.activeAction === mapElement.actions[1]);

        mapElement.removeAction(mapElement.actions[1]);
        await sleep(350);

        assert.isTrue(mapElement.defaultAction === mapElement.actions[0]);
        assert.isTrue(mapElement.activeAction === mapElement.actions[0]);
    });

    it('if the action to be removed is the current action and the default active action, the action is deactivated and no other action gets activated', async () => {
        const mapElement: any = await mapWithActionsFixture();
        await mapElement.ready;
        await sleep(350);

        mapElement.activateAction(mapElement.actions[0]);
        await sleep(350);

        mapElement.removeAction(mapElement.actions[0]);
        await sleep(350);

        assert.isTrue(mapElement.activeAction === undefined);
    });

    it('a control can be added to the map', async () => {
        const mapElement: any = await mapFixture();
        const { map } = mapElement;

        const stub = sinon.stub(map, 'addControl');

        const control = new VlMapMeasureControl();

        mapElement.addControl(control);

        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, control);

        stub.reset();
    });

    it('when an action is activated, the previous active action gets deactivated', async () => {
        const mapElement: any = await mapWithActionsFixture();
        await mapElement.ready;
        await sleep(350); // Wait for default action to be activated
        const { map } = mapElement;

        const spy = sandbox.spy(map, 'deactivateCurrentAction');

        mapElement.activateAction(mapElement.actions[1]);
        await sleep(350);

        sinon.assert.calledOnce(spy);
    });

    it("when an action is activated, its active state and its control active state will be set to true, and the previous active action's active state and its control active state will be set to false", async () => {
        const mapElement: any = await mapWithActionsAndControlFixture();
        await mapElement.ready;

        const controlAction2ToggleButton = mapElement.actions[1].getControl().element;

        mapElement.activateAction(mapElement.actions[1]);
        await sleep(350);

        assert.isTrue(mapElement.actions[1].element._active);
        assert.isFalse(mapElement.actions[0].element._active);
        assert.isTrue(controlAction2ToggleButton.active);

        mapElement.activateAction(mapElement.actions[0]);
        await sleep(350);

        assert.isFalse(mapElement.actions[1].element._active);
        assert.isTrue(mapElement.actions[0].element._active);
        assert.isFalse(controlAction2ToggleButton.active);
    });

    it('an action can only be activated when its layer is visible', async () => {
        const mapElement: any = await mapWithActionsAndControlFixture();
        await mapElement.ready;

        const { map } = mapElement;

        const spy = sandbox.spy(map, 'activateAction');
        const action = mapElement.actions[1];

        action.layer.setVisible(false);
        mapElement.activateAction(action);
        await sleep(350);

        sinon.assert.notCalled(spy);

        action.layer.setVisible(true);
        mapElement.activateAction(action);
        await sleep(350);

        sinon.assert.calledOnce(spy);
    });

    it('when the current action is deactivated, the default action will be activated', async () => {
        const mapElement: any = await mapWithActionsFixture();
        await mapElement.ready;
        await sleep(350); // Wait for default action to be activated

        assert.isTrue(mapElement.actions[0] === mapElement.defaultAction);

        mapElement.activateAction(mapElement.actions[1]);
        await sleep(350);

        assert.isTrue(mapElement.activeAction === mapElement.actions[1]);
        assert.isFalse(mapElement.activeAction === mapElement.defaultAction);

        mapElement.deactivateAction(mapElement.actions[1]);
        await sleep(350);

        assert.isTrue(mapElement.activeAction === mapElement.actions[0]);
        assert.isTrue(mapElement.activeAction === mapElement.defaultAction);
    });

    it("an action can only be deactivated when it's active", async () => {
        const mapElement: any = await mapWithActionsAndControlFixture();
        await mapElement.ready;

        const { map } = mapElement;

        const changeActiveActionSpy = sandbox.spy(mapElement, 'changeActiveAction');
        const deactivateCurrentActionSpy = sandbox.spy(map, 'deactivateCurrentAction');

        mapElement.deactivateAction(mapElement.actions[1]);
        await sleep(350);

        sinon.assert.notCalled(changeActiveActionSpy);
        sinon.assert.notCalled(deactivateCurrentActionSpy);

        mapElement.activateAction(mapElement.actions[1]);
        await sleep(350);

        sinon.assert.calledOnce(changeActiveActionSpy);

        mapElement.deactivateAction(mapElement.actions[1]);
        await sleep(350);

        sinon.assert.calledTwice(changeActiveActionSpy);
        sinon.assert.calledOnce(deactivateCurrentActionSpy);
    });

    it('an active action on a layer will be deactivated when that layer is set to invisible', async () => {
        const mapElement: any = await mapWithActionsAndControlFixture();
        await mapElement.ready;

        const { map } = mapElement;

        const action = mapElement.actions[1];

        mapElement.activateAction(action);
        await sleep(350);

        assert.isTrue(mapElement.activeAction === action);

        const deactivateCurrentActionSpy = sandbox.spy(map, 'deactivateCurrentAction');

        const layer = mapElement.nonBaseLayers.find((nonBaseLayer) => nonBaseLayer._layer === action.layer);
        layer.visible = false;

        sinon.assert.calledOnce(deactivateCurrentActionSpy);
        assert.isFalse(mapElement.activeAction === action);
    });

    it('an action control that is linked to an action on a layer will be disabled when that layer is set to invisible and will de deactivated when the action was active', async () => {
        const mapElement: any = await mapWithActionsAndControlFixture();
        await mapElement.ready;

        const action = mapElement.actions[1];
        const control = action.getControl().get('element');

        mapElement.activateAction(action);
        await sleep(350);

        const setDisabledSpy = sandbox.spy(control, 'setDisabled');
        const setActiveSpy = sandbox.spy(control, 'setActive');

        const layer = mapElement.nonBaseLayers.find((nonBaseLayer) => nonBaseLayer._layer === action.layer);
        layer.visible = false;

        sinon.assert.calledOnce(setDisabledSpy);
        sinon.assert.calledWith(setDisabledSpy, true);

        sinon.assert.calledOnce(setActiveSpy);
        sinon.assert.calledWith(setActiveSpy, false);
    });

    it('a default active action on a layer will be activated when the layer is set visible and there is no other action active', async () => {
        const mapElement: any = await mapWithActionsAndMultipleLayersFixture();
        await mapElement.ready;
        await sleep(350); // Wait for default action to be activated

        const { map } = mapElement;

        const defaultActiveActionLayer1 = mapElement.actions[0];
        const actionLayer2 = mapElement.actions[1];

        assert.isTrue(!!mapElement.activeAction);
        assert.isTrue(mapElement.activeAction === defaultActiveActionLayer1);
        assert.isTrue(mapElement.defaultAction === defaultActiveActionLayer1);

        const layer1 = mapElement.nonBaseLayers.find(
            (nonBaseLayer) => nonBaseLayer._layer === defaultActiveActionLayer1.layer
        );

        const deactivateCurrentActionSpy = sandbox.spy(map, 'deactivateCurrentAction');

        layer1.visible = false;
        await sleep(350);

        sinon.assert.calledOnce(deactivateCurrentActionSpy);
        assert.isFalse(!!mapElement.activeAction);

        layer1.visible = true;
        await sleep(350);

        assert.isTrue(!!mapElement.activeAction);
        assert.isTrue(mapElement.activeAction === defaultActiveActionLayer1);

        mapElement.activateAction(actionLayer2);
        await sleep(350);

        assert.isTrue(!!mapElement.activeAction);
        assert.isTrue(mapElement.activeAction === actionLayer2);

        layer1.visible = false;
        await sleep(350);

        assert.isTrue(!!mapElement.activeAction);
        assert.isTrue(mapElement.activeAction === actionLayer2);

        layer1.visible = true;
        await sleep(350);

        assert.isTrue(!!mapElement.activeAction);
        assert.isTrue(mapElement.activeAction === actionLayer2);
    }).timeout(5000);

    it('you can zoom to a bounding box', async () => {
        const mapElement: any = await mapFixture();

        sandbox.spy(mapElement._map, 'zoomToExtent');

        const boundingbox = [0, 1, 2, 3];
        mapElement.zoomTo(boundingbox);

        assert(mapElement._map.zoomToExtent.calledWith(boundingbox));
    });

    it('you can zoom to a geometry', async () => {
        const mapElement: any = await mapFixture();

        sandbox.spy(mapElement._map, 'zoomToGeometry');

        const geometry = {
            type: 'Point',
            coordinates: [104719.27, 192387.25],
        };
        mapElement.zoomTo(geometry);

        assert(mapElement._map.zoomToGeometry.calledWith(geometry));
    });

    it('when a map has the fullscreen attribute, the fullscreen control will be added', async () => {
        let mapElement: any = await mapFixture();

        assert.isUndefined(
            mapElement._map.controls.getArray().find((control) => control instanceof OlFullScreenControl)
        );

        mapElement = await mapFullscreenFixture();

        assert.isDefined(mapElement._map.controls.getArray().find((control) => control instanceof OlFullScreenControl));
    });
});
