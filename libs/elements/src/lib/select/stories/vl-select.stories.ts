import { html } from 'lit-html';
import '../vl-select.element';
import { selectArgs, selectArgTypes } from './vl-select.stories-arg';

export default {
    title: 'Elements/select',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: selectArgs,
    argTypes: selectArgTypes,
};

export const selectDefault = ({
    block,
    error,
    success,
    disabled,
    select,
    selectSearch,
    selectSearchEmptyText,
    selectSearchResultLimit,
    selectSearchNoResultLimit,
    selectDeletable,
    searchPlaceholder,
    searchNoResultsText,
    noMoreOptions,
}: typeof selectArgs) => html`
    <select
        is="vl-select"
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-success=${success}
        ?data-vl-disabled=${disabled}
        ?data-vl-select=${select}
        ?data-vl-select-search=${selectSearch}
        data-vl-select-search-empty-text=${selectSearchEmptyText}
        data-vl-select-search-result-limit=${selectSearchResultLimit}
        data-vl-select-search-no-result-limit=${selectSearchNoResultLimit}
        ?data-vl-select-deletable=${selectDeletable}
        data-vl-search-placeholder=${searchPlaceholder}
        data-vl-search-no-results-text=${searchNoResultsText}
        data-vl-no-more-options=${noMoreOptions}
        data-cy="select"
    >
        <option value="Belgium" data-cy="option-1">België</option>
        <option value="Germany" data-cy="option-2">Duitsland</option>
        <option value="France" data-cy="option-3">Frankrijk</option>
    </select>
`;
selectDefault.storyName = 'vl-select - default';

export const selectNotSearchable = () => html`
    <select
        is="vl-select"
        id="select-not-searchable"
        tabindex="0"
        data-vl-select=""
        data-vl-select-search="false"
        data-cy="select"
    >
        <optgroup label="Landen">
            <option value="België">België</option>
            <option value="Duitsland">Duitsland</option>
            <option value="Frankrijk">Frankrijk</option>
        </optgroup>
        <optgroup label="Steden">
            <option value="Brugge">Brugge</option>
            <option value="Brussel">Brussel</option>
            <option value="Gent">Gent</option>
        </optgroup>
    </select>
`;
selectNotSearchable.storyName = 'vl-select - not searchable';
selectNotSearchable.parameters = {
    controls: { hideNoControlsWarning: false },
};
