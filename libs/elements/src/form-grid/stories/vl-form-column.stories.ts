import { html } from 'lit-html';
import '../vl-form-column.element';
import '../../form/vl-form.element';
import '../../form-grid/vl-form-grid.element';
import '../../input-field/vl-input-field.element';
import { gridColumnBaseArgs, gridColumnBaseArgTypes } from '../../grid/stories/vl-grid-column.stories-arg';

export default {
    title: 'Elements/form-grid',
    args: gridColumnBaseArgs,
    argTypes: gridColumnBaseArgTypes,
};

export const formGridColumn = ({
    size,
    maxSize,
    mediumSize,
    mediumMaxSize,
    smallSize,
    smallMaxSize,
    extraSmallSize,
    extraSmallMaxSize,
    push,
}: typeof gridColumnBaseArgs) => html`
    <form is="vl-form" data-cy="form">
        <div is="vl-form-grid">
            <div
                is="vl-form-column"
                data-vl-size=${size}
                data-vl-max-size=${maxSize}
                data-vl-medium-size=${mediumSize}
                data-vl-medium-max-size=${mediumMaxSize}
                data-vl-small-size=${smallSize}
                data-vl-small-max-size=${smallMaxSize}
                data-vl-extra-small-size=${extraSmallSize}
                data-vl-extra-small-max-size=${extraSmallMaxSize}
                data-vl-push=${push}
                data-cy="form-column"
            >
                <input name="surname" is="vl-input-field" placeholder="Doe" data-vl-block />
            </div>
        </div>
    </form>
`;
formGridColumn.storyName = 'vl-form-grid - column';
