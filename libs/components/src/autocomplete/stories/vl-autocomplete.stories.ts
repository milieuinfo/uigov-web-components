import { html } from 'lit-html';
import { autocompleteArgs, autocompleteArgTypes, complexItems } from './vl-autocomplete.stories-arg';
import { CAPTION_FORMAT, GROUP_BY } from '../vl-autocomplete.model';
import { fetchDataFromMockedApiCall } from './vl-autocomplete-mocked-api.stories-util';
import { fetchDataFromApiCall } from './vl-autocomplete-api.stories-util';
import '../vl-autocomplete.component';
import autocompleteDoc from './vl-autocomplete.stories-doc.mdx';
import { Meta, StoryFn } from '@storybook/web-components';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';

export default {
    title: 'Components/autocomplete',
    args: storyArgs(autocompleteArgs),
    argTypes: storyArgTypes(autocompleteArgTypes),
    parameters: {
        docs: {
            page: autocompleteDoc,
        },
    },
    decorators: [(story: () => unknown) => html` <div style="height: 400px;">${story()}</div>`],
} as Meta<typeof autocompleteArgs>;

export const AutocompleteDefault: StoryFn<typeof autocompleteArgs> = ({
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
    disableLoading,
}) =>
    html`
        <div class="container">
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
                ?data-vl-disable-loading=${disableLoading}
                .items=${items}
            ></vl-autocomplete>
        </div>
    `;
AutocompleteDefault.storyName = 'vl-autocomplete - default';
AutocompleteDefault.args = {
    placeholder: 'Hint: typ Gent',
    minChars: 1,
    maxSuggestions: 5,
};

export const AutocompleteGroupBySubtitle: StoryFn<typeof autocompleteArgs> = () =>
    html`
        <vl-autocomplete
            data-vl-min-chars="1"
            data-vl-group-by="${GROUP_BY.SUBTITLE}"
            .items=${complexItems}
            data-vl-caption-format="${CAPTION_FORMAT.TITLE}"
            placeholder="Hint: typ Gent"
        ></vl-autocomplete>
    `;
AutocompleteGroupBySubtitle.storyName = 'vl-autocomplete - group by subtitle';

export const AutocompleteCustomCaptionFormatter: StoryFn<typeof autocompleteArgs> = () =>
    html`
        <vl-autocomplete
            data-vl-min-chars="1"
            .items=${complexItems}
            data-vl-caption-format="${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}"
            placeholder="Hint: typ Gent"
        ></vl-autocomplete>
    `;
AutocompleteCustomCaptionFormatter.storyName = 'vl-autocomplete - custom caption formatter';

export const AutocompleteInputAndApiCall: StoryFn<typeof autocompleteArgs> = ({ disableLoading }) =>
    html`
        <vl-autocomplete
            @search=${(e: CustomEvent) => fetchDataFromApiCall(e.target, e.detail.searchTerm)}
            placeholder="Gemeente, Straat of Project"
            data-vl-min-chars="2"
            data-vl-max-suggestions="10"
            ?data-vl-disable-loading=${disableLoading}
        ></vl-autocomplete>
    `;
AutocompleteInputAndApiCall.storyName = 'vl-autocomplete - input and api call';

export const AutocompleteInputAndMockedApiCall: StoryFn<typeof autocompleteArgs> = () =>
    html`
        <vl-autocomplete
            @search=${(e: CustomEvent) => fetchDataFromMockedApiCall(e.target, e.detail.searchTerm)}
            placeholder="Gemeente, Straat of Project"
            data-vl-min-chars="2"
            data-vl-max-suggestions="5"
        ></vl-autocomplete>
    `;
AutocompleteInputAndMockedApiCall.storyName = 'vl-autocomplete - input and mocked api call';

export const AutocompleteWithoutSuggestions: StoryFn<typeof autocompleteArgs> = ({ disableLoading }) =>
    html`
        <vl-autocomplete
            data-vl-min-chars="1"
            placeholder="Hint: typ Gent"
            ?data-vl-disable-loading=${disableLoading}
        ></vl-autocomplete>
    `;
AutocompleteWithoutSuggestions.storyName = 'vl-autocomplete - without suggestions';

export const AutocompleteInSideSheet: StoryFn<typeof autocompleteArgs> = () => html`
    <vl-side-sheet>
        <vl-autocomplete
            data-vl-min-chars="1"
            .items=${complexItems}
            data-vl-caption-format="${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}"
            placeholder="Hint: typ Gent"
        ></vl-autocomplete>
    </vl-side-sheet>
`;
AutocompleteInSideSheet.storyName = 'vl-autocomplete - in side-sheet';
