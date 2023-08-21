import '../vl-button.element';
import { html } from 'lit-html';
import { buttonArgs, buttonArgTypes } from './vl-button.stories-arg';
import { iconButtonArgs, iconButtonArgTypes } from './vl-icon-button.stories-arg';
// TODO vl-icon en vl-text

export default {
    title: 'Elements/button',
    args: { ...buttonArgs, ...iconButtonArgs },
    argTypes: { ...buttonArgTypes, ...iconButtonArgTypes },
};

const buttonBuilder = (wrapProps: typeof buttonArgs, children: any) =>
    html`
        <button
            is="vl-button"
            ?disabled=${wrapProps.disabled}
            ?data-vl-error=${wrapProps.error}
            ?data-vl-block=${wrapProps.block}
            ?data-vl-large=${wrapProps.large}
            ?data-vl-wide=${wrapProps.wide}
            ?data-vl-narrow=${wrapProps.narrow}
            ?data-vl-loading=${wrapProps.loading}
            ?data-vl-secondary=${wrapProps.secondary}
            ?data-vl-tertiary=${wrapProps.tertiary}
            data-cy="button-with-icon"
        >
            ${children}
        </button>
    `;

export const iconButton = (props: any) => {
    switch (props.type) {
        case 'before':
            return html`
                ${buttonBuilder(
                    props,
                    html`<span is="vl-icon" data-vl-icon="location" data-vl-before></span>${props.content}`
                )}
            `;
        case 'hidden text':
            return html`${buttonBuilder(
                props,
                html`<span is="vl-icon" data-vl-icon="location"></span>
                    <span is="vl-text" data-vl-visually-hidden>${props.content}</span>`
            )}`;
        case 'after':
        default:
            return html`
                ${buttonBuilder(
                    props,
                    html`${props.content} <span is="vl-icon" data-vl-icon="location" data-vl-after></span>`
                )}
            `;
    }
};
iconButton.storyName = 'icon button - default';
