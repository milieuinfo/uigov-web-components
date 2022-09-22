import { awaitUntil } from '@domg-lib/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import OlFeature from 'ol/Feature';
import OlPoint from 'ol/geom/Point';
import '../../../vl-map';
import '../../layer/vector-layer/vl-map-features-layer';
import '../../layer-style/vl-map-layer-style';
import './vl-map-select-action';
import './test/test-custom-map-select-action';
import { VlMapSelectAction } from './vl-map-select-action';

const mapSelectActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-select-action>
                    <vl-map-layer-style
                        data-vl-text-color="#000"
                        data-vl-color="#FFE615"
                        data-vl-border-color="#FFE615"
                    ></vl-map-layer-style>
                </vl-map-select-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const customMapSelectActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-custom-map-select-action>
                    <vl-map-layer-style
                        data-vl-text-color="#000"
                        data-vl-color="#FFE615"
                        data-vl-border-color="#FFE615"
                    ></vl-map-layer-style>
                </vl-custom-map-select-action>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-select-action', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    it('a select action is a map action', async () => {
        assert.isTrue(VlMapSelectAction.isVlMapAction());
    });

    it('select action configuration is possible', async () => {
        const map = await mapSelectActionFixture();
        const styleElement = map.querySelector('vl-map-layer-style');
        const { layer } = map.querySelector('vl-map-features-layer');
        await map.ready;
        const action = map.map.actions[0];
        assert.deepEqual(action.layer, layer);
        await awaitUntil(() => {
            const selectAction = map.map.actions[0];
            return (
                selectAction &&
                selectAction.style &&
                typeof selectAction.style === 'function' &&
                selectAction.style().getFill().getColor() === '#FFE615'
            );
        });
        assert.deepEqual(map.map.actions[0].style(), styleElement.style());
    });

    it('features on a map can be marked', async () => {
        const map = await mapSelectActionFixture();
        const actionElement = map.querySelector('vl-map-select-action');
        const id = 1;
        sandbox.spy(actionElement.action, 'markFeatureWithId');
        actionElement.mark(id);
        assert(actionElement.action.markFeatureWithId.calledWith(id));
    });

    it('marked features on the map can be demarked', async () => {
        const map = await mapSelectActionFixture();
        const actionElement = map.querySelector('vl-map-select-action');
        sandbox.spy(actionElement.action, 'demarkAllFeatures');
        actionElement.removeMarks();
        assert(actionElement.action.demarkAllFeatures.called);
    });

    it('a feature on the map can be selected', async () => {
        const map = await mapSelectActionFixture();
        const actionElement = map.querySelector('vl-map-select-action');
        const feature = new OlFeature({
            geometry: new OlPoint([1, 1]),
        });
        sandbox.spy(actionElement.action, 'selectFeature');
        actionElement.select(feature);
        assert(actionElement.action.selectFeature.calledWith(feature));
    });

    it('all features can be deselected and dehighlighted', async () => {
        const map = await mapSelectActionFixture();
        const actionElement = map.querySelector('vl-map-select-action');
        sandbox.spy(actionElement.action, 'clearFeatures');
        actionElement.reset();
        assert(actionElement.action.clearFeatures.calledWith());
    });

    it('the cluster attribute will be passed to the underlying select action', async () => {
        const map = await mapSelectActionFixture();
        const actionElement = map.querySelector('vl-map-select-action');
        actionElement.setAttribute('cluster', '');
        const action = map.map.actions[0];
        assert.equal(action.cluster, true);
    });

    it('the filter for the select action returns true by default', async () => {
        const map = await mapSelectActionFixture();
        const action = map.map.actions[0];
        assert.isTrue(action.filter());
    });

    it('the filter for the select action can be overridden', async () => {
        const map = await customMapSelectActionFixture();
        const action = map.map.actions[0];
        assert.isTrue(action.filter({ id: '12' }, { id: '12' }));
        assert.isFalse(action.filter({ id: '2' }, { id: '12' }));
        assert.isFalse(action.filter({ id: '12' }, { id: '2' }));
    });
});
