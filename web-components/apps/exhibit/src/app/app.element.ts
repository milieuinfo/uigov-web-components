import './app.element.scss';

export class AppElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
<!--                    <h1 is="vl-h1" data-vl-alt data-vl-no-space-bottom>Elementen Overzicht UIG</h1>-->
<!--                    <exhibit-buttons></exhibit-buttons>-->
<!--                    <exhibit-breadcrumb></exhibit-breadcrumb>-->
<!--                    <exhibit-introduction></exhibit-introduction>-->
<!--                    <exhibit-titles></exhibit-titles>-->
<!--                    <exhibit-image></exhibit-image>-->
<!--                    <exhibit-icon></exhibit-icon>-->
<!--                    <exhibit-link></exhibit-link>-->
<!--                    <exhibit-text></exhibit-text>-->
<!--                    <exhibit-form></exhibit-form>-->
<!--                    <exhibit-form-group></exhibit-form-group>-->
<!--                    <exhibit-form-grid></exhibit-form-grid>-->
<!--                    <exhibit-grid></exhibit-grid>-->
<!--                    <exhibit-input-field></exhibit-input-field>-->
<!--                    <exhibit-input-addon></exhibit-input-addon>-->
<!--                    <exhibit-input-group></exhibit-input-group>-->
<!--                    <exhibit-link-list></exhibit-link-list>-->
<!--                    <exhibit-data-table></exhibit-data-table>-->
<!--                    <exhibit-action-group></exhibit-action-group>-->
<!--                    <exhibit-doormat></exhibit-doormat>-->
<!--                    <exhibit-infotext></exhibit-infotext>-->
<!--                    <exhibit-search-filter></exhibit-search-filter>-->
<!--                    <exhibit-search-results></exhibit-search-results>-->
<!--                    <exhibit-select></exhibit-select>-->
<!--                    <exhibit-multiselect></exhibit-multiselect>-->
<!--                    &lt;!&ndash;<exhibit-side-navigation></exhibit-side-navigation>&ndash;&gt;-->
<!--                    <exhibit-toaster></exhibit-toaster>-->
<!--                    <exhibit-video-player></exhibit-video-player>-->

                    <h1 is="vl-h1" data-vl-alt data-vl-no-space-bottom>Componenten Overzicht UIG</h1>
                    <exhibit-alert></exhibit-alert>
                    <exhibit-autocomplete></exhibit-autocomplete>
                    <exhibit-annotation></exhibit-annotation>
                    <exhibit-rich-data></exhibit-rich-data>
                    <exhibit-rich-data-table></exhibit-rich-data-table>
                    <exhibit-spotlight></exhibit-spotlight>
                    <exhibit-http-error-message></exhibit-http-error-message>
<!--                    <exhibit-proza-message></exhibit-proza-message>-->
<!--                    <exhibit-contact-card></exhibit-contact-card>-->
<!--                    <exhibit-properties></exhibit-properties>-->
<!--                    <exhibit-infoblock></exhibit-infoblock>-->
<!--                    <exhibit-content-header></exhibit-content-header>-->
<!--                    <exhibit-document></exhibit-document>-->
<!--                    <exhibit-functional-header></exhibit-functional-header>-->
<!--                    <exhibit-pager></exhibit-pager>-->
<!--                    <exhibit-search></exhibit-search>-->
<!--                    <exhibit-accordion></exhibit-accordion>-->
<!--                    <exhibit-infotile></exhibit-infotile>-->
<!--                    <exhibit-steps></exhibit-steps>-->
<!--                    <exhibit-datepicker></exhibit-datepicker>-->
<!--                    <exhibit-tabs></exhibit-tabs>-->
<!--                    <exhibit-code-preview></exhibit-code-preview>-->
<!--                    <exhibit-modal></exhibit-modal>-->
<!--                    <exhibit-tooltip></exhibit-tooltip>-->
<!--                    <exhibit-upload></exhibit-upload>-->
<!--                    <exhibit-description-data></exhibit-description-data>-->
<!--                    <exhibit-progress-bar></exhibit-progress-bar>-->
<!--                    <exhibit-share-buttons></exhibit-share-buttons>-->
<!--                    <exhibit-toggle-button></exhibit-toggle-button>-->
<!--                    <exhibit-loader></exhibit-loader>-->
<!--                    <exhibit-pill></exhibit-pill>-->
<!--                    <exhibit-typography></exhibit-typography>-->
<!--                    <exhibit-checkbox></exhibit-checkbox>-->
<!--                    <exhibit-radio></exhibit-radio>-->
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-app', AppElement);
