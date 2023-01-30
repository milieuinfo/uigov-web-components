import { awaitUntil } from '@domg-wc/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import '../../../vl-map';
import '../../layer/vector-layer/vl-map-features-layer';
import './vl-map-draw-point-action';
import './vl-map-draw-line-action';
import './vl-map-draw-polygon-action';

const mapDrawActionsFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer id="line-layer">
                <vl-map-draw-point-action id="draw-point-action"></vl-map-draw-point-action>
                <vl-map-draw-line-action id="draw-line-action"></vl-map-draw-line-action>
                <vl-map-draw-polygon-action id="draw-polygon-action"></vl-map-draw-polygon-action>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map', async () => {
    it('after the draw action is completed, the callback will be called with the feature as the first argument and a reject callback as the second argument', async () => {
        const map: any = await mapDrawActionsFixture();
        await map.ready;
        const types = ['point', 'line', 'polygon'];
        for (let index = 0; index < types.length; index++) {
            const drawAction = map.querySelector(`vl-map-draw-${types[index]}-action`);
            await awaitUntil(() => drawAction.action != null);
            let featureDrawn = false;
            drawAction.onDraw((feature, rejectCallback) => {
                assert.equal(feature, 'getekendeFeature');
                assert.isFunction(rejectCallback);
                featureDrawn = true;
            });
            drawAction.action.drawInteraction.dispatchEvent({
                type: 'drawend',
                feature: 'getekendeFeature',
            });
            await awaitUntil(() => featureDrawn === true);
        }
    });
});
