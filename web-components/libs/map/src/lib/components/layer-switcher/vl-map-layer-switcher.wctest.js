import { awaitUntil } from '@domg-lib/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import '../../vl-map';
import '../action/draw-action/vl-map-draw-point-action';
import '../layer/vector-layer/vl-map-features-layer';
import '../layer/vector-layer/vl-map-wfs-layer';
import '../side-sheet/vl-map-side-sheet';
import './vl-map-layer-switcher';

const mapLayerSwitcherFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-side-sheet>
                <vl-map-layer-switcher></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-features-layer data-vl-name="layer-1"></vl-map-features-layer>
            <vl-map-features-layer data-vl-name="layer-2"></vl-map-features-layer>
            <vl-map-features-layer data-vl-name="layer-3"></vl-map-features-layer>
        </vl-map>
    `);

const mapLayerSwitcherCustomFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-side-sheet>
                <vl-map-layer-switcher>
                    <vl-checkbox data-vl-label="Optie 1" data-vl-layer="layer-1"></vl-checkbox>
                </vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-features-layer data-vl-name="layer-1"></vl-map-features-layer>
            <vl-map-features-layer data-vl-name="layer-2"></vl-map-features-layer>
            <vl-map-features-layer data-vl-name="layer-3"></vl-map-features-layer>
        </vl-map>
    `);

const mapLayerSwitcherLayerNonDirectChildFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-side-sheet>
                <vl-map-layer-switcher></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-features-layer id="point-layer" data-vl-name="layer-1">
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
                </vl-map-draw-point-action>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-layer-switcher', () => {
    it('wanneer er geen layer input child elementen aanwezig zijn, zullen deze automatisch gegenereerd worden', async () => {
        const map = await mapLayerSwitcherFixture();
        const layerSwitcher = map.querySelector('vl-map-layer-switcher');
        await map.ready;
        await awaitUntil(() => layerSwitcher._layerInputs.length === 3);
        assert.lengthOf(layerSwitcher._layerInputs, 3);
        const layers = map.nonBaseLayers;
        layers.forEach((layer, index) =>
            assert.equal(
                layerSwitcher._layerInputs[index].getAttribute('data-vl-label'),
                layer.getAttribute('data-vl-name')
            )
        );
        layers.forEach((layer, index) =>
            assert.equal(
                layerSwitcher._layerInputs[index].getAttribute('data-vl-layer'),
                layer.getAttribute('data-vl-name')
            )
        );
    });

    it('non-direct child elementen van de vl-map worden niet meegenomen in de default layer switcher', async () => {
        const map = await mapLayerSwitcherLayerNonDirectChildFixture();
        const layerSwitcher = map.querySelector('vl-map-layer-switcher');
        await map.ready;
        await awaitUntil(() => layerSwitcher._layerInputs.length === 1);
        assert.lengthOf(layerSwitcher._layerInputs, 1);
        assert.equal(layerSwitcher._layerInputs[0].getAttribute('data-vl-label'), 'layer-1');
    });

    it('wanneer er layer input child elementen aanwezig zijn, zullen er geen extra input elementen gegenereerd worden', async () => {
        const map = await mapLayerSwitcherCustomFixture();
        const layerSwitcher = map.querySelector('vl-map-layer-switcher');
        await map.ready;
        await awaitUntil(() => layerSwitcher._layerInputs.length === 1);
        assert.lengthOf(layerSwitcher._layerInputs, 1);
    });

    it('een change event van een element met een layer attribuut zal de zichtbaarheid van de gekoppelde laag wijzigen', async () => {
        const map = await mapLayerSwitcherCustomFixture();
        const checkbox = map.querySelector('vl-map-layer-switcher vl-checkbox');
        await map.ready;
        const layers = map.nonBaseLayers;
        await Promise.all(layers.map((layer) => awaitUntil(() => layer.ready))).then(() => {
            const layer = map.nonBaseLayers[0];
            assert.isTrue(layer.visible);
            checkbox.addEventListener('change', () => {
                setTimeout(() => {
                    assert.isFalse(layer.visible);
                });
            });
        });
    });
});
