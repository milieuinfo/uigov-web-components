import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../../link/vl-link.element';
import '../vl-multiselect.element';
import { multiselectArgs, multiselectArgTypes } from './vl-multiselect.stories-arg';

export default {
    title: 'Elements/multiselect',
    tags: ['autodocs'],
    args: multiselectArgs,
    argTypes: multiselectArgTypes,
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
} as Meta<typeof multiselectArgs>;

export const multiselectDefault = ({ block, error, success, disabled }: typeof multiselectArgs) => html`
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
multiselectDefault.storyName = 'vl-multiselect - default';

export const multiselectPredefinedOption = ({ block, error, success, disabled }: typeof multiselectArgs) => html`
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
multiselectPredefinedOption.storyName = 'vl-multiselect - predefined option';

export const multiselectGroupedItems = ({ block, error, success, disabled }: typeof multiselectArgs) => html`
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
multiselectGroupedItems.storyName = 'vl-multiselect - grouped items';
