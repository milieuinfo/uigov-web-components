import { story } from '@domg-wc/common-storybook';
import { VlFormElement } from '@domg-wc/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../../button/vl-button.element';
import '../../form-grid/vl-form-grid.element';
import '../../form-message/vl-form-annotation.element';
import '../../form-message/vl-form-validation-message.element';
import '../vl-form.element';
import formValidationDoc from './vl-form.stories-doc.mdx';
import { formArgs, formArgTypes } from './vl-form.stories-arg';

export default {
    id: 'Elements/form',
    title: 'Elements/form [deprecated]',
    tags: ['autodocs'],
    args: formArgs,
    argTypes: formArgTypes,
    parameters: {
        docs: { page: formValidationDoc },
    },
} as Meta<typeof formArgs>;

export const FormDefault = story(
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
                        <label is="vl-form-label" for="name" data-vl-block> Naam </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input id="name" name="name" autocomplete="name" is="vl-input-field" data-vl-block />
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
                        />
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
FormDefault.storyName = 'vl-form - default';
FormDefault.args = { validate: false };

export const FormGroupDefault = story(
    formArgs,
    ({ validate, nativeValidation, escapeFieldNames }) => html`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${validate}
                ?data-vl-native-validation=${nativeValidation}
                ?data-vl-escape-field-names=${escapeFieldNames}
            >
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
    `
);
FormGroupDefault.storyName = 'vl-form - group';
FormGroupDefault.args = {
    validate: true,
};

export const FormValidationDefault = story(
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
FormValidationDefault.storyName = 'vl-form - validation';
FormValidationDefault.args = {
    validate: true,
};

export const FormValidationOptional = story(
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
FormValidationOptional.storyName = 'vl-form - validation optional';
FormValidationOptional.args = {
    validate: true,
};

export const FormValidationEscapeFieldNames = story(
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
FormValidationEscapeFieldNames.storyName = 'vl-form - validation escape field names';
FormValidationEscapeFieldNames.args = {
    validate: true,
    escapeFieldNames: true,
};

export const FormValidationWithoutSubmit = story(formArgs, ({ validate, nativeValidation, escapeFieldNames }) => {
    let vlForm: HTMLFormElement & VlFormElement;
    customElements.whenDefined('vl-form').then(() => {
        vlForm = document.querySelector('form[is="vl-form"]') as HTMLFormElement & VlFormElement;
    });

    return html`
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
                            data-vl-required
                            data-vl-error-message="Geef een voornaam in."
                            data-vl-error-placeholder="firstname-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
                        <div is="vl-action-group">
                            <button
                                id="validate-without-submit"
                                is="vl-button"
                                type="button"
                                data-vl-tertiary
                                @click=${() => {
                                    vlForm?.requestValidation();
                                    console.log('vlForm.checkValidity', vlForm?.checkValidity());
                                }}
                            >
                                Valideer zonder submit
                            </button>
                            <a is="vl-link" href="#">
                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
                                Annuleren
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `;
});
FormValidationWithoutSubmit.storyName = 'vl-form - validation optional';
FormValidationWithoutSubmit.args = {
    validate: true,
};
