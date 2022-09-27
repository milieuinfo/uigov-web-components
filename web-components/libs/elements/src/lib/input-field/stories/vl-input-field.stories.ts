import { html } from 'lit-html';
import '../vl-input-field.element';
import { inputFieldArgs, inputFieldArgTypes } from './vl-input-field.stories-arg';
import { formValidationArgsDisabled } from '../../form-validation/stories/form-validation.stories-arg';

export default {
    title: 'Elements/input-field',
    args: inputFieldArgs,
    argTypes: inputFieldArgTypes,
};

export const inputFieldDefault = ({ block, error, success, small }: typeof inputFieldArgs) => html`
    <input
        is="vl-input-field"
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-success=${success}
        ?data-vl-small=${small}
        data-cy="input-field"
    />
`;
inputFieldDefault.storyName = 'vl-input-field - default';
inputFieldDefault.argTypes = formValidationArgsDisabled;

export const inputFieldDisabled = ({ block, error, success, small }: typeof inputFieldArgs) => html`
    <input
        is="vl-input-field"
        disabled
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-success=${success}
        ?data-vl-small=${small}
        data-cy="input-field"
    />
`;
inputFieldDisabled.storyName = 'vl-input-field - disabled';
inputFieldDisabled.argTypes = formValidationArgsDisabled;
