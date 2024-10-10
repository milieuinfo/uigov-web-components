import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlButtonComponent } from '@domg-wc/components/next/button';
import { VlLinkComponent } from '@domg-wc/components/next/link';
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

registerWebComponents([VlButtonComponent, VlLinkComponent]);

export const flexButtons = ({
    column,
    row,
    bordered,
    spaceBetween,
    justifyStart,
    justifyCenter,
    justifyEnd,
}: typeof vlFlexArgs) => html` <div
    class=${classMap({
        'vl-flex': true,
        'vl-flex--column': column,
        'vl-flex--row': row,
        'vl-flex--bordered': bordered,
        'vl-flex--space-between': spaceBetween,
        'vl-flex--justify-start': justifyStart,
        'vl-flex--justify-center': justifyCenter,
        'vl-flex--justify-end': justifyEnd,
    })}
    style="height: 140px"
>
    <vl-button-next class="flex-item">Aanvraag starten</vl-button-next>
    <vl-button-next secondary class="flex-item">Annuleren</vl-button-next>
</div>`;
flexButtons.storyName = 'vl-flex - buttons';

export const flexLinks = ({
    column,
    row,
    bordered,
    spaceBetween,
    justifyStart,
    justifyCenter,
    justifyEnd,
}: typeof vlFlexArgs) => html` <div
    class=${classMap({
        'vl-flex': true,
        'vl-flex--column': column,
        'vl-flex--row': row,
        'vl-flex--bordered': bordered,
        'vl-flex--space-between': spaceBetween,
        'vl-flex--justify-start': justifyStart,
        'vl-flex--justify-center': justifyCenter,
        'vl-flex--justify-end': justifyEnd,
    })}
    style="height: 140px"
>
    <vl-link-next href="#" icon="bell"> Notificaties </vl-link-next>
    <vl-link-next href="#" icon="graduate"> Opleidingen </vl-link-next>
    <vl-link-next href="#" icon="pin"> Locaties </vl-link-next>
</div>`;
flexLinks.storyName = 'vl-flex - links';
