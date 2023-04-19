import { html, nothing } from 'lit-html';
import '../vl-checkbox.component';
import { checkboxArgs, checkboxArgTypes } from './vl-checkbox.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import checkboxDoc from './vl-checkbox.stories-doc.mdx';

export default {
    title: 'Components/checkbox',
    args: checkboxArgs,
    argTypes: checkboxArgTypes,
    parameters: {
        docs: { page: checkboxDoc },
    },
} as Meta<typeof checkboxArgs>;

export const CheckboxDefault: StoryFn<typeof checkboxArgs> = ({
    block,
    checked,
    disabled,
    error,
    label,
    name,
    single,
    value,
}: typeof checkboxArgs) => html`
    <vl-checkbox
        ?data-vl-block=${block}
        ?data-vl-checked=${checked}
        ?data-vl-disabled=${disabled}
        ?data-vl-error=${error}
        data-vl-label=${label || nothing}
        data-vl-name=${name || nothing}
        ?data-vl-single=${single}
        data-vl-value=${value || nothing}
    ></vl-checkbox>
`;
CheckboxDefault.storyName = 'vl-checkbox - default';

export const CheckboxSwitch: StoryFn<typeof checkboxArgs> = ({
    block,
    checked,
    disabled,
    error,
    label,
    name,
    single,
    value,
}: typeof checkboxArgs) => html`
    <vl-checkbox
        ?data-vl-block=${block}
        ?data-vl-checked=${checked}
        ?data-vl-disabled=${disabled}
        ?data-vl-error=${error}
        data-vl-label=${label || nothing}
        data-vl-name=${name || nothing}
        ?data-vl-single=${single}
        data-vl-switch
        data-vl-value=${value || nothing}
    ></vl-checkbox>
`;
CheckboxSwitch.storyName = 'vl-checkbox - switch';
CheckboxSwitch.args = {
    ...checkboxArgs,
    label: 'Instellingen blokkeren',
};

export const CheckboxForm: StoryFn<typeof checkboxArgs> = ({
    block,
    checked,
    disabled,
    error,
    label,
    name,
    single,
    value,
    errorMessage,
    required,
}: typeof checkboxArgs) => {
    return html`
        <p>Hieronder vind je een checkbox met validatie.</p>
        <form is="vl-form" data-vl-validate id="form-with-checkbox">
            <div is="vl-form-column" data-vl-size="9">
                <vl-checkbox
                    ?data-vl-block=${block}
                    ?data-vl-checked=${checked}
                    ?data-vl-disabled=${disabled}
                    ?data-vl-error=${error}
                    data-vl-label=${label || nothing}
                    data-vl-name=${name || nothing}
                    ?data-vl-single=${single}
                    ?data-vl-required=${required}
                    data-vl-error-placeholder=${required ? 'checkbox-error' : nothing}
                    data-vl-value=${value || nothing}
                    data-vl-error-message=${errorMessage || nothing}
                ></vl-checkbox>
                <p is="vl-form-validation-message" id="checkbox-error-message" data-vl-error-id="checkbox-error">
                    U moet akkoord gaat met het bovenstaande om verder te kunnen gaan
                </p>
            </div>
            <button is="vl-button" id="validate-button">Valideren</button>
        </form>
    `;
};
CheckboxForm.storyName = 'vl-checkbox - form';
CheckboxForm.args = {
    ...checkboxArgs,
    label: 'Aanvinken voor akkoord en gelezen',
    errorMessage: '',
    required: true,
};
