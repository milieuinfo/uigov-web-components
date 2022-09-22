import { assert, fixture, html } from '@open-wc/testing';
import './vl-map-base-layer-grb-ortho';
import '../../vl-map';

const baselayerGrbOrthoFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    `);

describe("vl-map-baselayer-grb-ortho", () => {
    it("de grb basiskaartlaag wordt goed geconfigureerd", async () => {
        const element = await baselayerGrbOrthoFixture();
        const vlMapBaseLayerElement = element.querySelector("vl-map-baselayer-grb-ortho");
        assert.equal(
            vlMapBaseLayerElement.url,
            "https://geo.api.vlaanderen.be/OMWRGBMRVL/wmts"
        );
        assert.equal(vlMapBaseLayerElement.type, "wmts");
        assert.equal(vlMapBaseLayerElement.layer, "omwrgbmrvl");
        assert.equal(vlMapBaseLayerElement.title, "GRB ortho laag");
    });
});
