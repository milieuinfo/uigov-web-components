import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../../link/vl-link.element';
import '../vl-multiselect.element';
import { multiselectArgs, multiselectArgTypes } from './vl-multiselect.stories-arg';
import multiSelectDoc from './vl-multiselect.stories-doc.mdx';

export default {
    id: 'Elements/multiselect',
    title: 'Elements/multiselect [deprecated]',
    tags: ['autodocs'],
    args: multiselectArgs,
    argTypes: multiselectArgTypes,
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: {
            page: multiSelectDoc,
        },
    },
} as Meta<typeof multiselectArgs>;

export const MultiselectDefault = ({ block, error, success, disabled }: typeof multiselectArgs) => html`
    <select
        is="vl-multiselect"
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-success=${success}
        ?data-vl-disabled=${disabled}
    >
        <option value="Belgium">België</option>
        <option value="Germany">Duitsland</option>
        <option value="France">Frankrijk</option>
    </select>
`;
MultiselectDefault.storyName = 'vl-multiselect - default';

export const MultiselectPredefinedOption = ({ block, error, success, disabled }: typeof multiselectArgs) => html`
    <select
        is="vl-multiselect"
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-success=${success}
        ?data-vl-disabled=${disabled}
    >
        <option selected="" value="Bruges">Brugge</option>
        <option value="Brussels">Brussel</option>
        <option value="Ghent">Gent</option>
    </select>
`;
MultiselectPredefinedOption.storyName = 'vl-multiselect - predefined option';

export const MultiselectGroupedItems = ({ block, error, success, disabled }: typeof multiselectArgs) => html`
    <select
        is="vl-multiselect"
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-success=${success}
        ?data-vl-disabled=${disabled}
    >
        <optgroup label="Landen">
            <option selected="" value="Belgium">België</option>
            <option value="Germany">Duitsland</option>
            <option value="France">Frankrijk</option>
        </optgroup>
        <optgroup label="Steden">
            <option selected="" value="Bruges">Brugge</option>
            <option value="Brussels">Brussel</option>
            <option value="Ghent">Gent</option>
        </optgroup>
    </select>
`;
MultiselectGroupedItems.storyName = 'vl-multiselect - grouped items';
