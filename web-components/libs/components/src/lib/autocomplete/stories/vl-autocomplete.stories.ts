import { html } from 'lit-html';
import { autocompleteArgs, autocompleteArgTypes, complexItems } from './vl-autocomplete.stories-arg';
import { CAPTION_FORMAT, GROUP_BY } from '../vl-autocomplete.model';
import { fetchDataFromApiCall, fetchDataFromMockedApiCall } from './vl-autocomplete.stories-util';
import '../vl-autocomplete.component';

export default {
    title: 'components/autocomplete',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: autocompleteArgs,
    argTypes: autocompleteArgTypes,
};

const autocompleteTemplate = ({
    placeholder,
    initialValue,
    label,
    labelSmall,
    minChars,
    maxSuggestions,
    captionFormat,
    groupBy,
    items,
    showClear,
    clearTooltip,
    noMatchesText,
}: typeof autocompleteArgs) => html`
    <vl-autocomplete
        placeholder=${placeholder}
        data-vl-initial-value=${initialValue}
        data-vl-label=${label}
        ?data-vl-label-small=${labelSmall}
        data-vl-min-chars=${minChars}
        data-vl-max-suggestions=${maxSuggestions}
        data-vl-caption-format=${captionFormat}
        data-vl-group-by=${groupBy}
        ?data-vl-show-clear=${showClear}
        data-vl-clear-tooltip=${clearTooltip}
        data-vl-no-matches-text=${noMatchesText}
        .items=${items}
    ></vl-autocomplete>
`;

export const autocompleteDefault: any = autocompleteTemplate.bind({});
autocompleteDefault.storyName = 'vl-autocomplete - default';

export const autocompleteDefaultCaptionFormatter = () => html` <vl-autocomplete
    data-vl-min-chars="1"
    .items=${complexItems}
    placeholder="Hint: typ Gent"
></vl-autocomplete>`;
autocompleteDefaultCaptionFormatter.storyName = 'vl-autocomplete - default caption formatter';

export const autocompleteGroupBySubtitle = () => html` <vl-autocomplete
    data-vl-min-chars="1"
    data-vl-group-by="${GROUP_BY.SUBTITLE}"
    .items=${complexItems}
    data-vl-caption-format="${CAPTION_FORMAT.TITLE}"
    placeholder="Hint: typ Gent"
></vl-autocomplete>`;
autocompleteGroupBySubtitle.storyName = 'vl-autocomplete - group by subtitle';

export const autocompleteCustomCaptionFormatter = () => html` <vl-autocomplete
    data-vl-min-chars="1"
    .items=${complexItems}
    data-vl-caption-format="${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}"
    placeholder="Hint: typ Gent"
    @clear=${() => console.log('autocomplete cleared!!!')}
></vl-autocomplete>`;
autocompleteCustomCaptionFormatter.storyName = 'vl-autocomplete - custom caption formatter';

export const autocompleteInputAndMockedApiCall = () => html` <vl-autocomplete
    @search=${(e: any) => fetchDataFromMockedApiCall(e.target, e.detail.searchTerm)}
    placeholder="Gemeente, Straat of Project"
    data-vl-min-chars="2"
    data-vl-max-suggestions="5"
></vl-autocomplete>`;
autocompleteInputAndMockedApiCall.storyName = 'vl-autocomplete - input and mocked api call';

export const autocompleteInputAndApiCall = () => html`
    <vl-autocomplete
        @search=${(e: any) => fetchDataFromApiCall(e.target, e.detail.searchTerm)}
        placeholder="Gemeente, Straat of Project"
        data-vl-min-chars="2"
        data-vl-max-suggestions="10"
    ></vl-autocomplete>
`;
autocompleteInputAndApiCall.storyName = 'vl-autocomplete - input and api call';

export const autocompleteInSideSheet = () => html`
    <vl-side-sheet>
        <vl-autocomplete
            data-vl-min-chars="1"
            .items=${complexItems}
            data-vl-caption-format="${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}"
            placeholder="Hint: typ Gent"
        ></vl-autocomplete>
    </vl-side-sheet>
`;
autocompleteInSideSheet.storyName = 'vl-autocomplete - in side-sheet';
