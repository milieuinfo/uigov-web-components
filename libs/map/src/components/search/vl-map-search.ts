import { BaseElementOfType, registerWebComponents, webComponent } from '@domg-wc/common';
import { vlElementsStyle, VlSelect, SELECT_POSITION } from '@domg-wc/elements';
import { VlSearchComponent } from '@domg-wc/components';
import OlOverlay from 'ol/Overlay';
import { VlSelectLocation } from '../select-location/vl-select-location';

@webComponent('vl-map-search')
export class VlMapSearch extends BaseElementOfType(HTMLElement) {
    static {
        registerWebComponents([VlSelect, VlSelectLocation, VlSearchComponent]);
    }

    static get _observedAttributes() {
        return ['placeholder', 'search-placeholder', 'search-empty-text', 'search-no-results-text'];
    }

    static get _observedClassAttributes() {
        return ['with-offset'];
    }

    get _classPrefix() {
        return 'vl-map-search--';
    }

    constructor() {
        super(`
          <style>
            ${vlElementsStyle}
            :host {
              display: block;
            }

            vl-search {
                display: block;
                height: 3.5rem;
            }
          </style>
          <vl-search id="search" data-vl-inline>
            <select is="vl-select-location" slot="input" data-vl-position=${SELECT_POSITION.BOTTOM}></select>
          </vl-search>
        `);
        this.configure();
    }

    connectedCallback() {
        this._selectElement.addEventListener('change', this.changeLocation);
        this.addEventListener('keypress', this.stopPropagation);
    }

    get _selectElement() {
        return this._shadow.querySelector('select');
    }

    bindMap(map) {
        this._map = map;
    }

    /**
     * Bepaal callback die uitgevoerd wordt bij selectie van een locatie via de map search.
     *
     * @param {Function} callback
     */
    onSelect(callback) {
        this._onSelect = callback;
    }

    private zoomTo(boundingBox) {
        this._map.zoomTo(boundingBox, 14);
    }

    private configure() {
        customElements.whenDefined('vl-map').then(() => {
            if (this.parentNode && this.parentNode.map) {
                this._map = this.parentNode._shadow.host;
                this._map.map.addOverlay(
                    new OlOverlay(<any>{
                        className: 'vl-map-search__overlaycontainer',
                        element: this,
                    })
                );
            }
        });
    }

    private changeLocation = (e) => {
        if (e.target.location) {
            e.target.location.then((location) => {
                if (this._onSelect) {
                    this._onSelect(location);
                } else {
                    this.zoomTo(location);
                }
            });
        }
    };

    private stopPropagation = (e) => {
        e.stopPropagation();
    };

    _placeholderChangedCallback(oldValue, newValue) {
        this._dispatchSelectAttribute('placeholder', newValue);
    }

    _searchPlaceholderChangedCallback(oldValue, newValue) {
        this._dispatchSelectAttribute('search-placeholder', newValue);
    }

    _searchEmptyTextChangedCallback(oldValue, newValue) {
        this._dispatchSelectAttribute('search-empty-text', newValue);
    }

    _searchNoResultsTextChangedCallback(oldValue, newValue) {
        this._dispatchSelectAttribute('search-no-results-text', newValue);
    }

    _dispatchSelectAttribute(attribute, value) {
        if (value != undefined) {
            this._selectElement.setAttribute(`${VlMapSearch.attributePrefix}${attribute}`, value);
        } else {
            this._selectElement.removeAttribute(`${VlMapSearch.attributePrefix}${attribute}`);
        }
    }

    disconnectedCallback() {
        this.removeEventListener('keypress', this.stopPropagation);
        this._selectElement?.removeEventListener('change', this.changeLocation);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-search': VlMapSearch;
    }
}
