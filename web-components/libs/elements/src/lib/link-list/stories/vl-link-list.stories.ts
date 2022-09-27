import { html } from 'lit-html';
import '../../link/vl-link.element';
import '../vl-link-list.element';
import { linkListArgs, linkListArgTypes } from './vl-link-list.stories-arg';

export default {
    title: 'Elements/link-list',
    args: linkListArgs,
    argTypes: linkListArgTypes,
};

export const linkListDefault = ({ small, inline, bordered }: typeof linkListArgs) => html`
    <ul
        is="vl-link-list"
        ?data-vl-small=${small}
        ?data-vl-inline=${inline}
        ?data-vl-bordered=${bordered}
        data-cy="link-list"
    >
        <li is="vl-link-list-item">
            <a is="vl-link" href="#"> Ga naar index</a>
        </li>
        <li is="vl-link-list-item">
            <a is="vl-link" href="#"> Terug naar overzicht</a>
        </li>
    </ul>
`;
linkListDefault.storyName = 'vl-link-list - default';
