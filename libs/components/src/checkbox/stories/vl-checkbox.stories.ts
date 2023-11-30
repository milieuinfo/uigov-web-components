import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-checkbox.component';
import { checkboxArgs, checkboxArgTypes } from './vl-checkbox.stories-arg';
import checkboxDoc from './vl-checkbox.stories-doc.mdx';

export default {
    title: 'Components/checkbox',
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
    ({ block, checked, disabled, error, label, name, single, value }) => html`
        <vl-checkbox
            ?data-vl-block=${block}
            ?data-vl-checked=${checked}
            ?data-vl-disabled=${disabled}
            ?data-vl-error=${error}
            data-vl-label=${label}
            data-vl-name=${name}
            ?data-vl-single=${single}
            data-vl-value=${value}
        ></vl-checkbox>
    `
);
CheckboxDefault.storyName = 'vl-checkbox - default';
CheckboxDefault.args = {
    label: 'Optie 1',
    name: 'options',
    switchAttr: true,
    value: 'Optie 1',
};

export const CheckboxSwitch = story(
    checkboxArgs,
    ({ block, checked, disabled, error, label, name, single, value }) => html`
        <vl-checkbox
            ?data-vl-block=${block}
            ?data-vl-checked=${checked}
            ?data-vl-disabled=${disabled}
            ?data-vl-error=${error}
            data-vl-label=${label}
            data-vl-name=${name}
            ?data-vl-single=${single}
            data-vl-switch
            data-vl-value=${value}
        ></vl-checkbox>
    `
);
CheckboxSwitch.storyName = 'vl-checkbox - switch';
CheckboxSwitch.args = {
    label: 'Instellingen blokkeren',
    name: 'options',
    switchAttr: true,
    value: 'Optie 1',
};
