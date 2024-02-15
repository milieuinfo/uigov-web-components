import { story } from '@domg-wc/common-storybook';
import { inputFieldArgTypes, inputFieldArgs } from './vl-input-field.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import inputFieldDocs from './vl-input-field.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlInputFieldComponent } from '../vl-input-field.component';

registerWebComponents([VlInputFieldComponent]);

export default {
    title: 'Form-next/input-field',
    tags: ['autodocs'],
    args: inputFieldArgs,
    argTypes: inputFieldArgTypes,
    parameters: {
        docs: {
            page: inputFieldDocs,
        },
    },
} as Meta<typeof inputFieldArgs>;

const InputFieldTemplate = story(
    inputFieldArgs,
    ({
        id,
        name,
        label,
        required,
        disabled,
        error,
        success,
        block,
        readonly,
        type,
        value,
        placeholder,
        autocomplete,
        minLength,
        maxLength,
        min,
        max,
        minExclusive,
        maxExclusive,
        pattern,
        regex,
        onVlInput,
        onVlReset,
        onVlValid,
    }) => {
        return html` <vl-input-field-next
            id=${id}
            name=${name}
            label=${label}
            ?required=${required}
            ?disabled=${disabled}
            ?error=${error}
            ?success=${success}
            ?block=${block}
            ?readonly=${readonly}
            type=${type}
            value=${value}
            placeholder=${placeholder}
            autocomplete=${autocomplete}
            min-length=${minLength}
            max-length=${maxLength}
            min=${min}
            max=${max}
            min-exclusive=${minExclusive}
            max-exclusive=${maxExclusive}
            pattern=${pattern}
            .regex=${regex}
            @vl-input=${onVlInput}
            @vl-reset=${onVlReset}
            @vl-valid=${onVlValid}
        ></vl-input-field-next>`;
    }
);

export const InputFieldDefault = InputFieldTemplate.bind({});
InputFieldDefault.storyName = 'vl-input-field-next - default';

export const InputFieldNumber = InputFieldTemplate.bind({});
InputFieldNumber.storyName = 'vl-input-field-next - number';
InputFieldNumber.args = {
    type: 'number',
};
