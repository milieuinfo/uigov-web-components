import { html } from 'lit-html';
import '../vl-form-validation-message.element';
import { formValidationMessageArgs, formValidationMessageArgTypes } from './vl-form-validation-message.stories-arg';

export default {
    title: 'Elements/form-message',
    args: formValidationMessageArgs,
    argTypes: formValidationMessageArgTypes,
};

export const formValidationMessageDefault = ({ error, success }: typeof formValidationMessageArgs) => html`
    <p
        is="vl-form-validation-message"
        ?data-vl-error=${error}
        ?data-vl-success=${success}
        data-cy="form-validation-message"
    >
        Het veld 'Naam evenement' is een verplicht veld.
    </p>
`;
formValidationMessageDefault.storyName = 'vl-form-validation-message - default';
