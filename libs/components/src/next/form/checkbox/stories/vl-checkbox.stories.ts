import { html } from 'lit-html';
import '../vl-checkbox.component';
import { checkboxArgs, checkboxArgTypes } from './vl-checkbox.stories-arg';
import { Meta } from '@storybook/web-components';
import checkboxDoc from './vl-checkbox.stories-doc.mdx';
import { storyArgTypes, storyArgs, story } from '@domg-wc/common-storybook';

export default {
    title: 'Components-next/form/checkbox',
    args: storyArgs(checkboxArgs),
    argTypes: storyArgTypes(checkboxArgTypes, true),
    parameters: {
        docs: {
            page: checkboxDoc,
        },
    },
} as Meta<typeof checkboxArgs>;

export const CheckboxDefault = story(
    checkboxArgs,
    ({ id, block, checked, disabled, error, label, name, value, isSwitch }) => html`
        <vl-checkbox-next
            ?block=${block}
            ?checked=${checked}
            ?disabled=${disabled}
            ?error=${error}
            ?label=${label}
            ?switch=${isSwitch}
            id=${id}
            name=${name}
            value=${value}
        >
            Bevestig.
        </vl-checkbox-next>
    `
);
CheckboxDefault.storyName = 'vl-checkbox-next - default';
CheckboxDefault.args = {
    name: 'options',
    isSwitch: false,
    value: 'Optie 1',
};

export const CheckboxSwitch = story(
    checkboxArgs,
    ({ id, block, checked, disabled, error, label, name, value, isSwitch }) => html`
        <vl-checkbox-next
            ?block=${block}
            ?checked=${checked}
            ?disabled=${disabled}
            ?error=${error}
            ?label=${label}
            id=${id}
            name=${name}
            ?switch=${isSwitch}
            value=${value}
        >
            Instellingen toepassen.
        </vl-checkbox-next>
    `
);
CheckboxSwitch.storyName = 'vl-checkbox-next - switch';
CheckboxSwitch.args = {
    name: 'options',
    isSwitch: true,
    value: 'Optie 1',
};
