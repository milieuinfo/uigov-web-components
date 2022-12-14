import './app.element.scss';

export class AppElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h1 is="vl-h1" data-vl-alt data-vl-no-space-bottom>Elementen Overzicht UIG</h1>
                    <playground-map></playground-map>
                    <playground-action-group></playground-action-group>
                    <playground-breadcrumb></playground-breadcrumb>
                    <playground-buttons></playground-buttons>
                    <playground-data-table></playground-data-table>
                    <playground-doormat></playground-doormat>
                    <playground-form></playground-form>
                    <playground-form-grid></playground-form-grid>
                    <playground-form-group></playground-form-group>
                    <playground-grid></playground-grid>
                    <playground-icon></playground-icon>
                    <playground-image></playground-image>
                    <playground-infotext></playground-infotext>
                    <playground-input-addon></playground-input-addon>
                    <playground-input-field></playground-input-field>
                    <playground-input-group></playground-input-group>
                    <playground-introduction></playground-introduction>
                    <playground-link></playground-link>
                    <playground-link-list></playground-link-list>
                    <playground-multiselect></playground-multiselect>
                    <playground-search-filter></playground-search-filter>
                    <playground-search-results></playground-search-results>
                    <playground-select></playground-select>
                    <playground-text></playground-text>
                    <playground-titles></playground-titles>
                    <!--<playground-side-navigation></playground-side-navigation>-->
                    <playground-toaster></playground-toaster>
                    <playground-video-player></playground-video-player>

                    <h1 is="vl-h1" data-vl-alt data-vl-no-space-bottom>Componenten Overzicht UIG</h1>
                    <playground-alert></playground-alert>
                    <playground-annotation></playground-annotation>
                    <playground-autocomplete></playground-autocomplete>
                    <playground-rich-data></playground-rich-data>
                    <playground-rich-data-table></playground-rich-data-table>
                    <playground-spotlight></playground-spotlight>
                    <playground-http-error-message></playground-http-error-message>
                    <playground-proza-message></playground-proza-message>
                    <playground-contact-card></playground-contact-card>
                    <playground-properties></playground-properties>
                    <playground-infoblock></playground-infoblock>
                    <playground-content-header></playground-content-header>
                    <playground-document></playground-document>
                    <playground-functional-header></playground-functional-header>
                    <playground-pager></playground-pager>
                    <playground-search></playground-search>
                    <playground-accordion></playground-accordion>
                    <playground-infotile></playground-infotile>
                    <playground-steps></playground-steps>
                    <playground-datepicker></playground-datepicker>
                    <playground-tabs></playground-tabs>
                    <playground-code-preview></playground-code-preview>
                    <playground-modal></playground-modal>
                    <playground-tooltip></playground-tooltip>
                    <playground-upload></playground-upload>
                    <playground-description-data></playground-description-data>
                    <playground-progress-bar></playground-progress-bar>
                    <playground-share-buttons></playground-share-buttons>
                    <playground-toggle-button></playground-toggle-button>
                    <playground-loader></playground-loader>
                    <playground-pill></playground-pill>
                    <playground-typography></playground-typography>
                    <playground-checkbox></playground-checkbox>
                    <playground-radio></playground-radio>
                </div>
            </div>
      `;
    }
}

customElements.define('playground-app', AppElement);
