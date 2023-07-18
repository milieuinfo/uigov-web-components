import { html } from 'lit-html';
import '../vl-radio.component';
import { radioArgs, radioArgTypes } from './vl-radio.stories-arg';
import { Meta } from '@storybook/web-components';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';

export default {
    title: 'Components/radio',
    args: storyArgs(radioArgs),
    argTypes: storyArgTypes(radioArgTypes),
    parameters: {
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof radioArgs>;

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
