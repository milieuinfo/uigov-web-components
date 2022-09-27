import '../vl-button.element';
import { html } from 'lit-html';
import { buttonArgs, buttonArgTypes } from './vl-button.stories-arg';

export default {
    title: 'Elements/button',
    args: buttonArgs,
    argTypes: buttonArgTypes,
};

export const buttonDefault = (args: typeof buttonArgs) => html` <button
    is="vl-button"
    ?disabled=${args.disabled}
    ?data-vl-secondary=${args.secondary}
    ?data-vl-tertiary=${args.tertiary}
    ?data-vl-loading=${args.loading}
    ?data-vl-error=${args.error}
    ?data-vl-block=${args.block}
    ?data-vl-large=${args.large}
    ?data-vl-wide=${args.wide}
    ?data-vl-narrow=${args.narrow}
    data-cy="button-default"
>
    ${args.content}
</button>`;
buttonDefault.storyName = 'vl-button - default';
