import { story } from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { radioArgs, radioArgTypes } from './vl-radio.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { VlRadioComponent } from '../vl-radio.component';

registerWebComponents([VlRadioComponent]);

export default {
    id: 'form-next-radio-group',
    title: 'Form-next/radio-group',
    tags: ['autodocs'],
    args: radioArgs,
    argTypes: radioArgTypes,
} as Meta<typeof radioArgs>;

export const RadioDefault = story(
    radioArgs,
    ({
        id,
        name,
        label,
        block,
        readonly,
        checked,
        disabled,
        error,
        success,
        value,
        defaultSlot,
        onVlChecked,
        onVlValid,
    }) => html`
        <vl-radio-next
            id=${id}
            name=${name}
            label=${label}
            value=${value}
            ?block=${block}
            ?readonly=${readonly}
            ?checked=${checked}
            ?disabled=${disabled}
            ?error=${error}
            ?success=${success}
            @vl-checked=${onVlChecked}
            @vl-valid=${onVlValid}
        >
            ${unsafeHTML(defaultSlot)}
        </vl-radio-next>
    `
);
RadioDefault.storyName = 'vl-radio-next - default';
RadioDefault.args = {
    value: 'Optie 1',
    defaultSlot: 'Optie 1',
};
