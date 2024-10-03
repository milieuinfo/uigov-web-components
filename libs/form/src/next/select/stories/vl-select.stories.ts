import { story } from '@domg-wc/common-storybook';
import { selectArgs, selectArgTypes } from './vl-select.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import selectDocs from './vl-select.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlSelectComponent } from '../vl-select.component';

registerWebComponents([VlSelectComponent]);

export default {
    id: 'form-next-select',
    title: 'Form-next/select',
    tags: ['autodocs'],
    args: selectArgs,
    argTypes: selectArgTypes,
    parameters: {
        docs: {
            page: selectDocs,
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
        notDeletable,
        autocomplete,
        block,
        onVlSelect,
        onVlValid,
        onVlReset,
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
            ?not-deletable=${notDeletable}
            ?block=${block}
            autocomplete=${autocomplete}
            @vl-select=${onVlSelect}
            @vl-valid=${onVlValid}
            @vl-reset=${onVlReset}
        ></vl-select-next>`;
    }
);

export const SelectDefault = SelectTemplate.bind({});
SelectDefault.storyName = 'vl-select-next - default';
SelectDefault.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    // ! Vergeet niet de options op de docs pagina aan te passen als je deze opties aanpast
    options: [
        { label: 'Hasselt', value: 'hasselt' },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' },
    ],
};

export const SelectNotDeletable = SelectTemplate.bind({});
SelectNotDeletable.storyName = 'vl-select-next - not-deletable';
SelectNotDeletable.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    notDeletable: true,
    // ! Vergeet niet de options op de docs pagina aan te passen als je deze opties aanpast
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
    // ! Vergeet niet de options op de docs pagina aan te passen als je deze opties aanpast
    options: [
        { label: 'Hasselt', value: 'hasselt', group: 'België' },
        { label: 'Turnhout', value: 'turnhout', group: 'België' },
        { label: 'Knokke-Heist', value: 'knokke-heist', group: 'België' },
        { label: 'Waregem', value: 'waregem', group: 'België' },
        { label: 'Lier', value: 'lier', group: 'België' },
        { label: 'Rio Piedras', value: 'rio piedras', group: 'Puerto Rico' },
    ],
};

export const SelectSelectedOption = SelectTemplate.bind({});
SelectSelectedOption.storyName = 'vl-select-next - selected option';
SelectSelectedOption.args = {
    id: 'geboorteplaats',
    name: 'geboorteplaats',
    placeholder: 'Kies je geboorteplaats',
    // ! Vergeet niet de options op de docs pagina aan te passen als je deze opties aanpast
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
    // ! Vergeet niet de options op de docs pagina aan te passen als je deze opties aanpast
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
    // ! Vergeet niet de options op de docs pagina aan te passen als je deze opties aanpast
    options: [
        { label: 'Hasselt', value: 'hasselt', disabled: true, selected: true },
        { label: 'Turnhout', value: 'turnhout', disabled: true },
        { label: 'Knokke-Heist', value: 'knokke-heist', disabled: true },
        { label: 'Waregem', value: 'waregem', disabled: true },
        { label: 'Rio Piedras', value: 'rio piedras', disabled: true },
    ],
};
