import { assert, fixture, html } from '@open-wc/testing';
import '../../vl-map';
import './vl-map-side-sheet';

const mapSideSheetFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-side-sheet></vl-map-side-sheet>
        </vl-map>
    `);

describe('vl-map-side-sheet', () => {
    it('de side sheet zal absoluut en links gepositioneerd worden', async () => {
        const map = await mapSideSheetFixture();
        const sideSheet = map.querySelector('vl-map-side-sheet');
        assert.isTrue(sideSheet.hasAttribute('data-vl-left'));
        assert.isTrue(sideSheet.hasAttribute('data-vl-absolute'));
    });
});
