import { html } from 'lit-html';
import '../vl-select.element';
import { selectArgs, selectArgTypes } from './vl-select.stories-arg';
import { filterOutClasses, formatHTML, setDefaultArgsToNothing } from '@domg-wc/common-storybook';
import { Meta, StoryFn } from '@storybook/web-components';
import selectDoc from './vl-select.stories-doc.mdx';

export default {
    title: 'Elements/select',
    parameters: {
        docs: {
            page: selectDoc,
            transformSource: (input: string) => formatHTML(filterOutClasses(input)),
        },
    },
    args: selectArgs,
    argTypes: selectArgTypes,
} as Meta<typeof selectArgs>;

const Template: StoryFn<typeof selectArgs> = (args) => {
    const {
        block,
        error,
        success,
        disabled,
        select,
        selectDisableSearch,
        selectSearchEmptyText,
        selectSearchResultLimit,
        selectSearchNoResultLimit,
        selectDeletable,
        searchPlaceholder,
        searchNoResultsText,
        noMoreOptions,
    } = setDefaultArgsToNothing(args, selectArgs);

    return html`
        <select
            is="vl-select"
            ?data-vl-block=${block}
            ?data-vl-error=${error}
            ?data-vl-success=${success}
            ?data-vl-disabled=${disabled}
            ?data-vl-select=${select}
            ?data-vl-select-disable-search=${selectDisableSearch}
            ?data-vl-select-deletable=${selectDeletable}
            ?data-vl-select-search-no-result-limit=${selectSearchNoResultLimit}
            data-vl-select-search-result-limit=${selectSearchResultLimit}
            data-vl-select-search-empty-text=${selectSearchEmptyText}
            data-vl-search-no-results-text=${searchNoResultsText}
            data-vl-search-placeholder=${searchPlaceholder}
            data-vl-no-more-options=${noMoreOptions}
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
};

export const SelectDefault: StoryFn<typeof selectArgs> = Template.bind({});
SelectDefault.storyName = 'vl-select - default';

export const SelectExtended: StoryFn<typeof selectArgs> = Template.bind({});
SelectExtended.storyName = 'vl-select - extended';
SelectExtended.args = {
    select: true,
};
