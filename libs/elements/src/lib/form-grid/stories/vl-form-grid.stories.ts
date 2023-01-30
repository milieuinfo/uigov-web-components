import { html } from 'lit-html';
import '../vl-form-column.element';
import '../vl-form-grid.element';
import '../../button/vl-button.element';
import '../../form/vl-form.element';
import '../../form-message/vl-form-label.element';
import '../../input-field/vl-input-field.element';
import { gridBaseArgs, gridBaseArgTypes } from '../../grid/stories/vl-grid.stories-arg';

export default {
    title: 'Elements/form-grid',
    parameters: {},
    args: gridBaseArgs,
    argTypes: gridBaseArgTypes,
};

export const formGridDefault = ({
    stacked,
    stackedSmall,
    stackedLarge,
    alignStart,
    alignCenter,
    alignEnd,
    alignSpaceBetween,
    alignSpaceAround,
    vTop,
    vCenter,
    vBottom,
    vStretch,
}: typeof gridBaseArgs) => {
    return html`
        <div style="max-width: 800px">
            <form is="vl-form" data-cy="form">
                <div
                    is="vl-form-grid"
                    ?data-vl-is-stacked=${stacked}
                    ?data-vl-is-stacked-small=${stackedSmall}
                    ?data-vl-is-stacked-large=${stackedLarge}
                    ?data-vl-align-start=${alignStart}
                    ?data-vl-align-center=${alignCenter}
                    ?data-vl-align-end=${alignEnd}
                    ?data-vl-align-space-between=${alignSpaceBetween}
                    ?data-vl-align-space-around=${alignSpaceAround}
                    ?data-vl-v-top=${vTop}
                    ?data-vl-v-center=${vCenter}
                    ?data-vl-v-bottom=${vBottom}
                    ?data-vl-v-stretch=${vStretch}
                    data-cy="form-grid"
                >
                    <div is="vl-form-column" data-vl-size="2">
                        <label is="vl-form-label" for="text" data-vl-block>Email</label>
                    </div>
                    <div is="vl-form-column" data-vl-size="10">
                        <input
                            id="email"
                            name="email"
                            is="vl-input-field"
                            placeholder="Bijv. naam@voorbeeld.be"
                            data-vl-block
                        />
                    </div>
                    <div is="vl-form-column" data-vl-size="2">
                        <label is="vl-form-label" for="text" data-vl-block>Voornaam</label>
                    </div>
                    <div is="vl-form-column" data-vl-size="10">
                        <input id="name" name="name" is="vl-input-field" placeholder="John" data-vl-block />
                    </div>
                    <div id="surname-label-column" is="vl-form-column" data-vl-size="2">
                        <label is="vl-form-label" for="url" data-vl-block>Naam</label>
                    </div>
                    <div id="surname-input-column" is="vl-form-column" data-vl-size="10">
                        <input id="surname" name="surname" is="vl-input-field" placeholder="Doe" data-vl-block />
                    </div>
                    <div is="vl-form-column" data-vl-size="10" data-vl-push="2">
                        <button is="vl-button" type="submit">Inschrijven</button>
                    </div>
                </div>
            </form>
        </div>
    `;
};
formGridDefault.storyName = 'vl-form-grid - default';
