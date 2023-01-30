import { html } from 'lit-html';
import '../vl-input-field.element';
import '../../action-group/vl-action-group.element';
import '../../button/vl-button.element';
import '../../form/vl-form.element';
import '../../form/vl-form-group.element';
import '../../form-grid/vl-form-grid.element';
import '../../form-grid/vl-form-column.element';
import '../../link/vl-link.element';
import '../../form-message/vl-form-validation-message.element';
import '../../form-message/vl-form-label.element';
import '../../form-message/vl-form-annotation.element';
import '../../icon/vl-icon.element';
import { VALIDATION_TYPE } from '../../form-validation/vl-form-validation.model';
import { inputFieldArgs, inputFieldArgTypes } from './vl-input-field.stories-arg';

export default {
    title: 'Elements/input-field',
    args: inputFieldArgs,
    argTypes: inputFieldArgTypes,
};

const Template = ({
    validationType,
    required,
    errorMessage,
    errorPlaceholder,
    successClass,
    errorClass,
    numericalOnlyInteger,
    numericalGreaterThan,
    numericalGreaterThanOrEqualTo,
    numericalLessThan,
    numericalLessThanOrEqualTo,
    block,
    error,
    success,
    disabled,
    small,
}: typeof inputFieldArgs) => html`
    <form is="vl-form" data-vl-validate target="_self" action="#">
        <div is="vl-form-group">
            <div is="vl-form-grid" data-vl-is-stacked>
                <div is="vl-form-column">
                    <label is="vl-form-label" for="name" data-vl-block>
                        Naam
                        <span is="vl-form-annotation-span">(verplicht)</span>
                    </label>
                </div>
                <div is="vl-form-column" data-vl-size="9">
                    <input
                        is="vl-input-field"
                        data-vl-validation-type=${validationType}
                        ?data-vl-required=${required}
                        data-vl-error-message=${errorMessage}
                        data-vl-error-placeholder=${errorPlaceholder}
                        ?data-vl-success-class=${successClass}
                        ?data-vl-error-class=${errorClass}
                        ?data-vl-numerical-only-integer=${numericalOnlyInteger}
                        data-vl-numerical-greater-than=${numericalGreaterThan}
                        data-vl-numerical-greater-than-or-equal-to=${numericalGreaterThanOrEqualTo}
                        data-vl-numerical-less-than=${numericalLessThan}
                        data-vl-numerical-less-than-or-equal-to=${numericalLessThanOrEqualTo}
                        ?data-vl-block=${block}
                        ?data-vl-error=${error}
                        ?data-vl-success=${success}
                        ?data-vl-disabled=${disabled}
                        ?data-vl-small=${small}
                    />
                    <p is="vl-form-validation-message" data-vl-error data-vl-error-id=${errorPlaceholder}></p>
                </div>

                <div is="vl-form-column" data-vl-size="9">
                    <div is="vl-action-group">
                        <button is="vl-button" type="submit">Versturen</button>
                        <a is="vl-link" href="#">
                            <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
                            Annuleren
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </form>
`;

// TODO kspeltin: 'as any' is een vuile fix
export const inputFieldFormWithValidation = Template.bind({}) as any;
inputFieldFormWithValidation.storyName = 'vl-input-field - form with validation';
inputFieldFormWithValidation.args = {
    errorMessage: 'Foutmelding komt hier.',
    errorPlaceholder: 'name-error-id',
};

export const inputFieldFormWithNumericalValidation = Template.bind({}) as any;
inputFieldFormWithNumericalValidation.storyName = 'vl-input-field - form with numerical validation';
inputFieldFormWithNumericalValidation.args = {
    validationType: VALIDATION_TYPE.NUMERICAL,
    errorMessage: 'Getal voldoet niet aan de voorwaarden.',
    errorPlaceholder: 'numerical-error-id',
    numericalOnlyInteger: true,
    numericalLessThan: 100,
    numericalLessThanOrEqualTo: 100,
    numericalGreaterThan: 1,
    numericalGreaterThanOrEqualTo: 1,
};
