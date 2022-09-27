import { html } from 'lit-html';
import {
    linkBaseArgs,
    linkBaseArgTypes,
    linkDefaultArgs,
    linkDefaultArgTypes,
    linkIconArgs,
    linkIconArgTypes,
} from './vl-link.stories-arg';
import '../vl-link.element';
import '../../icon/vl-icon.element';

export default {
    title: 'Elements/link',
    args: { ...linkBaseArgs, ...linkDefaultArgs },
    argTypes: { ...linkBaseArgTypes, ...linkDefaultArgTypes },
};

export const linkDefault = ({
    block,
    error,
    href,
    content,
    inline,
    small,
    large,
    bold,
}: typeof linkBaseArgs & typeof linkDefaultArgs) =>
    html`<a
        is="vl-link"
        href=${href}
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-inline=${inline}
        ?data-vl-small=${small}
        ?data-vl-large=${large}
        ?data-vl-bold=${bold}
        data-cy="link-default"
        >${content}</a
    >`;
linkDefault.storyName = 'vl-link - default';

export const linkWithIcon = ({
    block,
    error,
    type,
    href,
    content,
    icon,
    inline,
    small,
    large,
    bold,
}: typeof linkBaseArgs & typeof linkDefaultArgs & typeof linkIconArgs) => {
    if (type === 'before') {
        return html`<a
            is="vl-link"
            href=${href}
            ?data-vl-block=${block}
            ?data-vl-error=${error}
            ?data-vl-inline=${inline}
            ?data-vl-small=${small}
            ?data-vl-large=${large}
            ?data-vl-bold=${bold}
            data-cy="link-with-icon"
            ><span is="vl-icon" data-vl-icon=${icon} data-vl-before data-vl-link></span> ${content}</a
        >`;
    }
    return html`<a
        is="vl-link"
        href=${href}
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-inline=${inline}
        ?data-vl-small=${small}
        ?data-vl-large=${large}
        ?data-vl-bold=${bold}
    >
        ${content}<span is="vl-icon" data-vl-icon=${icon} data-vl-after data-vl-link></span
    ></a>`;
};
linkWithIcon.storyName = 'vl-link - with icon';
linkWithIcon.args = linkIconArgs;
linkWithIcon.argTypes = linkIconArgTypes;
