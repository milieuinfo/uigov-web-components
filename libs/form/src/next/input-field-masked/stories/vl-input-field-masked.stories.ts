import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { inputFieldMaskedArgs, inputFieldMaskedArgTypes } from './vl-input-field-masked.stories-arg';
import inputFieldMaskedDocs from './vl-input-field-masked.stories-doc.mdx';
import { VlInputFieldMaskedComponent } from '../vl-input-field-masked.component';
import { registerWebComponents } from '@domg-wc/common';
import { VlFormLabelComponent } from '../../form-label';

registerWebComponents([VlInputFieldMaskedComponent, VlFormLabelComponent]);

export default {
    id: 'form-next-input-field-masked',
    title: 'Form-next/input-field-masked',
    tags: ['autodocs'],
    args: inputFieldMaskedArgs,
    argTypes: inputFieldMaskedArgTypes,
    parameters: {
        controls: { exclude: ['pattern', 'type'] },
        docs: {
            page: inputFieldMaskedDocs,
        },
    },
} as Meta<typeof inputFieldMaskedArgs>;

const InputFieldMaskedTemplate = story(
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
        value,
        placeholder,
        autocomplete,
        minLength,
        maxLength,
        min,
        max,
        minExclusive,
        maxExclusive,
        mask,
        maskPrefix,
        rawValue,
        disableMaskValidation,
        regex,
        onVlChange,
        onVlInput,
        onVlReset,
        onVlValid,
    }) => {
        return html`
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
                value=${value}
                placeholder=${placeholder}
                autocomplete=${autocomplete}
                min-length=${minLength}
                max-length=${maxLength}
                min=${min}
                max=${max}
                min-exclusive=${minExclusive}
                max-exclusive=${maxExclusive}
                mask=${mask}
                mask-prefix=${maskPrefix}
                ?raw-value=${rawValue}
                ?disable-mask-validation=${disableMaskValidation}
                .regex=${regex}
                @vl-change=${onVlChange}
                @vl-input=${onVlInput}
                @vl-reset=${onVlReset}
                @vl-valid=${onVlValid}
            ></vl-input-field-masked-next>
        `;
    }
);

const labelDecorator = (label: string) => (story: () => unknown) =>
    html` <div><vl-form-label-next for="story-input" label=${label} block></vl-form-label-next>${story()}</div> `;

export const InputFieldMaskedIban = InputFieldMaskedTemplate.bind({});
InputFieldMaskedIban.storyName = 'vl-input-field-masked-next - iban';
InputFieldMaskedIban.decorators = [labelDecorator('IBAN')];
InputFieldMaskedIban.args = {
    id: 'story-input',
    mask: 'iban',
};

export const InputFieldMaskedRrn = InputFieldMaskedTemplate.bind({});
InputFieldMaskedRrn.storyName = 'vl-input-field-masked-next - rrn';
InputFieldMaskedRrn.decorators = [labelDecorator('Rijkregisternummer')];
InputFieldMaskedRrn.args = {
    id: 'story-input',
    mask: 'rrn',
};

export const InputFieldMaskedUuid = InputFieldMaskedTemplate.bind({});
InputFieldMaskedUuid.storyName = 'vl-input-field-masked-next - uuid';
InputFieldMaskedUuid.decorators = [labelDecorator('UUID')];
InputFieldMaskedUuid.args = {
    id: 'story-input',
    mask: 'uuid',
};

export const InputFieldMaskedDate = InputFieldMaskedTemplate.bind({});
InputFieldMaskedDate.storyName = 'vl-input-field-masked-next - date';
InputFieldMaskedDate.decorators = [labelDecorator('Date')];
InputFieldMaskedDate.args = {
    id: 'story-input',
    mask: 'date',
};

export const InputFieldMaskedNumerical = InputFieldMaskedTemplate.bind({});
InputFieldMaskedNumerical.storyName = 'vl-input-field-masked-next - numerical';
InputFieldMaskedNumerical.decorators = [labelDecorator('Numerical')];
InputFieldMaskedNumerical.args = {
    id: 'story-input',
    mask: 'numerical',
};

export const InputFieldMaskedPrice = InputFieldMaskedTemplate.bind({});
InputFieldMaskedPrice.storyName = 'vl-input-field-masked-next - price';
InputFieldMaskedPrice.decorators = [labelDecorator('Price')];
InputFieldMaskedPrice.args = {
    id: 'story-input',
    mask: 'price',
};

export const InputFieldMaskedPhone = InputFieldMaskedTemplate.bind({});
InputFieldMaskedPhone.storyName = 'vl-input-field-masked-next - phone';
InputFieldMaskedPhone.decorators = [labelDecorator('Phone')];
InputFieldMaskedPhone.args = {
    id: 'story-input',
    mask: 'phone',
};

export const InputFieldMaskedPhoneInternational = InputFieldMaskedTemplate.bind({});
InputFieldMaskedPhoneInternational.storyName = 'vl-input-field-masked-next - phoneinternational';
InputFieldMaskedPhoneInternational.decorators = [labelDecorator('Phone international')];
InputFieldMaskedPhoneInternational.args = {
    id: 'story-input',
    mask: 'phoneinternational',
};

export const InputFieldMaskedMobile = InputFieldMaskedTemplate.bind({});
InputFieldMaskedMobile.storyName = 'vl-input-field-masked-next - mobile';
InputFieldMaskedMobile.decorators = [labelDecorator('Mobile')];
InputFieldMaskedMobile.args = {
    id: 'story-input',
    mask: 'mobile',
};
