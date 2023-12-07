import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';
import { textareaArgTypes, textareaArgs } from './vl-textarea.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import textareaDocs from './vl-textarea.stories-doc.mdx';
import '../vl-textarea.component';

export default {
    title: 'Components-next/form/textarea-next',
    tags: ['autodocs'],
    args: storyArgs(textareaArgs),
    argTypes: storyArgTypes(textareaArgTypes, true),
    parameters: {
        docs: {
            page: textareaDocs,
        },
    },
} as Meta<typeof textareaArgs>;

export const TextareaDefault = story(
    textareaArgs,
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
        minLength,
        maxLength,
        rows,
        cols,
    }) => {
        return html` <vl-textarea-next
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
            min-length=${minLength}
            max-length=${maxLength}
            rows=${rows}
            cols=${cols}
        ></vl-textarea-next>`;
    }
);
TextareaDefault.storyName = 'vl-textarea-next - default';
