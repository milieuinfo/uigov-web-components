import { html } from 'lit-html';
import { linkBaseArgs, linkBaseArgTypes, linkIconArgs, linkIconArgTypes } from './vl-link.stories-arg';
import '../vl-button-link.element';
import '../../icon/vl-icon.element';

export default {
    title: 'Elements/link',
    args: linkBaseArgs,
    argTypes: linkBaseArgTypes,
};

export const buttonLinkDefault = ({ block, error, content, inline, small, large, bold }: typeof linkBaseArgs) =>
    html` <button
        is="vl-button-link"
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-inline=${inline}
        ?data-vl-small=${small}
        ?data-vl-large=${large}
        ?data-vl-bold=${bold}
        data-cy="button-link-default"
    >
        ${content}
    </button>`;
buttonLinkDefault.storyName = 'vl-button-link - default';

export const buttonLinkWithIcon = ({
    block,
    error,
    content,
    type,
    icon,
    inline,
    small,
    large,
    bold,
}: typeof linkBaseArgs & typeof linkIconArgs) => {
    if (type === 'before') {
        return html` <button
            is="vl-button-link"
            ?data-vl-block=${block}
            ?data-vl-error=${error}
            ?data-vl-inline=${inline}
            ?data-vl-small=${small}
            ?data-vl-large=${large}
            ?data-vl-bold=${bold}
            data-cy="button-link-with-icon"
        >
            <span is="vl-icon" data-vl-icon=${icon} data-vl-before></span>${content}
        </button>`;
    }
    return html` <button
        is="vl-button-link"
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-inline=${inline}
        ?data-vl-small=${small}
        ?data-vl-large=${large}
        ?data-vl-bold=${bold}
    >
        ${content}<span is="vl-icon" data-vl-icon=${icon} data-vl-after></span>
    </button>`;
};
buttonLinkWithIcon.storyName = 'vl-button-link - with icon';
buttonLinkWithIcon.args = linkIconArgs;
buttonLinkWithIcon.argTypes = linkIconArgTypes;
