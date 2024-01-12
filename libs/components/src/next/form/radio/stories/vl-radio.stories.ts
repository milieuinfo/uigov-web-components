import { story } from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { radioArgs, radioArgTypes } from './vl-radio.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import radioDoc from './vl-radio.stories-doc.mdx';
import { VlRadioComponent } from '../vl-radio.component';

registerWebComponents([VlRadioComponent]);

export default {
    title: 'Components-next/form/radio',
    tags: ['autodocs'],
    args: radioArgs,
    argTypes: radioArgTypes,
} as Meta<typeof radioArgs>;

export const RadioDefault = story(
    radioArgs,
    ({ block, readonly, name, id, checked, disabled, error, success, value, onVlChecked }) => html`
        <vl-radio-next
            value=${value}
            ?block=${block}
            ?readonly=${readonly}
            name=${name}
            id=${id}
            ?checked=${checked}
            ?disabled=${disabled}
            ?error=${error}
            ?success=${success}
            @vl-checked=${onVlChecked}
        >
            Optie 1.
        </vl-radio-next>
    `
);
RadioDefault.storyName = 'vl-radio-next - default';
RadioDefault.args = {
    value: 'Optie 1',
};
