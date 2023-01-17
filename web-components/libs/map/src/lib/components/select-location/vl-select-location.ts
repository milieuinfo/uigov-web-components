import { webComponent } from '@domg-wc/common-utilities';
import { VlSelect } from '@domg-wc/elements';
import LambertCoordinaat from '../../utils/lambert-coordinaat';

/**
 * VlSelectLocation
 * @class
 * @classdesc Component om een locatie te zoeken en selecteren.
 *
 * @extends VlSelect
 *
 * @property {string} [data-vl-placeholder=Lokaliseer adres] - Attribuut bepaalt de placeholder van het zoek adres select element.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-search.html|Demo}
 */
@webComponent('vl-select-location', { extends: 'select' })
export class VlSelectLocation extends VlSelect {
    static get _observedAttributes() {
        return ['placeholder'];
    }

    constructor() {
        super();
        this.setAttribute('data-vl-select', '');
        this._addSearchEventListener();
        this._addChoiceEventListener();
        this._addPlaceholder();
        this.placeholder = 'Zoeken op kaart';
    }

    /**
     * Geeft de bounding box op basis van de geselecteerde locatie.
     *
     * @return {Promise}
     */
    get location() {
        const { value } = this._choices.getValue();
        if (value) {
            if (value.BoundingBox) {
                return Promise.resolve([
                    value.BoundingBox.LowerLeft.X_Lambert72,
                    value.BoundingBox.LowerLeft.Y_Lambert72,
                    value.BoundingBox.UpperRight.X_Lambert72,
                    value.BoundingBox.UpperRight.Y_Lambert72,
                ]);
            }
            if (LambertCoordinaat.isLambertCoordinaat(value)) {
                return Promise.resolve([value.x - 1, value.y - 1, value.x + 1, value.y + 1]);
            }
            return fetch(this._locationUrl + encodeURIComponent(value))
                .then((response) => response.json())
                .then((location) => [
                    location.LocationResult[0].BoundingBox.LowerLeft.X_Lambert72,
                    location.LocationResult[0].BoundingBox.LowerLeft.Y_Lambert72,
                    location.LocationResult[0].BoundingBox.UpperRight.X_Lambert72,
                    location.LocationResult[0].BoundingBox.UpperRight.Y_Lambert72,
                ]);
        } else {
            return undefined;
        }
    }

    set placeholder(value) {
        this._placeholderElement.innerText = value;
    }

    get _url() {
        return 'https://geo.api.vlaanderen.be/geolocation';
    }

    get _searchUrl() {
        return `${this._url}/Suggestion?q=`;
    }

    get _locationUrl() {
        return `${this._url}/Location?q=`;
    }

    get _locationXyUrl() {
        return `${this._url}/Location?c=5&xy=`;
    }

    // TODO: dit klopt eigenlijk niet, hier stond option[placeholder], maar dat zit niet in de gerenderde DOM
    //  -> voor compatibiliteit de [placeholder] uit de selector verwijderd
    //  -> te refactoren, _placeholderElement is eigenlijk interne keuken
    //  -> geeft nu zelfs niet perse de placeholder terug (wel direct na initialisatie)
    get _placeholderElement() {
        return this.querySelector('option');
    }

    _placeholderChangedCallback(oldValue, newValue) {
        this.placeholder = newValue;
    }

    _addSearchEventListener() {
        this.addEventListener('search', (event) => {
            if (event && event.detail && event.detail.value) {
                const lambertCoordinaat = LambertCoordinaat.of(event.detail.value);

                if (LambertCoordinaat.isLambertCoordinaat(lambertCoordinaat)) {
                    this._searchChoicesByLambertCoordinaat(lambertCoordinaat);
                } else {
                    this._searchChoicesByValue(event.detail.value);
                }
            }
        });
    }

    _searchChoicesByValue(searchValue) {
        fetch(this._searchUrl + encodeURIComponent(searchValue))
            .then((response) => response.json())
            .then((data) => {
                this.choices = this._mapSuggestionResultToChoices(data);
            });
    }

    _mapSuggestionResultToChoices(data) {
        if (data && data.SuggestionResult) {
            return data.SuggestionResult.map((resultaat) => ({
                value: resultaat,
                label: resultaat,
            }));
        }
        return [];
    }

    _searchChoicesByLambertCoordinaat(lambertCoordinaat) {
        fetch(`${this._locationXyUrl + lambertCoordinaat.x},${lambertCoordinaat.y}`)
            .then((response) => response.json())
            .then((data) => {
                this.choices = [this._mapLambertCoordinaatToChoice(lambertCoordinaat)].concat(
                    this._mapLocationResultToChoices(data)
                );
            });
    }

    _mapLambertCoordinaatToChoice(lambertCoordinaat) {
        return {
            value: lambertCoordinaat,
            label: `Lambert-coördinaat: ${lambertCoordinaat.toString()}`,
        };
    }

    _mapLocationResultToChoices(data) {
        if (data && data.LocationResult) {
            return data.LocationResult.map((locationResult) => ({
                value: locationResult,
                label: locationResult.FormattedAddress,
            }));
        }
        return [];
    }

    _addChoiceEventListener() {
        this.addEventListener('choice', () => setTimeout(() => this.dispatchEvent(new Event('change'))));
    }

    _addPlaceholder() {
        this.insertAdjacentHTML('afterbegin', `<option placeholder></option>`);
    }

    get DEFAULT_SEARCH_PLACEHOLDER() {
        return 'Zoeken op adres of coördinaat';
    }

    get DEFAULT_NO_MORE_OPTIONS() {
        return 'Geen adres gevonden';
    }

    get DEFAULT_SEARCH_NO_RESULT() {
        return 'Geen adres gevonden';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-select-location': VlSelectLocation;
    }
}
