import { story } from '@domg-wc/common-storybook';
import { textareaArgTypes, textareaArgs } from './vl-textarea.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import textareaDocs from './vl-textarea.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlTextareaComponent } from '../vl-textarea.component';

registerWebComponents([VlTextareaComponent]);

export default {
    title: 'Components-next/form/textarea',
    tags: ['autodocs'],
    args: textareaArgs,
    argTypes: textareaArgTypes,
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
        required,
        disabled,
        error,
        success,
        block,
        readonly,
        value,
        minLength,
        maxLength,
        rows,
        cols,
        onVlInput,
    }) => {
        return html` <vl-textarea-next
            id=${id}
            name=${name}
            label=${label}
            ?required=${required}
            ?disabled=${disabled}
            ?error=${error}
            ?success=${success}
            ?block=${block}
            ?readonly=${readonly}
            value=${value}
            min-length=${minLength}
            max-length=${maxLength}
            rows=${rows}
            cols=${cols}
            @vl-input=${onVlInput}
        ></vl-textarea-next>`;
    }
);
TextareaDefault.storyName = 'vl-textarea-next - default';
