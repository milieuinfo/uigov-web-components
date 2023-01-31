import {fixture, html} from "@open-wc/testing";
import './vl-map-click-action-pindrop';

const pindropFixture = async () =>
    fixture(html`
        <vl-map-click-action-pindrop></vl-map-click-action-pindrop>
    `);


describe('vl-map-click-action-pindrop', () => {


    it('fixtures loads ok', async () => {
        await pindropFixture();
    });

});
