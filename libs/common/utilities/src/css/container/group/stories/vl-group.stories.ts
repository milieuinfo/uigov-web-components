import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlAccordionComponent } from '@domg-wc/components';
import { VlButtonComponent } from '@domg-wc/components/next/button';
import { VlIconComponent } from '@domg-wc/components/next/icon';
import { VlLinkComponent } from '@domg-wc/components/next/link';
import { html } from 'lit-html';
import { classMap } from 'lit/directives/class-map.js';
import { vlGroupArgs, vlGroupArgTypes } from './vl-group.stories-arg';

export default {
    id: 'opmaak-next-container-group',
    title: 'Opmaak-next/container/group',
    tags: ['autodocs'],
    args: vlGroupArgs,
    argTypes: vlGroupArgTypes,
};

registerWebComponents([VlAccordionComponent, VlButtonComponent, VlLinkComponent, VlIconComponent]);

export const groupButtons = ({
    group,
    collapseL,
    collapseM,
    collapseS,
    collapseXS,
    column,
    justifyCenter,
    justifyEnd,
    separatorColumn,
    separatorRow,
    spaceBetween,
}: typeof vlGroupArgs) => html` <div
    class=${classMap({
        'vl-group-next': group,
        'vl-group--collapse-l': collapseL,
        'vl-group--collapse-m': collapseM,
        'vl-group--collapse-s': collapseS,
        'vl-group--collapse-xs': collapseXS,
        'vl-group--column': column,
        'vl-group--justify-center': justifyCenter,
        'vl-group--justify-end': justifyEnd,
        'vl-group--separator-column': separatorColumn,
        'vl-group--separator-row': separatorRow,
        'vl-group--space-between': spaceBetween,
    })}
    style="height: 140px"
>
    <vl-button-next>Aanvraag starten</vl-button-next>
    <vl-button-next secondary>Annuleren</vl-button-next>
</div>`;
groupButtons.storyName = 'vl-group - buttons';

export const groupLinks = ({
    group,
    collapseL,
    collapseM,
    collapseS,
    collapseXS,
    column,
    justifyCenter,
    justifyEnd,
    separatorColumn,
    separatorRow,
    spaceBetween,
}: typeof vlGroupArgs) => html` <div
    class=${classMap({
        'vl-group-next': group,
        'vl-group--collapse-l': collapseL,
        'vl-group--collapse-m': collapseM,
        'vl-group--collapse-s': collapseS,
        'vl-group--collapse-xs': collapseXS,
        'vl-group--column': column,
        'vl-group--justify-center': justifyCenter,
        'vl-group--justify-end': justifyEnd,
        'vl-group--separator-column': separatorColumn,
        'vl-group--separator-row': separatorRow,
        'vl-group--space-between': spaceBetween,
    })}
    style="height: 140px"
>
    <vl-link-next href="#" icon="bell"> Notificaties</vl-link-next>
    <vl-link-next href="#" icon="graduate"> Opleidingen</vl-link-next>
    <vl-link-next href="#" icon="pin"> Locaties</vl-link-next>
</div>`;
groupLinks.storyName = 'vl-group - links';
groupLinks.args = {
    separatorRow: true,
};

export const groupAccordions = ({ separatorColumn }: typeof vlGroupArgs) => html` <div
    class=${classMap({
        'vl-group--column': true,
        'vl-group--separator-column': separatorColumn,
    })}
>
    <vl-accordion data-vl-toggle-text="Accordion 1">
        <div class="vl-group-next vl-group--column">
            <vl-accordion data-vl-toggle-text="Accordion 1.1"> Inhoud accordion 1.1</vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 1.2"> Inhoud accordion 1.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Accordion 2">
        <div class="vl-group-next vl-group--column">
            <vl-accordion data-vl-toggle-text="Accordion 2.1"> Inhoud accordion 2.1</vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 2.2"> Inhoud accordion 2.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Accordion 3">
        <div class="vl-group-next vl-group--column">
            <vl-accordion data-vl-toggle-text="Accordion 3.1"> Inhoud accordion 3.1</vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 3.2"> Inhoud accordion 3.2</vl-accordion>
        </div>
    </vl-accordion>
</div>`;
groupAccordions.storyName = 'vl-group - accordions';
groupAccordions.args = {
    separatorColumn: true,
};
groupAccordions.parameters = {
    controls: {
        exclude: [
            'vl-group--column',
            'vl-group--justify-center',
            'vl-group--justify-end',
            'vl-group--separator-row',
            'vl-group--space-between',
        ],
    },
};

export const groupIcons = ({
    group,
    column,
    justifyCenter,
    justifyEnd,
    separatorColumn,
    separatorRow,
    spaceBetween,
}: typeof vlGroupArgs) => html` <div
    class=${classMap({
        'vl-group': group,
        'vl-group--column': column,
        'vl-group--justify-center': justifyCenter,
        'vl-group--justify-end': justifyEnd,
        'vl-group--separator-column': separatorColumn,
        'vl-group--separator-row': separatorRow,
        'vl-group--space-between': spaceBetween,
    })}
    style="height: 140px"
>
    <vl-icon-next href="#" icon="bell"></vl-icon-next>
    <vl-icon-next href="#" icon="graduate"></vl-icon-next>
    <vl-icon-next href="#" icon="pin"></vl-icon-next>
</div>`;
groupIcons.storyName = 'vl-group - icons';
groupIcons.args = {
    column: true,
};
