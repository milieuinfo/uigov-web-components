import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';
import { inputFieldArgTypes, inputFieldArgs } from './vl-input-field.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import inputFieldDocs from './vl-input-field.stories-doc.mdx';
import '../vl-input-field.component';

export default {
    title: 'Components-next/form/input-field-next',
    tags: ['autodocs'],
    args: storyArgs(inputFieldArgs),
    argTypes: storyArgTypes(inputFieldArgTypes, true),
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
        block,
        required,
        disabled,
        error,
        success,
        readonly,
        value,
        type,
        minLength,
        maxLength,
        min,
        max,
        pattern,
    }) => {
        return html` <vl-input-field-next
            id=${id}
            name=${name}
            label=${label}
            ?block=${block}
            ?required=${required}
            ?disabled=${disabled}
            ?error=${error}
            ?success=${success}
            ?readonly=${readonly}
            value=${value}
            type=${type}
            min-length=${minLength}
            max-length=${maxLength}
            min=${min}
            max=${max}
            pattern=${pattern}
        ></vl-input-field-next>`;
    }
);
InputFieldDefault.storyName = 'vl-input-field-next - default';
