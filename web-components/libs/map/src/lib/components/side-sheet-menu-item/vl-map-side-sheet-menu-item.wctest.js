import { assert, fixture, html } from '@open-wc/testing';
import '../../vl-map';
import '../side-sheet/vl-map-side-sheet';
import './vl-map-side-sheet-menu-item';

const mapSideSheetMenuItemFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-side-sheet data-vl-open>
                <vl-map-side-sheet-menu-item></vl-map-side-sheet-menu-item>
            </vl-map-side-sheet>
        </vl-map>
    `);

describe('vl-map-side-sheet-menu-item', () => {
    it('bevat default titel', async () => {
        const element = await mapSideSheetMenuItemFixture();
        const vlmapPane = element.querySelector('vl-map-side-sheet-menu-item');
        assert.equal(vlmapPane._titleElement.innerText, 'Terug');
    });

    it('bevat default href', async () => {
        const element = await mapSideSheetMenuItemFixture();
        const vlmapPane = element.querySelector('vl-map-side-sheet-menu-item');
        assert.equal(vlmapPane._hrefElement.getAttribute('href'), '#');
    });

    it('bevat titel op basis van het titel attribuut', async () => {
        const element = await mapSideSheetMenuItemFixture();
        const vlmapPane = element.querySelector('vl-map-side-sheet-menu-item');
        const text = 'Dit is een titel';
        vlmapPane.setAttribute('data-vl-title', text);
        assert.equal(vlmapPane._titleElement.innerText, text);
    });

    it('bevat href op basis van het href attribuut', async () => {
        const element = await mapSideSheetMenuItemFixture();
        const vlmapPane = element.querySelector('vl-map-side-sheet-menu-item');
        const hrefPath = '/test-path';
        vlmapPane.setAttribute('data-vl-href', hrefPath);
        assert.equal(vlmapPane._hrefElement.getAttribute('href'), hrefPath);
    });
});
