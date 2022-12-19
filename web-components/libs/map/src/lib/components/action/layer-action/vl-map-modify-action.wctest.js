import { awaitUntil } from '@domg-wc/common-utilities';
import { VlCompositeVectorLayer, VlCompositeVectorSource } from '../../../actions';
import { assert, expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../../vl-map';
import '../../layer/vector-layer/vl-map-features-layer';
import '../../layer/vector-layer/vl-map-wfs-layer';
import '../../layer-style/vl-map-layer-style';
import './vl-map-modify-action';
import './test/test-custom-map-modify-action';
import { VlMapModifyAction } from './vl-map-modify-action';

const mapModifyActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-modify-action></vl-map-modify-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapModifyActionSnappingWfsLayersFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-modify-action data-vl-snapping data-vl-snapping-pixel-tolerance="1000">
                    <vl-map-wfs-layer
                        id="stromendwater"
                        data-vl-name="Stromend waterlichamen"
                        data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                        data-vl-layers="owl_l"
                        data-vl-max-resolution="4"
                    >
                        <vl-map-layer-style
                            data-vl-color="rgba(6, 163, 247, 0.4)"
                            data-vl-border-size="4"
                            data-vl-border-color="rgba(6, 163, 247, 1)"
                        ></vl-map-layer-style>
                    </vl-map-wfs-layer>
                    <vl-map-wfs-layer
                        id="stilstaandwater"
                        data-vl-name="Stilstaand waterlichamen"
                        data-vl-url="https://gisservices.inbo.be/arcgis/services/Watervlakken/MapServer/WFSServer?service=wfs"
                        data-vl-layers="Watervlakken"
                        data-vl-max-resolution="4"
                    >
                        <vl-map-layer-style
                            data-vl-color="rgba(6, 163, 247, 0.4)"
                            data-vl-border-size="4"
                            data-vl-border-color="rgba(6, 163, 247, 1)"
                        ></vl-map-layer-style>
                    </vl-map-wfs-layer>
                </vl-map-modify-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const customMapModifyActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-custom-map-modify-action></vl-custom-map-modify-action>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-modify-action', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    it('a modify action is a map action', () => {
        assert.isTrue(VlMapModifyAction.isVlMapAction());
    });

    it('after the modify action is finished, the onModify callback will be called', async () => {
        const map = await mapModifyActionFixture();
        await map.ready;
        const modifyAction = map.querySelector('vl-map-modify-action');
        await awaitUntil(() => modifyAction.action != null);

        await new Promise((resolve) => {
            modifyAction.onModify((feature) => {
                assert.equal(feature, 'gewijzigdeFeature');
                resolve();
            });
            modifyAction.action.modifyInteraction.dispatchEvent({
                type: 'modifyend',
                features: ['gewijzigdeFeature'],
            });
        });
    });

    it('snapping is enabled even when there are no specific snapping layers', async () => {
        const map = await mapModifyActionFixture();
        const modifyAction = map.querySelector('vl-map-modify-action');
        await awaitUntil(() => modifyAction.action != null);
        const modifyActionOptions = modifyAction.action.options;

        expect(modifyActionOptions.snapping).to.equal(true);
    });

    it('snapping is properly configured when there are layers and a pixel tolerance was configured', async () => {
        const mapMetSnapping = await mapModifyActionSnappingWfsLayersFixture();
        const modifyMetSnappingOpWfsLagenAction = mapMetSnapping.querySelector('vl-map-modify-action');
        await awaitUntil(() => modifyMetSnappingOpWfsLagenAction.action != null);
        const modifyActionOptions = modifyMetSnappingOpWfsLagenAction.action.options;

        expect(modifyActionOptions.snapping.pixelTolerance).to.equal('1000');
        expect(modifyActionOptions.snapping.node).to.equal(false);
        expect(modifyActionOptions.snapping.vertex).to.equal(false);
        expect(modifyActionOptions.snapping.layer instanceof VlCompositeVectorLayer).to.equal(true);
        expect(modifyActionOptions.snapping.layer.getSource() instanceof VlCompositeVectorSource).to.equal(true);
        expect(modifyActionOptions.snapping.layer.getSource().sources[0]).to.equal(
            mapMetSnapping.querySelector('#stromendwater')._layer.getSource()
        );
        expect(modifyActionOptions.snapping.layer.getSource().sources[1]).to.equal(
            mapMetSnapping.querySelector('#stilstaandwater')._layer.getSource()
        );
        await awaitUntil(
            () => modifyActionOptions.snapping.layer.getStyle() == mapMetSnapping.querySelector('#stromendwater').style
        );
    });

    it('the event listener that listens to style changes on snapping layers will be removed when the action gets disconnected', async () => {
        const mapMetSnapping = await mapModifyActionSnappingWfsLayersFixture();
        const modifyMetSnappingOpWfsLagenAction = mapMetSnapping.querySelector('vl-map-modify-action');
        await awaitUntil(() => modifyMetSnappingOpWfsLagenAction.action != null);
        const stromendWaterSnappingLayer = mapMetSnapping.querySelector('#stromendwater');
        const removeEventListenerSpy = sandbox.spy(stromendWaterSnappingLayer, 'removeEventListener');
        modifyMetSnappingOpWfsLagenAction.remove();
        await awaitUntil(() => removeEventListenerSpy.called);
    });

    it('changes to the snapping attribute reprocesses the action', async () => {
        const map = await mapModifyActionFixture();
        const modifyAction = map.querySelector('vl-map-modify-action');
        await awaitUntil(() => modifyAction.action != null);
        const processActionSpy = sandbox.spy(modifyAction, '_processAction');
        modifyAction.setAttribute('data-vl-snapping', '');
        await awaitUntil(() => processActionSpy.called);
    });

    it('changes to the snapping pixel tolerance attribute reprocesses the action', async () => {
        const map = await mapModifyActionFixture();
        const modifyAction = map.querySelector('vl-map-modify-action');
        await awaitUntil(() => modifyAction.action != null);
        const processActionSpy = sandbox.spy(modifyAction, '_processAction');
        modifyAction.setAttribute('data-vl-snapping-pixel-tolerance', '100');
        await awaitUntil(() => processActionSpy.called);
    });

    it('the filter for the modify action returns true by default', () => {
        customMapModifyActionFixture().then((map) => {
            const action = map.map.actions[0];
            assert.isTrue(action.filter());
        });
    });

    it('the filter for the modify action can be overridden', () => {
        customMapModifyActionFixture().then((map) => {
            const action = map.map.actions[0];
            assert.isTrue(action.filter({ id: '12' }, { id: '12' }));
            assert.isFalse(action.filter({ id: '2' }, { id: '12' }));
            assert.isFalse(action.filter({ id: '12' }, { id: '2' }));
        });
    });

    it('the filter for the modify action returns true by default', () => {
        mapModifyActionFixture().then((map) => {
            const action = map.map.actions[0];
            assert.isTrue(action.filter());
        });
    });

    it('the filter for the modify action can be overridden', () => {
        customMapModifyActionFixture().then((map) => {
            const action = map.map.actions[0];
            assert.isTrue(action.filter({ id: '12' }, { id: '12' }));
            assert.isFalse(action.filter({ id: '2' }, { id: '12' }));
            assert.isFalse(action.filter({ id: '12' }, { id: '2' }));
        });
    });
});
