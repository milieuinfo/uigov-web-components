import { expect, fixture, html } from '@open-wc/testing';
import '../../../vl-map';
import '../../action/draw-action/measure-action/vl-map-measure-action';
import '../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../vl-map-action-controls';
import './vl-map-measure-control';

const measureControlFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-features-layer>
                <vl-map-measure-action></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-measure-control', () => {
    it('the measure control is configured correctly', async () => {
        const element: any = await measureControlFixture();
        const vlMapMeasureControlElement: any = element.querySelector('vl-map-measure-control');

        expect(vlMapMeasureControlElement).to.not.be.null;
        expect(vlMapMeasureControlElement.controlElement.tagName.toLowerCase() === 'vl-toggle-button').to.be.true;
        expect(vlMapMeasureControlElement.identifier === 'measure').to.be.true;
        expect(vlMapMeasureControlElement.type === 'action').to.be.true;
    });

    it('the measure control will be added to the map', async () => {
        const element: any = await measureControlFixture();
        await element.ready;

        const { map } = element.closest('vl-map');
        const controls = map.getControls().getArray();

        expect(!!controls.find((control) => control.get('element') && control.get('element').identifier === 'measure'))
            .to.be.true;
    });

    it('the measure action of the measure control can be requested', async () => {
        const element: any = await measureControlFixture();
        await element.ready;

        const mapElement = element.closest('vl-map');
        const measureControl = mapElement.querySelector(`vl-map-measure-control`);

        debugger;
        const measureAction = measureControl.getAction();
        expect(!!measureAction);
        expect(measureAction.element.identifier === measureControl.identifier).to.be.true;
    });

    it('the measure control can be activated and deactivated', async () => {
        const element: any = await measureControlFixture();
        await element.ready;

        const mapElement = element.closest('vl-map');
        const measureControl = mapElement.querySelector(`vl-map-measure-control`);

        expect(measureControl.controlElement.active === true).to.be.false;

        measureControl.setActive(true);
        expect(measureControl.controlElement.active === true).to.be.true;

        measureControl.setActive(false);
        expect(measureControl.controlElement.active === true).to.be.false;
    });

    it('the measure control can be disabled and enabled', async () => {
        const element: any = await measureControlFixture();
        await element.ready;

        const mapElement = element.closest('vl-map');
        const measureControl = mapElement.querySelector(`vl-map-measure-control`);

        expect(measureControl.controlElement.disabled).to.be.false;

        measureControl.setDisabled(true);
        expect(measureControl.controlElement.disabled).to.be.true;

        measureControl.setDisabled(false);
        expect(measureControl.controlElement.disabled).to.be.false;
    });
});
