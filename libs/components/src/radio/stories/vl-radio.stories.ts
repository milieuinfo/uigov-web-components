import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-radio.component';
import { radioArgs, radioArgTypes } from './vl-radio.stories-arg';

export default {
    id: 'components-radio',
    title: 'Components/radio',
    tags: ['autodocs'],
    args: radioArgs,
    argTypes: radioArgTypes,
    parameters: {
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof radioArgs>;

export const RadioDefault = story(
    radioArgs,
    ({ block, checked, disabled, error, label, name, single, value }) => html`
        <vl-radio
            ?data-vl-block=${block}
            ?data-vl-disabled=${disabled}
            ?data-vl-error=${error}
            data-vl-label=${label}
            data-vl-name=${name}
            data-vl-value=${value}
            ?data-vl-single=${single}
            ?data-vl-checked=${checked}
        ></vl-radio>
    `
);
RadioDefault.storyName = 'vl-radio - default';
RadioDefault.args = {
    label: 'Ja',
    name: 'options',
    value: 'Ja',
};

export const RadioImage = story(
    radioArgs,
    ({ block, checked, disabled, error, label, name, single, value }) => html`
        <vl-radio
            ?data-vl-block=${block}
            ?data-vl-disabled=${disabled}
            ?data-vl-error=${error}
            data-vl-label=${label}
            data-vl-name=${name}
            data-vl-value=${value}
            ?data-vl-single=${single}
            ?data-vl-checked=${checked}
        >
            <img is="vl-image" sizes="100vw" src="cat.jpeg" alt="Example image" />
        </vl-radio>
    `
);
RadioImage.storyName = 'vl-radio - image';
