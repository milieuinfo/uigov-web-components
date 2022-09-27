import { html } from 'lit-html';
import '../vl-input-group.element';
import '../../button/vl-button.element';
import '../../input-field/vl-input-field.element';
import '../../input-addon/vl-input-addon.element';
import '../../icon/vl-icon.element';
import '../../text/vl-text.element';

export default {
    title: 'Elements/input-group',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const inputGroupDefault = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <button is="vl-button-input-addon" type="button">
            <span is="vl-icon" data-vl-icon="location"></span>
            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
        </button>
        <input is="vl-input-field" type="text" />
    </div>
`;
inputGroupDefault.storyName = 'vl-input-group - default';

export const inputGroupWithInputAddonRight = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <input is="vl-input-field" type="text" />
        <button is="vl-button-input-addon" type="button">
            <span is="vl-icon" data-vl-icon="location"></span>
            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
        </button>
    </div>
`;
inputGroupWithInputAddonRight.storyName = 'vl-input-group - with input addon right';

export const inputGroupWithTextAddonLeft = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <button is="vl-button" type="button">Locatie kiezen</button>
        <input is="vl-input-field" type="text" />
    </div>
`;
inputGroupWithTextAddonLeft.storyName = 'vl-input-group - with text addon left';

export const inputGroupWithTextAddonRight = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <input is="vl-input-field" type="text" />
        <button is="vl-button" type="button">Locatie kiezen</button>
    </div>
`;
inputGroupWithTextAddonRight.storyName = 'vl-input-group - with text addon right';

export const inputGroupWithButtonLeft = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <button is="vl-button" type="button">
            <span is="vl-icon" data-vl-icon="location"></span>
            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
        </button>
        <input is="vl-input-field" type="text" />
    </div>
`;
inputGroupWithButtonLeft.storyName = 'vl-input-group - with button left';
