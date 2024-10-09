import { html } from 'lit-html';
import { classMap } from 'lit/directives/class-map.js';
import { vlFlexArgs, vlFlexArgTypes } from './vl-flex.stories-arg';

export default {
    id: 'styles-flex',
    title: 'Styles/flex',
    tags: ['autodocs'],
    args: vlFlexArgs,
    argTypes: vlFlexArgTypes,
};

export const flexDefault = ({
    column,
    row,
    spaceBetween,
    justifyStart,
    justifyCenter,
    justifyEnd,
}: typeof vlFlexArgs) => html` <div
    class=${classMap({
        'vl-flex': true,
        'vl-flex--column': column,
        'vl-flex--row': row,
        'vl-flex--space-between': spaceBetween,
        'vl-flex--justify-start': justifyStart,
        'vl-flex--justify-center': justifyCenter,
        'vl-flex--justify-end': justifyEnd,
    })}
    style="height: 140px"
>
    <button is="vl-button">Aanvraag starten</button>
    <button is="vl-button" data-vl-secondary>Annuleren</button>
</div>`;
flexDefault.storyName = 'vl-group - default';
