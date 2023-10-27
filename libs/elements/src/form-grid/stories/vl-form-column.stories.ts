import { html } from 'lit-html';
import '../vl-form-column.element';
import '../../form/vl-form.element';
import '../../form-grid/vl-form-grid.element';
import '../../input-field/vl-input-field.element';
import { gridColumnArgs, gridColumnArgTypes } from '../../grid/stories/vl-grid-column.stories-arg';

export default {
    title: 'Elements/form-grid/form-column',
    tags: ['autodocs'],
    args: gridColumnArgs,
    argTypes: gridColumnArgTypes,
};

export const formGridColumn = ({
    size,
    maxSize,
    push,
    mediumSize,
    mediumMaxSize,
    mediumPush,
    smallSize,
    smallMaxSize,
    smallPush,
    extraSmallSize,
    extraSmallMaxSize,
    extraSmallPush,
}: typeof gridColumnArgs) => html`
    <form is="vl-form">
        <div is="vl-form-grid">
            <div
                is="vl-form-column"
                data-vl-size=${size}
                data-vl-max-size=${maxSize}
                data-vl-push=${push}
                data-vl-medium-size=${mediumSize}
                data-vl-medium-max-size=${mediumMaxSize}
                data-vl-medium-push=${mediumPush}
                data-vl-small-size=${smallSize}
                data-vl-small-max-size=${smallMaxSize}
                data-vl-small-push=${smallPush}
                data-vl-extra-small-size=${extraSmallSize}
                data-vl-extra-small-max-size=${extraSmallMaxSize}
                data-vl-extra-small-push=${extraSmallPush}
            >
                <input name="surname" is="vl-input-field" placeholder="Doe" data-vl-block />
            </div>
        </div>
    </form>
`;
formGridColumn.storyName = 'vl-form-grid - column';
