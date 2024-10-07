import { html } from 'lit-html';
import '../vl-action-group.element';
import '../../button/vl-button.element';
import '../../link/vl-link.element';
import '../../icon/vl-icon.element';
import { vlGroupArgs, vlGroupArgTypes } from './vl-group.stories-arg';

export default {
    id: 'styles-group',
    title: 'Styles/group',
    tags: ['autodocs'],
    args: vlGroupArgs,
    argTypes: vlGroupArgTypes,
};

export const actionGroupDefault = ({ column, row, spaceBetween }: typeof vlGroupArgs) => html` <div
    style="vl-group ?vl-group--column=${column} "
>
    <button is="vl-button">Aanvraag starten</button>
    <button is="vl-button" data-vl-secondary>Annuleren</button>
</div>`;
actionGroupDefault.storyName = 'vl-action-group - default';
