import { html } from 'lit-html';
import '../vl-form.element';
import '../../button/vl-button.element';
import '../../form-grid/vl-form-grid.element';
import '../../form-message/vl-form-annotation.element';
import { formArgs, formArgTypes } from './vl-form.stories-arg';

export default {
    title: 'Elements/form',
    args: formArgs,
    argTypes: formArgTypes,
};

export const formDefault = ({ validate }: typeof formArgs) => html`
    <div style="max-width: 800px">
        <form is="vl-form" data-cy="form-default" ?data-vl-validate=${validate}>
            <div is="vl-form-grid" data-vl-is-stacked>
                <div is="vl-form-column" data-vl-size="3">
                    <label is="vl-form-label" for="name" data-vl-block>
                        Naam
                        <span is="vl-form-annotation-span">(verplicht)</span>
                    </label>
                </div>
                <div is="vl-form-column" data-vl-size="9">
                    <input name="name" autocomplete="name" is="vl-input-field" data-vl-block />
                </div>

                <div is="vl-form-column" data-vl-size="3">
                    <label is="vl-form-label" for="firstname" data-vl-block>
                        Voornaam
                        <span is="vl-form-annotation-span">(verplicht)</span>
                    </label>
                </div>
                <div is="vl-form-column" data-vl-size="9">
                    <input name="firstname" autocomplete="firstname" is="vl-input-field" data-vl-block />
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
formDefault.storyName = 'vl-form - default';
