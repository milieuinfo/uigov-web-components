import { html } from 'lit-html';
import '../vl-radio.component';
import { radioArgs, radioArgTypes } from './vl-radio.stories-arg';

export default {
    title: 'Components/radio',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: radioArgs,
    argTypes: radioArgTypes,
};

export const radioDefault = ({ block, checked, disabled, error, label, name, single, value }: typeof radioArgs) => html`
    <vl-radio
        ?data-vl-block=${block}
        ?data-vl-disabled=${disabled}
        ?data-vl-error=${error}
        data-vl-label=${label}
        data-vl-name=${name}
        data-vl-value=${value}
        ?data-vl-single=${single}
        ?data-vl-checked=${checked}
        data-cy="radio"
    ></vl-radio>
`;
radioDefault.storyName = 'vl-radio - default';
