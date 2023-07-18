import { html } from 'lit-html';
import '../vl-form.element';
import '../../button/vl-button.element';
import '../../form-grid/vl-form-grid.element';
import '../../input-field/vl-input-field.element';
import '../../form-message/vl-form-validation-message.element';
import { formArgs, formArgTypes } from './vl-form.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import { setDefaultArgsToNothing } from '@domg-wc/common-storybook';
import formValidationDoc from './vl-form-validation.stories-doc.mdx';

export default {
    title: 'Elements/form',
    args: formArgs,
    argTypes: formArgTypes,
    parameters: {
        docs: { page: formValidationDoc },
    },
} as Meta<typeof formArgs>;

export const formGroup: StoryFn<typeof formArgs> = (formParameters) => {
    const { validate, nativeValidation } = setDefaultArgsToNothing(formParameters, formArgs);
    return html`
        <div style="max-width: 800px">
            <form is="vl-form" ?data-vl-validate=${validate} ?data-vl-native-validation=${nativeValidation}>
                <div is="vl-form-group" data-cy="form-group">
                    <div is="vl-form-grid" data-vl-is-stacked>
                        <div is="vl-form-column" data-vl-size="3">
                            <label is="vl-form-label" for="name" data-vl-block>
                                Naam
                                <span is="vl-form-annotation-span">(verplicht)</span>
                            </label>
                        </div>
                        <div is="vl-form-column" data-vl-size="9">
                            <input
                                id="name"
                                name="name"
                                autocomplete="name"
                                is="vl-input-field"
                                data-vl-block
                                data-vl-required
                                data-vl-error-message="Geef een naam in."
                                data-vl-error-placeholder="name-error"
                            />
                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>
                        </div>

                        <div is="vl-form-column" data-vl-size="3">
                            <label is="vl-form-label" for="firstname" data-vl-block>
                                Voornaam
                                <span is="vl-form-annotation-span">(verplicht)</span>
                            </label>
                        </div>
                        <div is="vl-form-column" data-vl-size="9">
                            <input
                                id="firstname"
                                name="firstname"
                                autocomplete="given-name"
                                is="vl-input-field"
                                data-vl-block
                                data-vl-required
                                data-vl-error-message="Geef een voornaam in."
                                data-vl-error-placeholder="firstname-error"
                            />
                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>
                        </div>
                    </div>
                </div>
                <div is="vl-form-group" data-cy="form-group">
                    <div is="vl-form-grid" data-vl-is-stacked>
                        <div is="vl-form-column" data-vl-size="3">
                            <label is="vl-form-label" for="street" data-vl-block>
                                Straat
                                <span is="vl-form-annotation-span">(verplicht)</span>
                            </label>
                        </div>
                        <div is="vl-form-column" data-vl-size="9">
                            <input
                                id="street"
                                name="street"
                                autocomplete="address-line1"
                                is="vl-input-field"
                                data-vl-block
                                data-vl-required
                                data-vl-error-message="Geef een straat in."
                                data-vl-error-placeholder="street-error"
                            />
                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="street-error"></p>
                        </div>

                        <div is="vl-form-column" data-vl-size="3">
                            <label is="vl-form-label" for="city" data-vl-block>
                                Stad
                                <span is="vl-form-annotation-span">(verplicht)</span>
                            </label>
                        </div>
                        <div is="vl-form-column" data-vl-size="9">
                            <input
                                id="city"
                                name="city"
                                autocomplete="address-level2"
                                is="vl-input-field"
                                data-vl-block
                                data-vl-required
                                data-vl-error-message="Geef een stad in."
                                data-vl-error-placeholder="city-error"
                            />
                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="city-error"></p>
                        </div>

                        <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
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
        </div>
    `;
};
formGroup.storyName = 'vl-form - group';
formGroup.args = {
    validate: true,
};
