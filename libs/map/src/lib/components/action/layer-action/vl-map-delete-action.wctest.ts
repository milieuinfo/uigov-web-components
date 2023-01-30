import { awaitUntil } from '@domg-wc/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import OlFeature from 'ol/Feature';
import '../../../vl-map';
import '../../layer/vector-layer/vl-map-features-layer';
import '../../layer-style/vl-map-layer-style';
import './test/test-custom-map-delete-action';
import './vl-map-delete-action';
import { VlMapDeleteAction } from './vl-map-delete-action';

const mapDeleteActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-delete-action></vl-map-delete-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapDeleteActionFixtureCustomStijl = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-delete-action>
                    <vl-map-layer-style
                        data-vl-text-color="#000"
                        data-vl-color="#FFE615"
                        data-vl-border-color="#FFE615"
                    ></vl-map-layer-style>
                </vl-map-delete-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const customMapDeleteActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-custom-map-delete-action></vl-custom-map-delete-action>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-delete-action', () => {
    it('a delete action is a map action', () => {
        assert.isTrue(VlMapDeleteAction.isVlMapAction());
    });

    it('delete action configuration is possible', async () => {
        const map: any = await mapDeleteActionFixture();
        const { layer } = map.querySelector('vl-map-features-layer');
        const action = map.map.actions[0];
        assert.deepEqual(action.layer, layer);
        assert.equal(action.style.getFill().getColor(), 'rgba(241, 174, 174, 0.26)');
    });

    it('a custom style can be set', async () => {
        const map: any = await mapDeleteActionFixtureCustomStijl();
        const styleElement = map.querySelector('vl-map-layer-style');
        const { layer } = map.querySelector('vl-map-features-layer');

        await map.ready;
        assert.deepEqual(map.map.actions[0].layer, layer);

        await awaitUntil(() => {
            const deleteAction = map.map.actions[0];
            return (
                deleteAction &&
                deleteAction.style &&
                typeof deleteAction.style === 'function' &&
                deleteAction.style().getFill().getColor() === '#FFE615'
            );
        });
        assert.deepEqual(map.map.actions[0].style(), styleElement.style());
    });

    it('after the delete action is finished, the onDelete callback will be called', async () => {
        const map: any = await mapDeleteActionFixture();
        await map.ready;
        const deleteAction = map.querySelector('vl-map-delete-action');
        await awaitUntil(() => deleteAction.action != null);
        let featureDeleted = false;
        deleteAction.onDelete(() => {
            featureDeleted = true;
        });
        deleteAction.action.hoverInteraction.getFeatures().push(new OlFeature({}));
        deleteAction.action.dragBoxInteraction.dispatchEvent('boxend');

        await awaitUntil(() => featureDeleted === true);
    });

    it('after the delete action is finished, the features will be deleted', async () => {
        const map: any = await mapDeleteActionFixture();
        await map.ready;
        const deleteAction = map.querySelector('vl-map-delete-action');
        await awaitUntil(() => deleteAction.action != null);
        const removeFeatureStub = sinon.stub();
        const hasFeatureStub = sinon.stub();
        const getSourceStub = sinon.stub(deleteAction.layer, 'getSource').returns({
            removeFeature: removeFeatureStub,
            hasFeature: hasFeatureStub,
        });
        const feature = new OlFeature({});
        deleteAction.action.hoverInteraction.getFeatures().push(feature);

        deleteAction.action.dragBoxInteraction.dispatchEvent('boxend');

        await awaitUntil(() => deleteAction.action.hoverInteraction.getFeatures().getLength() === 0);
        assert.isTrue(removeFeatureStub.calledOnce);
        assert.deepEqual(removeFeatureStub.args[0][0], feature);

        removeFeatureStub.reset();
        hasFeatureStub.reset();
        getSourceStub.reset();
    });

    it("after the delete action is finished, the onDelete callback will be called and the arguments can be used to ensure some features are deleted and others aren't", async () => {
        const map: any = await mapDeleteActionFixture();
        await map.ready;
        const deleteAction = map.querySelector('vl-map-delete-action');
        await awaitUntil(() => deleteAction.action != null);
        const removeFeatureStub = sinon.stub();
        const hasFeatureStub = sinon.stub();
        const getSourceStub = sinon.stub(deleteAction.layer, 'getSource').returns({
            removeFeature: removeFeatureStub,
            hasFeature: hasFeatureStub,
        });
        const teVerwijderenFeature = new OlFeature({});
        const featureDieNietVerwijderdMagWorden = new OlFeature({});
        deleteAction.onDelete((features, resolve, reject) => {
            features.forEach((feature) => {
                if (feature === teVerwijderenFeature) {
                    resolve(feature);
                } else {
                    reject(feature);
                }
            });
        });
        deleteAction.action.hoverInteraction.getFeatures().push(teVerwijderenFeature);
        deleteAction.action.hoverInteraction.getFeatures().push(featureDieNietVerwijderdMagWorden);

        deleteAction.action.dragBoxInteraction.dispatchEvent('boxend');

        await awaitUntil(() => deleteAction.action.hoverInteraction.getFeatures().getLength() === 0);
        assert.isTrue(removeFeatureStub.calledOnce);
        assert.deepEqual(removeFeatureStub.args[0][0], teVerwijderenFeature);

        removeFeatureStub.reset();
        hasFeatureStub.reset();
        getSourceStub.reset();
    });

    it('the filter for the delete action returns true by default', async () => {
        const map: any = await mapDeleteActionFixture();
        const action = map.map.actions[0];
        assert.isTrue(action.filter());
    });

    it('the filter for the delete action can be overridden', async () => {
        const map: any = await customMapDeleteActionFixture();
        const action = map.map.actions[0];
        assert.isTrue(action.filter({ id: '12' }, { id: '12' }));
        assert.isFalse(action.filter({ id: '2' }, { id: '12' }));
        assert.isFalse(action.filter({ id: '12' }, { id: '2' }));
    });
});
