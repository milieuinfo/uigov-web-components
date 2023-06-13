import { html } from 'lit-html';
import '../vl-form.element';
import '../../button/vl-button.element';
import '../../form-grid/vl-form-grid.element';
import '../../form-message/vl-form-annotation.element';
import { formArgs, formArgTypes } from './vl-form.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';
import formValidationDoc from './vl-form-validation.stories-doc.mdx';

export default {
    title: 'Elements/form',
    args: formArgs,
    argTypes: formArgTypes,
    parameters: {
        docs: { page: formValidationDoc },
    },
} as Meta<typeof formArgs>;

export const formDefault: StoryFn<typeof formArgs> = (formParameters: typeof formArgs) => {
    const { validate, nativeValidation } = setDefaultArgsToNothing(formParameters, formArgs);
    return html`
        <div style="max-width: 800px">
            <form is="vl-form" ?data-vl-validate=${validate} ?data-vl-native-validation=${nativeValidation}>
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
    `;
};
formDefault.storyName = 'vl-form - default';
formDefault.args = { validate: false };
