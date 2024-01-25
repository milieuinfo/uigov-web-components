import { html } from 'lit-html';
import { checkboxArgs, checkboxArgTypes } from './vl-checkbox.stories-arg';
import { Meta } from '@storybook/web-components';
import checkboxDoc from './vl-checkbox.stories-doc.mdx';
import { story } from '@domg-wc/common-storybook';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlCheckboxComponent } from '../vl-checkbox.component';

registerWebComponents([VlCheckboxComponent]);

export default {
    title: 'Components-next/form/checkbox',
    tags: ['autodocs'],
    args: checkboxArgs,
    argTypes: checkboxArgTypes,
    parameters: {
        docs: {
            page: checkboxDoc,
        },
    },
} as Meta<typeof checkboxArgs>;

const CheckboxTemplate = story(
    checkboxArgs,
    ({
        id,
        name,
        label,
        required,
        disabled,
        error,
        success,
        block,
        value,
        checked,
        isSwitch,
        contentSlot,
        onVlChecked,
    }) => html`
        <vl-checkbox-next
            id=${id}
            name=${name}
            label=${label}
            ?required=${required}
            ?disabled=${disabled}
            ?error=${error}
            ?success=${success}
            ?block=${block}
            value=${value}
            ?checked=${checked}
            ?switch=${isSwitch}
            @vl-checked=${onVlChecked}
        >
            ${unsafeHTML(contentSlot)}
        </vl-checkbox-next>
    `
);

export const CheckboxDefault = CheckboxTemplate.bind({});
CheckboxDefault.storyName = 'vl-checkbox-next - default';
CheckboxDefault.args = {
    id: 'checkbox-default',
    name: 'checkbox',
    contentSlot: '<span>Bevestig</span>',
};

export const CheckboxValue = CheckboxTemplate.bind({});
CheckboxValue.storyName = 'vl-checkbox-next - value';
CheckboxValue.args = {
    id: 'checkbox-value',
    name: 'checkbox',
    value: 'bevestigd',
    contentSlot: '<span>Bevestig</span>',
};

export const CheckboxSwitch = CheckboxTemplate.bind({});
CheckboxSwitch.storyName = 'vl-checkbox-next - switch';
CheckboxSwitch.args = {
    id: 'checkbox-switch',
    name: 'checkbox',
    isSwitch: true,
    contentSlot: '<span>Instellingen toepassen</span>',
};

export const CheckboxReadonly = story(
    checkboxArgs,
    ({
        id,
        name,
        label,
        required,
        disabled,
        error,
        success,
        block,
        value,
        checked,
        isSwitch,
        contentSlot,
        onVlChecked,
    }) => html`
        <vl-checkbox-next
            id=${id}
            name=${name}
            label=${label}
            ?required=${required}
            ?disabled=${disabled}
            ?error=${error}
            ?success=${success}
            ?block=${block}
            value=${value}
            ?checked=${checked}
            ?switch=${isSwitch}
            @vl-checked=${onVlChecked}
        >
            ${unsafeHTML(contentSlot)}
        </vl-checkbox-next>
        <input type="hidden" name=${name} value=${checked ? value || 'on' : ''} />
    `
);
CheckboxReadonly.storyName = 'vl-checkbox-next - readonly';
CheckboxReadonly.args = {
    id: 'checkbox-readonly',
    name: 'checkbox',
    disabled: true,
    checked: true,
    value: 'bevestigd',
    contentSlot: '<span>Bevestig</span>',
};
