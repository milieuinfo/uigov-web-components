import { awaitUntil } from '@domg-wc/common-utilities';
import { assert, expect, fixture, html } from '@open-wc/testing';
import { VlCompositeVectorLayer, VlCompositeVectorSource } from '../../../../actions';
import '../../../../vl-map';
import '../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import '../../../layer-style/vl-map-layer-style';
// TODO bekijken met Sander -> dit moet op 2 manieren geimporteerd worden
import './vl-map-draw-line-action';
import { VlMapDrawLineAction } from './vl-map-draw-line-action';

const mapDrawLineActionSnappingWfsLayersFixture = async () =>
    fixture(html`
        <vl-map id="map-with-draw-line-snap-action">
            <vl-map-features-layer>
                <vl-map-draw-line-action
                    id="draw-line-snap-action"
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
                </vl-map-draw-line-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapDrawLineActionSnapping = async () =>
    fixture(html`
        <vl-map id="map-with-draw-line-snap-action">
            <vl-map-features-layer>
                <vl-map-draw-line-action id="draw-line-snap-action" data-vl-default-active data-vl-snapping>
                </vl-map-draw-line-action>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-draw-line-action', () => {
    it('a line draw action is a map action', () => {
        assert.isTrue(VlMapDrawLineAction.isVlMapAction());
    });

    it('snapping is properly configured if the snapping attribute is there but without layers', async () => {
        const fixtureMetSnapping = await mapDrawLineActionSnapping();
        const drawLineMetSnappingAction: any = fixtureMetSnapping.querySelector('vl-map-draw-line-action');
        await awaitUntil(() => drawLineMetSnappingAction.action != null);
        const drawActionOptions = drawLineMetSnappingAction.action.options;
        expect(drawActionOptions.snapping).to.equal(true);
    });

    it('snapping is properly configured if there are layers and pixel tolerance', async () => {
        const fixtureMetSnapping = await mapDrawLineActionSnappingWfsLayersFixture();
        const drawLineMetSnappingOpWfsLagenAction: any = fixtureMetSnapping.querySelector('vl-map-draw-line-action');
        await awaitUntil(() => drawLineMetSnappingOpWfsLagenAction.action != null);
        const drawActionOptions = drawLineMetSnappingOpWfsLagenAction.action.options;
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
