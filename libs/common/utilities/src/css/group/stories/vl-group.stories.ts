import { html } from 'lit-html';
import { classMap } from 'lit/directives/class-map.js';
import { vlGroupArgs, vlGroupArgTypes } from './vl-group.stories-arg';

export default {
    id: 'styles-group',
    title: 'Styles/group',
    tags: ['autodocs'],
    args: vlGroupArgs,
    argTypes: vlGroupArgTypes,
};

export const actionGroupDefault = ({ column, row, spaceBetween }: typeof vlGroupArgs) => html` <div
    class=${classMap({
        'vl-group': true,
        'vl-group--column': column,
        'vl-group--row': row,
        'vl-group--space-between': spaceBetween,
    })}
    style="width: 500px"
>
    <button is="vl-button">Aanvraag starten</button>
    <button is="vl-button" data-vl-secondary>Annuleren</button>
</div>`;
actionGroupDefault.storyName = 'vl-group - default';
