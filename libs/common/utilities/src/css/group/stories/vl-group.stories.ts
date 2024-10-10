import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlButtonComponent } from '@domg-wc/components/next/button';
import { VlLinkComponent } from '@domg-wc/components/next/link';
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

registerWebComponents([VlButtonComponent, VlLinkComponent]);

export const groupButtons = ({
    column,
    row,
    bordered,
    spaceBetween,
    justifyStart,
    justifyCenter,
    justifyEnd,
}: typeof vlGroupArgs) => html` <div
    class=${classMap({
        'vl-group': true,
        'vl-group--column': column,
        'vl-group--row': row,
        'vl-group--bordered': bordered,
        'vl-group--space-between': spaceBetween,
        'vl-group--justify-start': justifyStart,
        'vl-group--justify-center': justifyCenter,
        'vl-group--justify-end': justifyEnd,
    })}
    style="height: 140px"
>
    <vl-button-next>Aanvraag starten</vl-button-next>
    <vl-button-next secondary>Annuleren</vl-button-next>
</div>`;
groupButtons.storyName = 'vl-group - buttons';

export const groupLinks = ({
    column,
    row,
    bordered,
    spaceBetween,
    justifyStart,
    justifyCenter,
    justifyEnd,
}: typeof vlGroupArgs) => html` <div
    class=${classMap({
        'vl-group': true,
        'vl-group--column': column,
        'vl-group--row': row,
        'vl-group--bordered': bordered,
        'vl-group--space-between': spaceBetween,
        'vl-group--justify-start': justifyStart,
        'vl-group--justify-center': justifyCenter,
        'vl-group--justify-end': justifyEnd,
    })}
    style="height: 140px"
>
    <vl-link-next href="#" icon="bell"> Notificaties </vl-link-next>
    <vl-link-next href="#" icon="graduate"> Opleidingen </vl-link-next>
    <vl-link-next href="#" icon="pin"> Locaties </vl-link-next>
</div>`;
groupLinks.storyName = 'vl-group - links';
