import { story } from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { VlTextareaComponent } from '../vl-textarea.component';
import { textareaArgs, textareaArgTypes } from './vl-textarea.stories-arg';
import textareaDocs from './vl-textarea.stories-doc.mdx';

registerWebComponents([VlTextareaComponent]);

export default {
    id: 'form-next-textarea',
    title: 'Form-next/textarea',
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
        placeholder,
        autocomplete,
        minLength,
        maxLength,
        rows,
        cols,
        onVlChange,
        onVlInput,
        onVlReset,
        onVlValid,
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
            placeholder=${placeholder}
            autocomplete=${autocomplete}
            min-length=${minLength}
            max-length=${maxLength}
            rows=${rows}
            cols=${cols}
            @vl-change=${onVlChange}
            @vl-input=${onVlInput}
            @vl-reset=${onVlReset}
            @vl-valid=${onVlValid}
        ></vl-textarea-next>`;
    }
);
TextareaDefault.storyName = 'vl-textarea-next - default';
