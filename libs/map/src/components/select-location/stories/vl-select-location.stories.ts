import { html } from 'lit';
import '../vl-select-location';
import { Meta } from '@storybook/web-components';
import { selectLocationArg, selectLocationArgTypes } from './vl-select-location.stories-arg';
import mapSelectLocationDoc from './vl-select-location.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/select-location',
    tags: ['autodocs'],
    args: storyArgs(selectLocationArg),
    argTypes: storyArgTypes(selectLocationArgTypes),
    parameters: {
        docs: {
            page: mapSelectLocationDoc,
        },
    },
    decorators: [(story: () => unknown) => html` <div style="height: 250px;">${story()}</div>`],
} as Meta<typeof selectLocationArg>;

export const SelectLocationDefault = story(
    selectLocationArg,
    ({
        placeholder,
        searchEmptyText,
        searchNoResultsText,
        searchPlaceholder,
        selectDeletable,
        selectSearchResultLimit,
        onChange,
        onSearch,
    }) => html`
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
    `
);
SelectLocationDefault.storyName = 'vl-select-location - default';
