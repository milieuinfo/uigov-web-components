import { story } from '@domg-wc/common-storybook';
import { selectArgs, selectArgTypes } from './vl-select.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import selectDocs from './vl-select.stories-doc.mdx';
import '../vl-select.component';

export default {
    title: 'Components-next/form/select-next',
    tags: ['autodocs'],
    args: selectArgs,
    argTypes: selectArgTypes,
    parameters: {
        docs: {
            page: selectDocs,
            story: {
                height: '300px',
            },
        },
    },
} as Meta<typeof selectArgs>;

const SelectTemplate = story(
    selectArgs,
    ({
        id,
        name,
        label,
        required,
        disabled,
        error,
        success,
        options,
        placeholder,
        deletable,
        multiple,
        search,
        position,
        resultLimit,
        noResultsText,
        noChoicesText,
        searchPlaceholder,
        onVlSelect,
    }) => {
        return html` <vl-select-next
            id=${id}
            name=${name}
            label=${label}
            ?required=${required}
            ?disabled=${disabled}
            ?error=${error}
            ?success=${success}
            .options=${options}
            placeholder=${placeholder}
            ?deletable=${deletable}
            ?multiple=${multiple}
            ?search=${search}
            position=${position}
            result-limit=${resultLimit}
            no-results-text=${noResultsText}
            no-choices-text=${noChoicesText}
            search-placeholder=${searchPlaceholder}
            @vl-select=${onVlSelect}
        ></vl-select-next>`;
    }
);

export const SelectDefault = SelectTemplate.bind({});
SelectDefault.storyName = 'vl-select-next - default';
SelectDefault.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    options: [
        { label: 'Hasselt', value: 'hasselt' },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' },
    ],
};

export const SelectSearch = SelectTemplate.bind({});
SelectSearch.storyName = 'vl-select-next - search';
SelectSearch.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    search: true,
    options: [
        { label: 'Hasselt', value: 'hasselt' },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' },
    ],
};

export const SelectDeletable = SelectTemplate.bind({});
SelectDeletable.storyName = 'vl-select-next - deletable';
SelectDeletable.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    deletable: true,
    options: [
        { label: 'Hasselt', value: 'hasselt' },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' },
    ],
};

export const SelectGroups = SelectTemplate.bind({});
SelectGroups.storyName = 'vl-select-next - groups';
SelectGroups.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    options: [
        {
            label: 'België',
            value: '',
            choices: [
                { label: 'Hasselt', value: 'hasselt' },
                { label: 'Turnhout', value: 'turnhout' },
                { label: 'Knokke-Heist', value: 'knokke-heist' },
                { label: 'Waregem', value: 'waregem' },
                { label: 'Lier', value: 'lier' },
            ],
        },
        {
            label: 'Puerto Rico',
            value: '',
            choices: [{ label: 'Rio Piedras', value: 'rio piedras' }],
        },
    ],
};

export const SelectMultiple = SelectTemplate.bind({});
SelectMultiple.storyName = 'vl-select-next - multiple';
SelectMultiple.args = {
    id: `hobby's`,
    name: `hobby's`,
    placeholder: `Kies je hobby's`,
    multiple: true,
    options: [
        { label: 'Padel', value: 'padel' },
        { label: 'Dans', value: 'dans' },
        { label: 'Drummen', value: 'drummen' },
        { label: 'Zwemmen', value: 'zwemmen' },
        { label: 'Boardgames', value: 'boardgames' },
        { label: 'Fietsen', value: 'fietsen' },
    ],
};

export const SelectSelectedOption = SelectTemplate.bind({});
SelectSelectedOption.storyName = 'vl-select-next - selected option';
SelectSelectedOption.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    options: [
        { label: 'Hasselt', value: 'hasselt', selected: true },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' },
    ],
};

export const SelectDisabledOption = SelectTemplate.bind({});
SelectDisabledOption.storyName = 'vl-select-next - disabled option';
SelectDisabledOption.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    options: [
        { label: 'Hasselt', value: 'hasselt', disabled: true },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' },
    ],
};

export const SelectReadOnly = SelectTemplate.bind({});
SelectReadOnly.storyName = 'vl-select-next - read only';
SelectReadOnly.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    options: [
        { label: 'Hasselt', value: 'hasselt', disabled: true, selected: true },
        { label: 'Turnhout', value: 'turnhout', disabled: true },
        { label: 'Knokke-Heist', value: 'knokke-heist', disabled: true },
        { label: 'Waregem', value: 'waregem', disabled: true },
        { label: 'Rio Piedras', value: 'rio piedras', disabled: true },
    ],
};
