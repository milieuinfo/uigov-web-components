import { awaitUntil } from '@domg-wc/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import './vl-select-location';
import LambertCoordinaat from '../../utils/lambert-coordinaat';

const selectLocationFixture = async () => fixture(html` <select is="vl-select-location"></select> `);

describe('vl-select-location', () => {
    const sandbox = sinon.createSandbox();

    const locationGent1 = {
        Municipality: 'Gent',
        Zipcode: '9000',
        Thoroughfarename: 'Charles de Kerchovelaan',
        Housenumber: '191A',
        ID: 3021631,
        FormattedAddress: 'Charles de Kerchovelaan 191A, 9000 Gent',
        Location: {
            Lat_WGS84: 51.03991219945412,
            Lon_WGS84: 3.723601443431199,
            X_Lambert72: 104751.84,
            Y_Lambert72: 192389.4,
        },
        LocationType: 'crab_huisnummer_manueleAanduidingVanPerceel',
        BoundingBox: {
            LowerLeft: {
                Lat_WGS84: 51.03991219945412,
                Lon_WGS84: 3.723601443431199,
                X_Lambert72: 104751.84,
                Y_Lambert72: 192389.4,
            },
            UpperRight: {
                Lat_WGS84: 51.03991219945412,
                Lon_WGS84: 3.723601443431199,
                X_Lambert72: 104751.84,
                Y_Lambert72: 192389.4,
            },
        },
    };

    const locationGent2 = {
        Municipality: 'Gent',
        Zipcode: '9000',
        Thoroughfarename: 'Charles de Kerchovelaan',
        Housenumber: '197',
        ID: 1210091,
        FormattedAddress: 'Charles de Kerchovelaan 197, 9000 Gent',
        Location: {
            Lat_WGS84: 51.0398710793381,
            Lon_WGS84: 3.7236600414926286,
            X_Lambert72: 104755.91,
            Y_Lambert72: 192384.79,
        },
        LocationType: 'crab_huisnummer_manueleAanduidingVanPerceel',
        BoundingBox: {
            LowerLeft: {
                Lat_WGS84: 51.0398710793381,
                Lon_WGS84: 3.7236600414926286,
                X_Lambert72: 104755.91,
                Y_Lambert72: 192384.79,
            },
            UpperRight: {
                Lat_WGS84: 51.0398710793381,
                Lon_WGS84: 3.7236600414926286,
                X_Lambert72: 104755.91,
                Y_Lambert72: 192384.79,
            },
        },
    };

    const locationAntwerpen1 = {
        Municipality: 'Antwerpen',
        Zipcode: null,
        Thoroughfarename: null,
        Housenumber: null,
        ID: 2,
        FormattedAddress: 'Antwerpen',
        Location: {
            Lat_WGS84: 51.26055097634139,
            Lon_WGS84: 4.358436586642045,
            X_Lambert72: 149279.48,
            Y_Lambert72: 216739.74,
        },
        LocationType: 'crab_gemeente',
        BoundingBox: {
            LowerLeft: {
                Lat_WGS84: 51.143359370883445,
                Lon_WGS84: 4.218833610929702,
                X_Lambert72: 139508.19,
                Y_Lambert72: 203712.17,
            },
            UpperRight: {
                Lat_WGS84: 51.377571431614676,
                Lon_WGS84: 4.498743162727715,
                X_Lambert72: 159050.77,
                Y_Lambert72: 229767.3,
            },
        },
    };

    const choicesAreLoaded = (element) => [...element._choices.choiceList.children][0].innerText != 'Zoeken op kaart';

    afterEach(() => {
        sandbox.restore();
    });

    it('er zijn default placeholders voor het zoek adres select element', async () => {
        const select = await selectLocationFixture();
        await select.ready();
        assert.equal(select._placeholderElement.innerText, 'Zoeken op kaart');
        assert.equal(select.DEFAULT_SEARCH_PLACEHOLDER, 'Zoeken op adres of coördinaat');
        assert.equal(select.DEFAULT_SEARCH_NO_RESULT, 'Geen adres gevonden');
        assert.equal(select.DEFAULT_NO_MORE_OPTIONS, 'Geen adres gevonden');
    });

    it('de default placeholder van het zoek adres select element kan gewijzigd worden', async () => {
        const select = await selectLocationFixture();
        await select.ready();
        const text1 = 'nieuwe tekst 1';
        select.setAttribute('data-vl-placeholder', text1);
        assert.equal(select._placeholderElement.innerText, text1);
        const text2 = 'splinternieuwe tekst 1';
        select.placeholder = text2;
        assert.equal(select._placeholderElement.innerText, text2);
    });

    it('het data-vl-select attribuut wordt gezet zodat de zoek functionaliteit geïnitialiseerd wordt', async () => {
        const element = await selectLocationFixture();
        assert.isTrue(element.hasAttribute('data-vl-select'));
    });

    it('wanneer de gebruiker zoekt zullen bij Geopunt de suggesties opgehaald en gevisualiseerd worden', async () => {
        const suggestions = [
            'Antwerpen',
            'Antwerpenlei, Brasschaat',
            'Antwerpenplein, Gent',
            'Antwerpenstraat, Bredene',
            'Hemiksem',
        ];
        const response = new Promise((resolve, reject) => {
            resolve(
                new Response(
                    JSON.stringify({
                        SuggestionResult: suggestions,
                    }),
                    { status: 200 }
                )
            );
        });
        const fetchStub = sandbox.stub(window, 'fetch');
        fetchStub
            .withArgs(`https://geo.api.vlaanderen.be/geolocation/Suggestion?q=${suggestions[0]}`)
            .returns(response);
        const select = await selectLocationFixture();
        await select.ready();
        select.dispatchEvent(
            new CustomEvent('search', {
                detail: {
                    value: suggestions[0],
                },
            })
        );
        await awaitUntil(() => choicesAreLoaded(select));
        assert.deepEqual(
            [...select._choices.choiceList.children].map((suggestion) => suggestion.innerText),
            suggestions
        );

        fetchStub.reset();
    });

    it('wanneer de gebruiker een Lambert-coördinaat zoekt, zullen bij Geopunt de locaties opgehaald en gevisualiseerd worden', async () => {
        const coordinate = '104719.27, 192387.25';
        const lambertCoordinaat = LambertCoordinaat.of(coordinate);
        const value = lambertCoordinaat.toString();
        const suggestions = [locationGent1, locationGent2];
        const response = new Promise((resolve, reject) => {
            resolve(
                new Response(
                    JSON.stringify({
                        LocationResult: suggestions,
                    }),
                    { status: 200 }
                )
            );
        });

        const fetchStub = sandbox.stub(window, 'fetch');
        fetchStub
            .withArgs(
                `https://geo.api.vlaanderen.be/geolocation/Location?c=5&xy=${lambertCoordinaat.x},${lambertCoordinaat.y}`
            )
            .returns(response);

        const select = await selectLocationFixture();
        await select.ready();
        select.dispatchEvent(
            new CustomEvent('search', {
                detail: {
                    value,
                },
            })
        );

        await awaitUntil(() => choicesAreLoaded(select));
        assert.deepEqual(
            [...select._choices.choiceList.children].map((suggestion) => suggestion.innerText),
            [suggestions[0].FormattedAddress, suggestions[1].FormattedAddress, `Lambert-coördinaat: ${coordinate}`]
        );

        fetchStub.reset();
    });

    it('kan de geografische locatie van het geselecteerde adres opvragen', async () => {
        const value = 'Antwerpen';
        const choices = [
            {
                value,
                label: value,
            },
        ];
        const response = new Promise((resolve, reject) => {
            resolve(
                new Response(
                    JSON.stringify(
                        {
                            LocationResult: [locationAntwerpen1],
                        },
                        { status: 200 }
                    )
                )
            );
        });
        const fetchStub = sandbox.stub(window, 'fetch');
        fetchStub.withArgs(`https://geo.api.vlaanderen.be/geolocation/Location?q=${value}`).returns(response);
        const select = await selectLocationFixture();
        await select.ready();
        select.choices = choices;
        select.value = choices[0].value;
        await awaitUntil(() => choicesAreLoaded(select));
        const location = await select.location;
        assert.deepEqual(location, [
            locationAntwerpen1.BoundingBox.LowerLeft.X_Lambert72,
            locationAntwerpen1.BoundingBox.LowerLeft.Y_Lambert72,
            locationAntwerpen1.BoundingBox.UpperRight.X_Lambert72,
            locationAntwerpen1.BoundingBox.UpperRight.Y_Lambert72,
        ]);

        fetchStub.reset();
    });

    it('kan de geografische locatie van een Lambert-coördinaat opvragen', async () => {
        const fetchSpy = sandbox.spy(window, 'fetch');
        const value = '139508.19, 203712.17';
        const lambertCoordinaat = LambertCoordinaat.of(value);
        const choices = [
            {
                value: lambertCoordinaat,
                label: `Lambert-coördinaat: ${lambertCoordinaat.toString()}`,
            },
        ];
        const select = await selectLocationFixture();
        await select.ready();
        select.choices = choices;
        select.value = choices[0].value;
        await awaitUntil(() => choicesAreLoaded(select));
        const location = await select.location;
        assert.deepEqual(location, [
            lambertCoordinaat.x - 1,
            lambertCoordinaat.y - 1,
            lambertCoordinaat.x + 1,
            lambertCoordinaat.y + 1,
        ]);
        assert.isTrue(fetchSpy.notCalled);
    });

    it('kan de geografische locatie van een Lambert-coördinaat adres opvragen', async () => {
        const fetchSpy = sandbox.spy(window, 'fetch');
        const choices = [
            {
                value: locationAntwerpen1,
                label: locationAntwerpen1.FormattedAddress,
            },
        ];
        const select = await selectLocationFixture();
        await select.ready();
        select.choices = choices;
        select.value = choices[0].value;
        await awaitUntil(() => choicesAreLoaded(select));
        const location = await select.location;
        assert.deepEqual(location, [
            locationAntwerpen1.BoundingBox.LowerLeft.X_Lambert72,
            locationAntwerpen1.BoundingBox.LowerLeft.Y_Lambert72,
            locationAntwerpen1.BoundingBox.UpperRight.X_Lambert72,
            locationAntwerpen1.BoundingBox.UpperRight.Y_Lambert72,
        ]);
        assert.isTrue(fetchSpy.notCalled);
    });

    it('verstuurt een change event wanneer een choice event getriggerd wordt', async () => {
        const select = await selectLocationFixture();
        select.addEventListener('change', () => null);
        select.dispatchEvent(new CustomEvent('choice'));
        // TODO: er wordt hier niets getest
    });
});
