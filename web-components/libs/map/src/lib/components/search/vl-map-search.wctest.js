import { awaitUntil } from '@domg-lib/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../vl-map';
import './vl-map-search';

const mapSearchFixture = async () => fixture(html` <vl-map-search></vl-map-search> `);

const mapWithSearchFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-search></vl-map-search>
        </vl-map>
    `);

const standaloneVlMapSearchFixture = async () =>
    fixture(html`
        <div>
            <vl-map></vl-map>
            <vl-map-search></vl-map-search>
        </div>
    `);

describe('vl-map-search', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    it('bevat een search element met correct geconfigureerd select element als input slot', async () => {
        const map = await mapSearchFixture();
        await customElements.whenDefined('vl-search');
        const searchElement = map.shadowRoot.querySelector('vl-search');
        assert.isDefined(searchElement);
        assert.isDefined(searchElement.getAttribute('data-vl-inline'));
        const selectElement = searchElement.querySelector('select');
        assert.isDefined(selectElement);
        assert.equal(selectElement.getAttribute('is'), 'vl-select-location');
    });

    it('indien vl-map-search element binnen een vl-map element zit, zal dit element toegevoegd worden aan de shadow dom', async () => {
        const map = await mapWithSearchFixture();
        await customElements.whenDefined('vl-map');
        assert.isDefined(map.shadowRoot.querySelector('vl-map-search'));
    });

    it('indien vl-map-search element niet binnen een vl-map element zit, kan de koppeling nadien manueel gebeuren', async () => {
        await customElements.whenDefined('vl-map');
        await customElements.whenDefined('vl-map-search');
        const fixture = await standaloneVlMapSearchFixture();
        const mapElement = fixture.getElementsByTagName('vl-map')[0];
        const searchElement = fixture.getElementsByTagName('vl-map-search')[0];
        searchElement.bindMap(mapElement);
        assert.equal(searchElement._map, mapElement);
    });

    it('wanneer een locatie geselecteerd wordt zal de map zoomen naar deze locatie', async () => {
        const value = 'Antwerpen';
        const choices = [
            {
                value,
                label: value,
            },
        ];
        const map = await mapWithSearchFixture();
        sandbox.spy(map, 'zoomTo');
        await customElements.whenDefined('vl-map-search');
        const searchElement = map.shadowRoot.querySelector('vl-map-search');
        const selectElement = searchElement._selectElement;
        await selectElement.ready();
        selectElement.choices = choices;
        selectElement.value = choices[0].value;
        searchElement._selectElement.dispatchEvent(new Event('change'));
        await awaitUntil(() => map.zoomTo.called);
    });

    it('wanneer een locatie geselecteerd wordt zal uitsluitend de on select callback met de locatie bounding box aangeroepen worden indien deze bestaat', async () => {
        const value = 'Antwerpen';
        const choices = [
            {
                value,
                label: value,
            },
        ];
        const map = await mapWithSearchFixture();
        await customElements.whenDefined('vl-map-search');
        const searchElement = map.shadowRoot.querySelector('vl-map-search');
        const selectElement = searchElement._selectElement;
        await selectElement.ready();
        selectElement.choices = choices;
        selectElement.value = choices[0].value;
        searchElement.onSelect((data) => {
            assert.deepEqual(data, [139508.19, 203712.17, 159050.77, 229767.3]);
        });
        searchElement._selectElement.dispatchEvent(new Event('change'));
    });

    it('zal de select placeholders doorgeven', async () => {
        const mapSearch = await mapSearchFixture();
        const select = mapSearch._selectElement;
        const attributes = ['placeholder', 'search-placeholder', 'search-empty-text', 'search-no-results-text'];
        attributes.forEach((item, index) => {
            const attribute = `data-vl-${item}`;
            assert.isFalse(select.hasAttribute(attribute));
            const value = `text-${index}`;
            mapSearch.setAttribute(attribute, value);
            assert.equal(select.getAttribute(attribute), value);
            mapSearch.removeAttribute(attribute);
            assert.isFalse(select.hasAttribute(attribute));
        });
    });
});
