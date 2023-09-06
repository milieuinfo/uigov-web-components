import { awaitUntil } from '@domg-wc/common-utilities';
import { assert, expect, fixture, html } from '@open-wc/testing';
import { VlCompositeVectorLayer } from '../../../../actions/layer/composite-vector-layer';
import { VlCompositeVectorSource } from '../../../../actions/source/composite-vector-source';
import '../../../../vl-map';
import '../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import '../../../layer-style/vl-map-layer-style';
// TODO bekijken met Sander -> dit moet op 2 manieren geimporteerd worden
import './vl-map-draw-point-action';
import { VlMapDrawPointAction } from './vl-map-draw-point-action';

const mapDrawPointActionSnappingWfsLayersFixture = async () =>
    fixture(html`
        <vl-map id="map-with-draw-point-snap-action">
            <vl-map-features-layer id="point-layer">
                <vl-map-draw-point-action
                    id="draw-point-snap-action"
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
                </vl-map-draw-point-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapDrawPointActionSnapping = async () =>
    fixture(html`
        <vl-map id="map-with-draw-point-snap-action">
            <vl-map-features-layer id="point-layer">
                <vl-map-draw-point-action id="draw-point-snap-action" data-vl-default-active data-vl-snapping>
                </vl-map-draw-point-action>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-draw-point-action', () => {
    it('a dot draw action is a map action', () => {
        assert.isTrue(VlMapDrawPointAction.isVlMapAction());
    });

    it('snapping is properly configured if the snapping attribute is there but without layers', async () => {
        const fixtureMetSnapping = await mapDrawPointActionSnapping();
        const drawPointMetSnappingAction: any = fixtureMetSnapping.querySelector('vl-map-draw-point-action');
        await awaitUntil(() => drawPointMetSnappingAction.action != null);
        const drawActionOptions = drawPointMetSnappingAction.action.options;
        expect(drawActionOptions.snapping).to.equal(true);
    });

    it('snapping is properly configured if there are layers and pixel tolerance', async () => {
        const fixtureMetSnapping = await mapDrawPointActionSnappingWfsLayersFixture();
        const drawPointMetSnappingOpWfsLagenAction: any = fixtureMetSnapping.querySelector('vl-map-draw-point-action');
        await awaitUntil(() => drawPointMetSnappingOpWfsLagenAction.action != null);
        const drawActionOptions = drawPointMetSnappingOpWfsLagenAction.action.options;
        expect(drawActionOptions.snapping.pixelTolerance).to.equal('1000');
        expect(drawActionOptions.snapping.node).to.equal(false);
        expect(drawActionOptions.snapping.vertex).to.equal(false);
        expect(drawActionOptions.snapping.layer instanceof VlCompositeVectorLayer).to.equal(true);
        expect(drawActionOptions.snapping.layer.getSource() instanceof VlCompositeVectorSource).to.equal(true);
        const stromendWater: any = fixtureMetSnapping.querySelector('#stromendwater');
        const stilstaandWater: any = fixtureMetSnapping.querySelector('#stilstaandwater');
        expect(drawActionOptions.snapping.layer.getSource().sources[0]).to.equal(stromendWater._layer.getSource());
        expect(drawActionOptions.snapping.layer.getSource().sources[1]).to.equal(stilstaandWater._layer.getSource());
        await awaitUntil(() => drawActionOptions.snapping.layer.getStyle() == stromendWater.style);
    });
});
