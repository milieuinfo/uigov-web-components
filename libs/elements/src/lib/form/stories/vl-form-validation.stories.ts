import { html } from 'lit-html';
import '../vl-form.element';
import '../../button/vl-button.element';
import '../../form-grid/vl-form-grid.element';
import '../../form-message/vl-form-annotation.element';
import '../../form-message/vl-form-validation-message.element';
import { formArgs, formArgTypes } from './vl-form.stories-arg';
import formValidationDoc from './vl-form-validation.stories-doc.mdx';
import { Meta } from '@storybook/web-components';
import { story } from '@domg-wc/common-storybook';

export default {
    title: 'Elements/form',
    args: formArgs,
    argTypes: formArgTypes,
    parameters: {
        docs: { page: formValidationDoc },
    },
} as Meta<typeof formArgs>;

export const formValidation = story(
    formArgs,
    ({ validate, nativeValidation, escapeFieldNames }) => html`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${validate}
                ?data-vl-native-validation=${nativeValidation}
                ?data-vl-escape-field-names=${escapeFieldNames}
            >
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
            </form>
        </div>
    `
);
formValidation.storyName = 'vl-form - validation';
formValidation.args = {
    validate: true,
};

export const formValidationOptional = story(
    formArgs,
    ({ validate, nativeValidation, escapeFieldNames }) => html`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${validate}
                ?data-vl-native-validation=${nativeValidation}
                ?data-vl-escape-field-names=${escapeFieldNames}
            >
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
                        <label is="vl-form-label" for="firstname" data-vl-block> Voornaam </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="firstname"
                            name="firstname"
                            autocomplete="given-name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-error-message="Geef een voornaam in."
                            data-vl-error-placeholder="firstname-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>
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
            </form>
        </div>
    `
);
formValidationOptional.storyName = 'vl-form - validation optional';
formValidationOptional.args = {
    validate: true,
};

export const formValidationEscapeFieldNames = story(
    formArgs,
    ({ validate, nativeValidation, escapeFieldNames }) => html`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${validate}
                ?data-vl-native-validation=${nativeValidation}
                ?data-vl-escape-field-names=${escapeFieldNames}
            >
                <div is="vl-form-grid" data-vl-is-stacked>
                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="foo.bar" data-vl-block>
                            Naam
                            <span is="vl-form-annotation-span">(verplicht)</span>
                        </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="foo.bar"
                            name="foo.bar"
                            autocomplete="name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-required
                            data-vl-error-message="Geef een naam in."
                            data-vl-error-placeholder="foo.bar-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="foo.bar-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="foo.bar.baz" data-vl-block>
                            Voornaam
                            <span is="vl-form-annotation-span">(verplicht)</span>
                        </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="foo.bar.baz"
                            name="foo.bar.baz"
                            autocomplete="given-name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-required
                            data-vl-error-message="Geef een voornaam in."
                            data-vl-error-placeholder="foo.bar.baz-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="foo.bar.baz-error"></p>
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
            </form>
        </div>
    `
);
formValidationEscapeFieldNames.storyName = 'vl-form - validation escape field names';
formValidationEscapeFieldNames.args = {
    validate: true,
    escapeFieldNames: true,
};
