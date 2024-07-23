import { html } from 'lit-html';
import '../vl-link-button.element';
import { buttonArgs, buttonArgTypes } from './vl-button.stories-arg';

export default {
    id: 'Elements/button/link-button',
    title: 'Elements/button [deprecated]/link-button',
    parameters: {
        templateData: {
            alertText:
                'Gebruik [vl-button-next](/docs/components-next-button--documentatie), in v2.0.0 verdwijnt deze component.',
        },
    },
    tags: ['autodocs'],
    args: { ...buttonArgs, content: 'Link button' },
    argTypes: buttonArgTypes,
};

export const linkButtonDefault = (props: typeof buttonArgs) =>
    html`<a
        is="vl-link-button"
        href="#"
        ?disabled=${props.disabled}
        ?data-vl-error=${props.error}
        ?data-vl-block=${props.block}
        ?data-vl-large=${props.large}
        ?data-vl-wide=${props.wide}
        ?data-vl-narrow=${props.narrow}
        ?data-vl-loading=${props.loading}
        ?data-vl-secondary=${props.secondary}
        ?data-vl-tertiary=${props.tertiary}
        >${props.content}</a
    >`;
linkButtonDefault.storyName = 'link button - default';
