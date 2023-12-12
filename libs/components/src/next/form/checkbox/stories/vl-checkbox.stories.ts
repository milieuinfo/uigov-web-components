import { html } from 'lit-html';
import '../vl-checkbox.component';
import { checkboxArgs, checkboxArgTypes } from './vl-checkbox.stories-arg';
import { Meta } from '@storybook/web-components';
import checkboxDoc from './vl-checkbox.stories-doc.mdx';
import { story } from '@domg-wc/common-storybook';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

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

export const CheckboxDefault = story(
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
CheckboxDefault.storyName = 'vl-checkbox-next - default';
CheckboxDefault.args = {
    id: 'checkbox-default',
    name: 'options',
    value: 'Optie 1',
    contentSlot: '<span>Bevestig.</span>',
};

export const CheckboxSwitch = story(
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
CheckboxSwitch.storyName = 'vl-checkbox-next - switch';
CheckboxSwitch.args = {
    id: 'checkbox-switch',
    name: 'options',
    isSwitch: true,
    value: 'Optie 1',
    contentSlot: '<span>Instellingen toepassen.</span>',
};
