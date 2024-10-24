import { html } from 'lit-html';
import '../vl-button-input-addon.element';
import '../../icon/vl-icon.element';
import '../../text/vl-text.element';

export default {
    id: 'elements-input-addon-button-input-addon',
    title: 'Elements/input-addon/button-input-addon',
    tags: ['autodocs'],
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const buttonInputAddonDefault = () => html`
    <button is="vl-button-input-addon" type="button" data-cy="button-input-addon">
        <span is="vl-icon" icon="location"></span>
        <span is="vl-text" data-vl-visually-hidden>Kies locatie</span>
    </button>
`;
buttonInputAddonDefault.storyName = 'vl-button-input-addon - default';
