import { awaitUntil } from '@domg-lib/common-utilities';
import { assert, expect, fixture, html } from '@open-wc/testing';
import { VlCompositeVectorLayer, VlCompositeVectorSource } from '../../../actions';
import '../../../vl-map';
import '../../layer/vector-layer/vl-map-features-layer';
import '../../layer/vector-layer/vl-map-wfs-layer';
import '../../layer-style/vl-map-layer-style';
// TODO bekijken met Sander -> dit moet op 2 manieren geimporteerd worden
import './vl-map-measure-action';
import { VlMapMeasureAction } from './vl-map-measure-action';

const mapMeasureActionASnappingWfsLayersFixture = async () =>
    fixture(html`
        <vl-map id="map-with-measure-snap-action">
            <vl-map-features-layer id="point-layer">
                <vl-map-measure-action
                    id="measure-snap-action"
                    data-vl-default-active
                    data-vl-snapping
                    data-vl-snapping-pixel-tolerance="1000"
                >
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
                </vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapMeasureActionSnappingFixture = async () =>
    fixture(html`
        <vl-map id="map-with-measure-snap-action">
            <vl-map-features-layer id="point-layer">
                <vl-map-measure-action id="measure-snap-action" data-vl-default-active data-vl-snapping>
                </vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapMeasureActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-measure-action></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-measure-action', () => {
    it('a measure action is a map action', () => {
        assert.isTrue(VlMapMeasureAction.isVlMapAction());
    });

    it('measure action has the correct identifier', async () => {
        const fixtureElement = await mapMeasureActionFixture();
        const measureAction = fixtureElement.querySelector('vl-map-measure-action');
        assert.isTrue(measureAction.identifier === 'measure');
    });

    it('snapping is properly configured if the snapping attribute is there but without layers', async () => {
        const fixtureWithSnapping = await mapMeasureActionSnappingFixture();
        const measureWithSnappingAction = fixtureWithSnapping.querySelector('vl-map-measure-action');
        await awaitUntil(() => measureWithSnappingAction.action != null);
        const measureActionOptions = measureWithSnappingAction.action.options;
        expect(measureActionOptions.snapping).to.equal(true);
    });

    it('snapping is properly configured if there are layers and pixel tolerance', async () => {
        const fixtureWithSnapping = await mapMeasureActionASnappingWfsLayersFixture();
        const measureWithSnappingOnWfsLayersAction = fixtureWithSnapping.querySelector('vl-map-measure-action');
        await awaitUntil(() => measureWithSnappingOnWfsLayersAction.action != null);
        const measureActionsOptions = measureWithSnappingOnWfsLayersAction.action.options;
        expect(measureActionsOptions.snapping.pixelTolerance).to.equal('1000');
        expect(measureActionsOptions.snapping.node).to.equal(false);
        expect(measureActionsOptions.snapping.vertex).to.equal(false);
        expect(measureActionsOptions.snapping.layer instanceof VlCompositeVectorLayer).to.equal(true);
        expect(measureActionsOptions.snapping.layer.getSource() instanceof VlCompositeVectorSource).to.equal(true);
        expect(measureActionsOptions.snapping.layer.getSource().sources[0]).to.equal(
            fixtureWithSnapping.querySelector('#stromendwater')._layer.getSource()
        );
        expect(measureActionsOptions.snapping.layer.getSource().sources[1]).to.equal(
            fixtureWithSnapping.querySelector('#stilstaandwater')._layer.getSource()
        );
        await awaitUntil(
            () =>
                measureActionsOptions.snapping.layer.getStyle() ==
                fixtureWithSnapping.querySelector('#stromendwater').style
        );
    });
});
