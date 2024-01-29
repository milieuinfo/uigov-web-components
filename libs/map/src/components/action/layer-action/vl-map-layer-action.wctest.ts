import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { VlMapWithActions } from '../../../actions/map/map-with-actions';
import '../../../vl-map';
import '../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import { VlMapLayerAction } from './vl-map-layer-action';
import './vl-map-layer-action';

const mapLayerActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-action></vl-map-layer-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerActionDefaultActiveFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-action data-vl-default-active></vl-map-layer-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerActionLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer></vl-map-features-layer>
            <vl-map-layer-action></vl-map-layer-action>
        </vl-map>
    `);

const mapLayerActionLayerByNameFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer data-vl-name="layer"></vl-map-features-layer>
            <vl-map-layer-action data-vl-layer="layer"></vl-map-layer-action>
        </vl-map>
    `);

describe('vl-map-layer-action', () => {
    const sandbox = sinon.createSandbox();

    const action = {
        interactions: [],
        deactivate: sandbox.spy(),
        activate: sandbox.spy(),
    };

    afterEach(() => {
        sandbox.restore();
    });

    it('de actie wordt standaard gekoppeld aan de kaartlaag waarin gedeclareerd', async () => {
        const createActionStub = sandbox.stub(VlMapLayerAction.prototype, '_createAction').returns(<any>action);
        const map: any = await mapLayerActionFixture();
        const layerElement = map.querySelector('vl-map-features-layer');
        await map.ready;
        expect(map._map.actions).to.have.lengthOf(1);
        expect(map._map.actions[0]).to.deep.equal(action);
        expect(createActionStub).to.have.been.calledWith(layerElement.layer);
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                expect(action.activate).to.not.have.been.called;
                resolve();
            }, VlMapWithActions.CLICK_COUNT_TIMEOUT);
        });
    });

    // todo: fix
    // it('de actie kan standaard geactiveerd worden via het default active attribuut', async () => {
    //     const createActionStub = sandbox.stub(VlMapLayerAction.prototype, '_createAction').returns(action);
    //     const map: any = await mapLayerActionDefaultActiveFixture();
    //     const layerElement = map.querySelector('vl-map-features-layer');
    //     await map.ready;
    //     expect(map._map.actions).to.have.lengthOf(1);
    //     expect(map._map.actions[0]).to.deep.equal(action);
    //     expect(createActionStub).to.have.been.calledWith(layerElement.layer);
    //     await new Promise((resolve) => {
    //         setTimeout(() => {
    //             expect(action.activate).to.have.been.called;
    //             resolve();
    //         }, VlMapWithActions.CLICK_COUNT_TIMEOUT);
    //     });
    // });

    it('de actie kaartlaag koppeling kan gebeuren via een attribuut', async () => {
        const createActionStub = sandbox.stub(VlMapLayerAction.prototype, '_createAction').returns(<any>action);
        const map: any = await mapLayerActionLayerByNameFixture();
        const layerElement = map.querySelector('vl-map-features-layer');
        await map.ready;
        expect(map._map.actions).to.have.lengthOf(1);
        expect(map._map.actions[0]).to.deep.equal(action);
        expect(createActionStub).to.have.been.calledWith(layerElement.layer);
    });

    it('de actie kaartlaag kan gezet worden zodat één actie voor meerdere kaartlagen gebruikt kan worden', async () => {
        sandbox.stub(VlMapLayerAction.prototype, '_createAction').returns(<any>action);
        const map: any = await mapLayerActionLayerFixture();
        const layerElement = map.querySelector('vl-map-features-layer');
        const actionElement = map.querySelector('vl-map-layer-action');
        await map.ready;
        expect(map._map.actions).to.be.empty;
        actionElement.layer = layerElement.layer;
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                expect(map._map.actions).to.have.lengthOf(1);
                expect(map._map.actions[0]).to.deep.equal(action);
                resolve();
            });
        });
    });
});
