import { html } from 'lit-html';
import '../vl-rich-data.component';
import '../../rich-data-table/vl-rich-data-field.component';

export default {
    title: 'components/rich-data',
};

export const richDataDefault = () => {
    return html` <vl-rich-data>
        <span slot="no-content">Geen resultaten gevonden</span>
    </vl-rich-data>`;
};
richDataDefault.storyName = 'vl-rich-data - default';

export const richDataPager = () => {
    return html` <vl-rich-data>
        <vl-pager slot="pager" total-items="25" items-per-page="5" current-page="1"></vl-pager>
        <vl-search-results slot="content">
            <vl-search-result>
                <div>Resultaat 1</div>
            </vl-search-result>
        </vl-search-results>
        <span slot="no-content">Geen resultaten gevonden</span>
    </vl-rich-data>`;
};
richDataPager.storyName = 'vl-rich-data - pager';

export const richDataClosableFilter = () => {
    return html`
        <vl-rich-data data-vl-filter-title="title" data-vl-filter-closable>
            <div is="vl-search-filter" slot="filter">
                <form is="vl-form" id="form">
                    <label>Hier kunnen filtervelden komen</label>
                    <input is="vl-input-field" type="text" name="filter1" />
                </form>
                <div>
                    <button is="vl-button-link" type="reset" form="form">Zoekopdracht verwijderen</button>
                </div>
            </div>
            <vl-pager slot="pager" total-items="20" items-per-page="5" current-page="1"></vl-pager>
            <vl-search-results slot="content">
                <vl-search-result>
                    <div>Resultaat 1</div>
                </vl-search-result>
                <vl-search-result>
                    <div>Resultaat 2</div>
                </vl-search-result>
                <vl-search-result>
                    <div>Resultaat 3</div>
                </vl-search-result>
                <vl-search-result>
                    <div>Resultaat 4</div>
                </vl-search-result>
                <vl-search-result>
                    <div>Resultaat 5</div>
                </vl-search-result>
            </vl-search-results>
            <span slot="toggle-filter-button-text">Filter</span>
            <span slot="close-filter-button-text">Sluit</span>
        </vl-rich-data>
    `;
};
richDataClosableFilter.storyName = 'vl-rich-data - closable filter';
