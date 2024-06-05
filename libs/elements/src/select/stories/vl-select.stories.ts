import { html } from 'lit-html';
import '../vl-select.element';
import { selectArgs, selectArgTypes } from './vl-select.stories-arg';
import { Meta } from '@storybook/web-components';
import selectDoc from './vl-select.stories-doc.mdx';
import { story } from '@domg-wc/common-storybook';

export default {
    title: 'Elements/select [deprecated]',
    tags: ['autodocs'],
    args: selectArgs,
    argTypes: selectArgTypes,
    parameters: {
        docs: {
            page: selectDoc,
        },
    },
} as Meta<typeof selectArgs>;

const Template = story(
    selectArgs,
    ({
        block,
        error,
        success,
        disabled,
        noMoreOptions,
        position,
        select,
        selectDisableSearch,
        selectSearchEmptyText,
        selectSearchResultLimit,
        selectSearchNoResultLimit,
        selectDeletable,
        searchPlaceholder,
        searchNoResultsText,
        onVlSelectSearch,
    }) => html`
        <select
            is="vl-select"
            ?data-vl-block=${block}
            ?data-vl-error=${error}
            ?data-vl-success=${success}
            ?data-vl-disabled=${disabled}
            data-vl-no-more-options=${noMoreOptions}
            data-vl-position=${position}
            ?data-vl-select=${select}
            ?data-vl-select-disable-search=${selectDisableSearch}
            ?data-vl-select-deletable=${selectDeletable}
            ?data-vl-select-search-no-result-limit=${selectSearchNoResultLimit}
            data-vl-select-search-result-limit=${selectSearchResultLimit}
            data-vl-select-search-empty-text=${selectSearchEmptyText}
            data-vl-search-no-results-text=${searchNoResultsText}
            data-vl-search-placeholder=${searchPlaceholder}
            @vl-select-search=${onVlSelectSearch}
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
    `
);

export const SelectDefault = Template.bind({});
SelectDefault.storyName = 'vl-select - default';

export const SelectExtended = Template.bind({});
SelectExtended.storyName = 'vl-select - extended';
SelectExtended.args = {
    select: true,
};
SelectExtended.decorators = [(story: () => unknown) => html` <div style="height: 400px;">${story()}</div>`];
