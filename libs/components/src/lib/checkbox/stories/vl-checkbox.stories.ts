import { html, nothing } from 'lit-html';
import '../vl-checkbox.component';
import { checkboxArgs, checkboxArgTypes } from './vl-checkbox.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import checkboxDoc from './vl-checkbox.stories-doc.mdx';

export default {
    title: 'Components/checkbox',
    args: checkboxArgs,
    argTypes: checkboxArgTypes,
    parameters: {
        docs: { page: checkboxDoc },
    },
} as Meta<typeof checkboxArgs>;

export const CheckboxDefault: StoryFn<typeof checkboxArgs> = ({
    block,
    checked,
    disabled,
    error,
    label,
    name,
    single,
    value,
}: typeof checkboxArgs) => html`
    <vl-checkbox
        ?data-vl-block=${block}
        ?data-vl-checked=${checked}
        ?data-vl-disabled=${disabled}
        ?data-vl-error=${error}
        data-vl-label=${label || nothing}
        data-vl-name=${name || nothing}
        ?data-vl-single=${single}
        data-vl-value=${value || nothing}
    ></vl-checkbox>
`;
CheckboxDefault.storyName = 'vl-checkbox - default';

export const CheckboxSwitch: StoryFn<typeof checkboxArgs> = ({
    block,
    checked,
    disabled,
    error,
    label,
    name,
    single,
    value,
}: typeof checkboxArgs) => html`
    <vl-checkbox
        ?data-vl-block=${block}
        ?data-vl-checked=${checked}
        ?data-vl-disabled=${disabled}
        ?data-vl-error=${error}
        data-vl-label=${label || nothing}
        data-vl-name=${name || nothing}
        ?data-vl-single=${single}
        data-vl-switch
        data-vl-value=${value || nothing}
    ></vl-checkbox>
`;
CheckboxSwitch.storyName = 'vl-checkbox - switch';
CheckboxSwitch.args = {
    ...checkboxArgs,
    label: 'Instellingen blokkeren',
};
