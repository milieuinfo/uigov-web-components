import { story } from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { radioGroupArgs, radioGroupArgTypes } from './vl-radio-group.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import radioGroupDoc from './vl-radio-group.stories-doc.mdx';
import { VlRadioComponent } from '../vl-radio.component';
import { VlRadioGroupComponent } from '../vl-radio-group.component';

registerWebComponents([VlRadioComponent, VlRadioGroupComponent]);

export default {
    title: 'Form-next/radio-group',
    tags: ['autodocs'],
    args: radioGroupArgs,
    argTypes: radioGroupArgTypes,
    parameters: {
        docs: {
            page: radioGroupDoc,
        },
    },
} as Meta<typeof radioGroupArgs>;

export const RadioGroupDefault = story(
    radioGroupArgs,
    ({ id, block, required, readonly, disabled, error, success, label, name, value, onVlChecked }) => html`
        <vl-radio-group-next
            id=${id}
            name=${name}
            label=${label}
            value=${value}
            ?block=${block}
            ?required=${required}
            ?readonly=${readonly}
            ?disabled=${disabled}
            ?error=${error}
            ?success=${success}
            @vl-checked="${onVlChecked}"
        >
            <vl-radio-next value="land">Land</vl-radio-next>
            <vl-radio-next value="zee">Zee</vl-radio-next>
            <vl-radio-next value="lucht">Lucht</vl-radio-next>
        </vl-radio-group-next>
    `
);
RadioGroupDefault.storyName = 'vl-radio-group-next - default';
RadioGroupDefault.args = {
    id: 'land-zee',
    name: 'land-zee',
    label: 'land-zee',
    value: 'land',
};
