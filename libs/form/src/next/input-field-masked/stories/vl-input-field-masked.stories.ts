import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { inputFieldMaskedArgs, inputFieldMaskedArgTypes } from './vl-input-field-masked.stories-arg';
import inputFieldMaskedDocs from './vl-input-field-masked.stories-doc.mdx';
import { VlInputFieldMaskedComponent } from '../vl-input-field-masked.component';
import { registerWebComponents } from '@domg-wc/common-utilities';

registerWebComponents([VlInputFieldMaskedComponent]);

export default {
    title: 'Form-next/input-field-masked',
    tags: ['autodocs'],
    args: inputFieldMaskedArgs,
    argTypes: inputFieldMaskedArgTypes,
    parameters: {
        docs: {
            page: inputFieldMaskedDocs,
        },
    },
} as Meta<typeof inputFieldMaskedArgs>;

export const InputFieldMaskedDefault = story(
    inputFieldMaskedArgs,
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
        mask,
        maskPrefix,
        rawValue,
        disableValidation,
        validationRegex,
        onVlInput,
    }) => {
        return html`
            <div>
                <label class="vl-form__label vl-form__label--block" for="rrn">Rijksregisternummer</label>
                <vl-input-field-masked-next
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
                    mask=${mask}
                    mask-prefix=${maskPrefix}
                    ?raw-value=${rawValue}
                    ?disable-validation=${disableValidation}
                    .validationRegex=${validationRegex}
                    @vl-input=${onVlInput}
                ></vl-input-field-masked-next>
            </div>
        `;
    }
);
InputFieldMaskedDefault.storyName = 'vl-input-field-masked-next - default';
InputFieldMaskedDefault.args = {
    id: 'rrn',
    name: 'rrn',
    mask: 'rrn',
};
