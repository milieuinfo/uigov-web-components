import { story } from '@domg-wc/common-storybook';
import { inputFieldArgTypes, inputFieldArgs } from './vl-input-field.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import inputFieldDocs from './vl-input-field.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlInputFieldComponent } from '../vl-input-field.component';

registerWebComponents([VlInputFieldComponent]);

export default {
    title: 'Components-next/form/input-field',
    tags: ['autodocs'],
    args: inputFieldArgs,
    argTypes: inputFieldArgTypes,
    parameters: {
        docs: {
            page: inputFieldDocs,
        },
    },
} as Meta<typeof inputFieldArgs>;

export const InputFieldDefault = story(
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
        minLength,
        maxLength,
        min,
        max,
        pattern,
        onVlInput,
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
            min-length=${minLength}
            max-length=${maxLength}
            min=${min}
            max=${max}
            pattern=${pattern}
            @vl-input=${onVlInput}
        ></vl-input-field-next>`;
    }
);
InputFieldDefault.storyName = 'vl-input-field-next - default';
