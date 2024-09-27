import { story } from '@domg-wc/common-storybook';
import { formLabelArgs, formLabelArgTypes } from './vl-form-label.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import formLabelDocs from './vl-form-label.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlFormLabelComponent } from '../vl-form-label.component';

registerWebComponents([VlFormLabelComponent]);

export default {
    id: 'form-next-form-label',
    title: 'Form-next/form-label',
    tags: ['autodocs'],
    args: formLabelArgs,
    argTypes: formLabelArgTypes,
    parameters: {
        docs: {
            page: formLabelDocs,
        },
    },
} as Meta<typeof formLabelArgs>;

export const FormLabelDefault = story(formLabelArgs, ({ for: forValue, label, block, light }) => {
    return html`
        <vl-form-label-next for=${forValue} label=${label} ?block=${block} ?light=${light}></vl-form-label-next>
    `;
});
FormLabelDefault.storyName = 'vl-form-label-next - default';
FormLabelDefault.args = {
    label: 'Naam',
};
