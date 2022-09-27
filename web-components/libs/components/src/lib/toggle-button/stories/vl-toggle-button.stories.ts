import { html } from 'lit-html';
import '../vl-toggle-button.component';
import { toggleButtonArgs, toggleButtonArgTypes } from './vl-toggle-button.stories-arg';
import { ICON_PLACEMENT } from '../vl-toggle-button.component';

const getLastElement = (element: any) => {
    const [lastItem] = [...Array(document.querySelectorAll(element))].slice(-1);
    return lastItem;
};

export default {
    title: 'Components/toggle-button',
    args: toggleButtonArgs,
    argTypes: toggleButtonArgTypes,
};

export const toggleButtonDefault = ({
    active,
    icon,
    iconPlacement,
    textHidden,
    error,
    block,
    large,
    wide,
    narrow,
    loading,
    disabled,
    change,
    click,
    content,
}: typeof toggleButtonArgs) =>
    html` <vl-toggle-button
        .active=${active}
        data-vl-icon=${icon}
        data-vl-icon-placement=${iconPlacement}
        ?data-vl-text-hidden=${textHidden}
        ?data-vl-error=${error}
        ?data-vl-block=${block}
        ?data-vl-large=${large}
        ?data-vl-wide=${wide}
        ?data-vl-narrow=${narrow}
        ?data-vl-loading=${loading}
        ?disabled=${disabled}
        @change=${(event: any) => change(event.detail)}
        @click=${(event: any) => {
            click(event);
        }}
        data-cy="toggle-button"
        >${content}
    </vl-toggle-button>`;
toggleButtonDefault.storyName = 'vl-toggle-button - default';

export const toggleButtonWithIcon = ({
    active,
    icon,
    iconPlacement,
    textHidden,
    error,
    block,
    large,
    wide,
    narrow,
    loading,
    disabled,
    change,
    click,
    content,
}: typeof toggleButtonArgs) =>
    html` <vl-toggle-button
        .active=${active}
        data-vl-icon=${icon}
        data-vl-icon-placement=${iconPlacement}
        ?data-vl-text-hidden=${textHidden}
        ?data-vl-error=${error}
        ?data-vl-block=${block}
        ?data-vl-large=${large}
        ?data-vl-wide=${wide}
        ?data-vl-narrow=${narrow}
        ?data-vl-loading=${loading}
        ?disabled=${disabled}
        @change=${(event: any) => change(event.detail)}
        @click=${(event: any) => {
            click(event);
        }}
        data-cy="toggle-button-with-icon"
        >${content}
    </vl-toggle-button>`;
toggleButtonWithIcon.storyName = 'vl-toggle-button - with icon';
toggleButtonWithIcon.args = { icon: 'pencil', iconPlacement: ICON_PLACEMENT.AFTER };

// Get last toggle button, because storybook can render multiple stories
const getToggleButton: any = () => getLastElement('vl-toggle-button');
export const toggleButtonControlled = ({
    active,
    icon,
    iconPlacement,
    textHidden,
    error,
    block,
    large,
    wide,
    narrow,
    loading,
    disabled,
    change,
    click,
    content,
}: typeof toggleButtonArgs) => html` <vl-toggle-button
    .active=${active}
    data-vl-icon=${icon}
    data-vl-icon-placement=${iconPlacement}
    ?data-vl-text-hidden=${textHidden}
    ?data-vl-error=${error}
    ?data-vl-block=${block}
    ?data-vl-large=${large}
    ?data-vl-wide=${wide}
    ?data-vl-narrow=${narrow}
    ?data-vl-loading=${loading}
    ?disabled=${disabled}
    @change=${(event: any) => change(event.detail)}
    @click=${(event: any) => {
        click(event);
        const toggleButton = getToggleButton();
        toggleButton.active = !toggleButton.active;
    }}
    data-cy="toggle-button-controlled"
    >${content}
</vl-toggle-button>`;
toggleButtonControlled.storyName = 'vl-toggle-button - controlled';
toggleButtonControlled.args = {
    active: false,
};
toggleButtonControlled.argTypes = { active: { control: { disabled: false } } };
