import { assert, fixture, html } from '@open-wc/testing';
import './vl-map-base-layer-grb';
import '../../../vl-map';

const baselayerGrbFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
        </vl-map>
    `);

describe("vl-map-baselayer-grb", () => {
    it("de grb basiskaartlaag wordt goed geconfigureerd", async () => {
        const element: any = await baselayerGrbFixture();
        const vlMapBaseLayerElement = element.querySelector("vl-map-baselayer-grb");
        assert.equal(
            vlMapBaseLayerElement.url,
            "https://geo.api.vlaanderen.be/GRB/wmts"
        );
        assert.equal(vlMapBaseLayerElement.type, "wmts");
        assert.equal(vlMapBaseLayerElement.layer, "grb_bsk");
        assert.equal(vlMapBaseLayerElement.title, "GRB basis laag");
    });
});
