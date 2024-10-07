import { registerWebComponents } from '@domg-wc/common';
import { html } from 'lit';
import LambertCoordinaat from '../../utils/lambert-coordinaat';
import { VlSelectLocation } from './vl-select-location';

registerWebComponents([VlSelectLocation]);

const selectLocationFixture = html` <select is="vl-select-location"></select> `;

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

const choicesAreLoaded = (element) =>
    element?._choices?.choiceList?.children &&
    ![...element?._choices?.choiceList?.children][0]?.innerText?.includes('Zoeken op kaart');

describe('vl-select-location', () => {
    it('er zijn default placeholders voor het zoek adres select element', () => {
        cy.mount(selectLocationFixture);
        cy.runTestFor<VlSelectLocation>('select', (vlSelectLocation) => {
            expect(vlSelectLocation._placeholderElement.innerText).to.be.equal('Zoeken op kaart');
            expect(vlSelectLocation.DEFAULT_SEARCH_PLACEHOLDER).to.be.equal('Zoeken op adres of coördinaat');
            expect(vlSelectLocation.DEFAULT_SEARCH_NO_RESULT).to.be.equal('Geen adres gevonden');
            expect(vlSelectLocation.DEFAULT_NO_MORE_OPTIONS).to.be.equal('Geen adres gevonden');
        });
    });

    it('de default placeholder van het zoek adres select element kan gewijzigd worden', () => {
        cy.mount(selectLocationFixture);
        cy.runTestFor<VlSelectLocation>('select', (vlSelectLocation) => {
            const text1 = 'nieuwe tekst 1';
            vlSelectLocation.setAttribute('data-vl-placeholder', text1);
            expect(vlSelectLocation._placeholderElement.innerText).to.be.equal(text1);
            const text2 = 'splinternieuwe tekst 1';
            vlSelectLocation.placeholder = text2;
            expect(vlSelectLocation._placeholderElement.innerText).to.be.equal(text2);
        });
    });

    it('het data-vl-select attribuut wordt gezet zodat de zoek functionaliteit geïnitialiseerd wordt', () => {
        cy.mount(selectLocationFixture);
        cy.runTestFor<VlSelectLocation>('select', (vlSelectLocation) => {
            expect(vlSelectLocation.hasAttribute('data-vl-select')).to.be.true;
        });
    });

    it('wanneer de gebruiker zoekt zullen bij Geopunt de suggesties opgehaald en gevisualiseerd worden', () => {
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
        cy.stub(window, 'fetch')
            .withArgs(`https://geo.api.vlaanderen.be/geolocation/Suggestion?q=${suggestions[0]}`)
            .returns(<any>response);
        cy.mount(selectLocationFixture);
        cy.runTestFor<VlSelectLocation>('select', (vlSelectLocation) => {
            cy.wrap(vlSelectLocation.ready).then(() => {
                vlSelectLocation.dispatchEvent(
                    new CustomEvent('search', {
                        detail: {
                            value: suggestions[0],
                        },
                    })
                );
                cy.waitUntil(() => choicesAreLoaded(vlSelectLocation)).then(() => {
                    assert.deepEqual(
                        [...vlSelectLocation._choices.choiceList.children].map((suggestion) =>
                            suggestion.innerText.trim()
                        ),
                        suggestions
                    );
                });
            });
        });
    });

    it('wanneer de gebruiker een Lambert-coördinaat zoekt, zullen bij Geopunt de locaties opgehaald en gevisualiseerd worden', () => {
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
        cy.stub(window, 'fetch')
            .withArgs(
                `https://geo.api.vlaanderen.be/geolocation/Location?c=5&xy=${lambertCoordinaat.x},${lambertCoordinaat.y}`
            )
            .returns(<any>response);
        cy.mount(selectLocationFixture);
        cy.runTestFor<VlSelectLocation>('select', (vlSelectLocation) => {
            cy.wrap(vlSelectLocation.ready).then(() => {
                vlSelectLocation.dispatchEvent(
                    new CustomEvent('search', {
                        detail: {
                            value,
                        },
                    })
                );
                cy.waitUntil(() => choicesAreLoaded(vlSelectLocation)).then(() => {
                    assert.deepEqual(
                        [...vlSelectLocation._choices.choiceList.children].map((suggestion) =>
                            suggestion.innerText.trim()
                        ),
                        [
                            suggestions[0].FormattedAddress,
                            suggestions[1].FormattedAddress,
                            `Lambert-coördinaat: ${coordinate}`,
                        ]
                    );
                });
            });
        });
    });

    it('kan de geografische locatie van het geselecteerde adres opvragen', () => {
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
                        <any>{ status: 200 }
                    )
                )
            );
        });
        cy.stub(window, 'fetch')
            .withArgs(`https://geo.api.vlaanderen.be/geolocation/Location?q=${value}`)
            .returns(<any>response);
        cy.mount(selectLocationFixture);
        cy.runTestFor<VlSelectLocation>('select', (vlSelectLocation) => {
            cy.wait(0)
                .wrap(vlSelectLocation.ready)
                .then(() => {
                    vlSelectLocation.choices = choices;
                    vlSelectLocation.value = choices[0].value;
                    cy.waitUntil(() => choicesAreLoaded(vlSelectLocation)).then(() => {
                        vlSelectLocation.location.then((location) =>
                            assert.deepEqual(location, [
                                locationAntwerpen1.BoundingBox.LowerLeft.X_Lambert72,
                                locationAntwerpen1.BoundingBox.LowerLeft.Y_Lambert72,
                                locationAntwerpen1.BoundingBox.UpperRight.X_Lambert72,
                                locationAntwerpen1.BoundingBox.UpperRight.Y_Lambert72,
                            ])
                        );
                    });
                });
        });
    });

    it('kan de geografische locatie van een Lambert-coördinaat opvragen', () => {
        const fetchSpy = cy.spy(window, 'fetch');
        const value = '139508.19, 203712.17';
        const lambertCoordinaat = LambertCoordinaat.of(value);
        const choices = [
            {
                value: lambertCoordinaat,
                label: `Lambert-coördinaat: ${lambertCoordinaat.toString()}`,
            },
        ];
        cy.mount(selectLocationFixture);
        cy.runTestFor<VlSelectLocation>('select', (vlSelectLocation) => {
            cy.wait(0)
                .wrap(vlSelectLocation.ready)
                .then(() => {
                    vlSelectLocation.choices = choices;
                    vlSelectLocation.value = choices[0].value as any as string;
                    cy.waitUntil(() => choicesAreLoaded(vlSelectLocation)).then(() => {
                        vlSelectLocation.location.then((location) => {
                            assert.deepEqual(location, [
                                lambertCoordinaat.x - 1,
                                lambertCoordinaat.y - 1,
                                lambertCoordinaat.x + 1,
                                lambertCoordinaat.y + 1,
                            ]);
                            expect(fetchSpy.notCalled).to.be.not.called;
                        });
                    });
                });
        });
    });

    it('kan de geografische locatie van een Lambert-coördinaat adres opvragen', () => {
        const fetchSpy = cy.spy(window, 'fetch');
        const choices = [
            {
                value: locationAntwerpen1,
                label: locationAntwerpen1.FormattedAddress,
            },
        ];
        cy.mount(selectLocationFixture);
        cy.runTestFor<VlSelectLocation>('select', (vlSelectLocation) => {
            cy.wait(0)
                .wrap(vlSelectLocation.ready)
                .then(() => {
                    vlSelectLocation.choices = choices;
                    vlSelectLocation.value = choices[0].value as any as string;
                    cy.waitUntil(() => choicesAreLoaded(vlSelectLocation)).then(() => {
                        vlSelectLocation.location.then((location) => {
                            assert.deepEqual(location, [
                                locationAntwerpen1.BoundingBox.LowerLeft.X_Lambert72,
                                locationAntwerpen1.BoundingBox.LowerLeft.Y_Lambert72,
                                locationAntwerpen1.BoundingBox.UpperRight.X_Lambert72,
                                locationAntwerpen1.BoundingBox.UpperRight.Y_Lambert72,
                            ]);
                            expect(fetchSpy.notCalled).to.be.not.called;
                        });
                    });
                });
        });
    });

    it('verstuurt een change event wanneer een choice event getriggerd wordt', () => {
        cy.mount(selectLocationFixture);
        cy.runTestFor<VlSelectLocation>('select', (vlSelectLocation) => {
            vlSelectLocation.addEventListener('change', () => null);
            vlSelectLocation.dispatchEvent(new CustomEvent('choice'));
            // zo gemigreerd van de vorige testen, maar er wordt hier niets getest
        });
    });
});
