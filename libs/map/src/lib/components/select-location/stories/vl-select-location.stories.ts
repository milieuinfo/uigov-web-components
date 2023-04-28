import { html } from 'lit';
import '../vl-select-location';
import { Meta, StoryFn } from '@storybook/web-components';
import { selectLocationArg, selectLocationArgTypes } from './vl-select-location.stories-arg';
import mapSelectLocationDoc from './vl-select-location.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';

export default {
    title: 'map/select-location',
    args: selectLocationArg,
    argTypes: selectLocationArgTypes,
    parameters: {
        docs: {
            page: mapSelectLocationDoc,
        },
    },
} as Meta<typeof selectLocationArg>;

export const SelectLocationDefault: StoryFn<typeof selectLocationArg> = (args) => {
    const { onChange, onSearch } = args;
    const {
        placeholder,
        searchEmptyText,
        searchNoResultsText,
        searchPlaceholder,
        selectDeletable,
        selectSearchResultLimit,
    } = setDefaultArgsToNothing(args, selectLocationArg);

    return html`
        <select
            is="vl-select-location"
            data-vl-placeholder=${placeholder}
            data-vl-search-empty-text=${searchEmptyText}
            data-vl-search-no-results-text=${searchNoResultsText}
            data-vl-search-placeholder=${searchPlaceholder}
            data-vl-select-deletable=${selectDeletable}
            data-vl-select-search-result-limit=${selectSearchResultLimit}
            @change=${onChange}
            @search=${onSearch}
        ></select>
    `;
};
SelectLocationDefault.storyName = 'vl-select-location - default';
