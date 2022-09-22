import { assert, fixture, html } from '@open-wc/testing';
import './vl-map-base-layer-grb-gray';
import '../../vl-map';

const baselayerGrbGrayFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `);

describe("vl-map-baselayer-grb-gray", () => {
    it("de grb basiskaartlaag wordt goed geconfigureerd", async () => {
        const element = await baselayerGrbGrayFixture();
        const vlMapBaseLayerElement = element.querySelector("vl-map-baselayer-grb-gray");
        assert.equal(
            vlMapBaseLayerElement.url,
            "https://geo.api.vlaanderen.be/GRB/wmts"
        );
        assert.equal(vlMapBaseLayerElement.type, "wmts");
        assert.equal(vlMapBaseLayerElement.layer, "grb_bsk_grijs");
        assert.equal(vlMapBaseLayerElement.title, "GRB basis laag grijs");
    });
});
