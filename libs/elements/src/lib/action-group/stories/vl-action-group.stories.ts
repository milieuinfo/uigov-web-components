import { html } from 'lit-html';
import '../vl-action-group.element';
import '../../button/vl-button.element';
import '../../link/vl-link.element';
import '../../icon/vl-icon.element';
import { actionGroupArgs, actionGroupArgTypes } from './vl-action-group.stories-arg';

export default {
    title: 'Elements/action-group',
    args: actionGroupArgs,
    argTypes: actionGroupArgTypes,
};

export const actionGroupDefault = ({
    align,
    spaceBetween,
    bordered,
    collapseL,
    collapseM,
    collapseS,
    collapseXs,
}: typeof actionGroupArgs) => html` <div
    is="vl-action-group"
    data-vl-align=${align}
    ?data-vl-space-between=${spaceBetween}
    ?data-vl-bordered=${bordered}
    ?data-vl-collapse-l=${collapseL}
    ?data-vl-collapse-m=${collapseM}
    ?data-vl-collapse-s=${collapseS}
    ?data-vl-collapse-xs=${collapseXs}
    data-cy="action-group"
>
    <button is="vl-button">Aanvraag starten</button>
    <button is="vl-button" data-vl-secondary>Annuleren</button>
</div>`;
actionGroupDefault.storyName = 'vl-action-group - default';

export const actionGroupWithLinks = ({
    align,
    spaceBetween,
    bordered,
    collapseL,
    collapseM,
    collapseS,
    collapseXs,
}: typeof actionGroupArgs) => html` <div
    is="vl-action-group"
    data-vl-align=${align}
    ?data-vl-space-between=${spaceBetween}
    ?data-vl-bordered=${bordered}
    ?data-vl-collapse-l=${collapseL}
    ?data-vl-collapse-m=${collapseM}
    ?data-vl-collapse-s=${collapseS}
    ?data-vl-collapse-xs=${collapseXs}
    data-cy="action-group-with-links"
>
    <a href="#" is="vl-link">
        <span is="vl-icon" data-vl-icon="bell" data-vl-before></span>
        Notificaties
    </a>
    <a href="#" is="vl-link">
        <span is="vl-icon" data-vl-icon="graduate" data-vl-before></span>
        Opleidingen
    </a>
    <a href="#" is="vl-link">
        <span is="vl-icon" data-vl-icon="pin" data-vl-before></span>
        Locaties
    </a>
</div>`;
actionGroupWithLinks.storyName = 'vl-action-group - with links';

actionGroupWithLinks.argTypes = { bordered: { control: { disable: false } } };
